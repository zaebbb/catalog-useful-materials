import { CustomFieldCodeList } from '@entities/Notes'
import { useAppDispatch } from '@lib/hooks/useAppDispatch'
import {
  type DefaultOnChangeOptions,
  type FileOnChangeOptions,
  InputField,
  InputFieldFile,
} from '@ui-kit/InputField'
import { TextareaField } from '@ui-kit/TextareaField'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { useGetCustomFieldFile } from '../../lib/hooks/useGetCustomFieldFile'
import {
  useGetCustomFieldValidationMessage,
} from '../../lib/hooks/useGetCustomFieldValidationMessage'
import {
  getIsLoadingSelector,
  getNoteCustomFieldsSelector,
} from '../../model/selectors/NotePatternCustomSelectors'
import {
  NotePatternCustomActions,
} from '../../model/slice/NotePatternCustomSlice'
import {
  RenderCustomFieldsSkeleton,
} from './RenderCustomFields.akeleton'

interface RenderCustomFieldsProps {
  className?: string
  files: Record<string, Files>
  setFiles: React.Dispatch<React.SetStateAction<Record<string, Files>>>
}

export interface OnChangeOptions {
  name: string
}

export const RenderCustomFields: React.FC<RenderCustomFieldsProps> =
  memo((props: RenderCustomFieldsProps) => {
    const {
      setFiles,
      files,
      className,
    } = props
    const dispatch = useAppDispatch()
    const { getFieldValidation } = useGetCustomFieldValidationMessage()
    const { getFieldFile } = useGetCustomFieldFile()

    const fields = useSelector(getNoteCustomFieldsSelector)
    const isLoading = useSelector(getIsLoadingSelector)

    const onChangeInputHandler = React.useCallback((
      value: string,
      options: DefaultOnChangeOptions
    ) => {
      if (options.name) {
        dispatch(NotePatternCustomActions.setStringValue({
          value,
          name: options.name,
        }))
      }
    }, [dispatch])

    const onChangeFilesHandler = React.useCallback((
      files: Files,
      options: FileOnChangeOptions | undefined
    ) => {
      if (options?.name) {
        const {
          name,
        } = options

        if (files.length) {
          setFiles(prev => ({
            ...prev,
            [name]: files,
          }))
        } else {
          setFiles(prev => ({
            ...prev,
            [name]: [],
          }))
        }
      }
    }, [setFiles])

    return React.useMemo(() => {
      if (!fields.length) {
        return <RenderCustomFieldsSkeleton/>
      } else {
        return fields.map((field) => {
          switch (field.code) {
            case CustomFieldCodeList.LINK:
            case CustomFieldCodeList.INPUT:
              return (
                <InputField
                  isRequired={field.isRequired}
                  label={field.title}
                  isLoading={isLoading}
                  key={field.name}
                  name={field.name}
                  onChange={onChangeInputHandler}
                  value={field.value}
                  validation={getFieldValidation(field)}
                  className={className}
                />
              )
            case CustomFieldCodeList.TEXTAREA:
              return (
                <TextareaField
                  label={field.title}
                  isRequired={field.isRequired}
                  isLoading={isLoading}
                  key={field.name}
                  name={field.name}
                  onChange={onChangeInputHandler}
                  value={field.value}
                  validation={getFieldValidation(field)}
                  className={className}
                />
              )
            case CustomFieldCodeList.FILE:
              return (
                <InputFieldFile
                  label={field.title}
                  isRequired={field.isRequired}
                  isLoading={isLoading}
                  key={field.name}
                  name={field.name}
                  validation={getFieldValidation(field)}
                  onChange={onChangeFilesHandler}
                  className={className}
                  value={getFieldFile(
                    files,
                    false,
                    field.name
                  )}
                  remoteFiles={field.value ? [field.value] : []}
                />
              )
            case CustomFieldCodeList.FILE_GROUP:
              return (
                <InputFieldFile
                  label={field.title}
                  isRequired={field.isRequired}
                  isLoading={isLoading}
                  isMultiple
                  key={field.name}
                  name={field.name}
                  validation={getFieldValidation(field)}
                  onChange={onChangeFilesHandler}
                  className={className}
                  remoteFiles={field.value ? JSON.parse(field.value) : []}
                  value={getFieldFile(
                    files,
                    true,
                    field.name
                  )}
                />
              )
            default:
              return null
          }
        })
      }
    }, [
      className,
      fields,
      files,
      getFieldFile,
      getFieldValidation,
      isLoading,
      onChangeFilesHandler,
      onChangeInputHandler,
    ])
  })
