import { TypedMemo } from '@lib/components/TypedMemo'
import { type Additional, classNames, type Mods } from '@lib/helpers/classNames'
import { IconLib } from '@ui-kit/Icon'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React from 'react'
import { RenderFiles } from '../../lib/components/RenderFiles'
import {
  type FileOnChangeOptions,
  type InputFieldFileProps,
} from '../../lib/types/InputFieldFileTypes'
import { filesHooks } from './../../lib/hooks/filesHooks'
import cls from './InputFieldFile.module.scss'

const InputFieldFileComponent = <O extends FileOnChangeOptions>(
  props: InputFieldFileProps<O>
) => {
  const {
    className,
    isMultiple = false,
    borderSize = 'small',
    value,
    onChange,
    label = '',
    validation = '',
    isReadonly = false,
    isLoading = false,
    isMax = true,
    success = '',
    remoteFiles = [],
    isRequired = false,
    name,
  } = props

  const [files, setFiles] = React.useState<Files>(value ?? [])

  const [mountedRemoteFiles, setMountedRemoteFiles] = React.useState<boolean>(false)

  const [valid, setValid] = React.useState('')
  const [successState, setSuccess] = React.useState('')

  const fileMessageClean = React.useCallback(() => {
    if (validation || success) {
      setValid('')
      setSuccess('')
    }
  }, [success, validation])

  const {
    onHandlerDrop,
    onHandlerDragLeave,
    onHandlerDragOver,
    isDragActive,
  } = filesHooks.useFieldFileDragOnDrop({
    setFiles, isMultiple, fileMessageClean,
  })

  const {
    onChangeHandler,
  } = filesHooks.useFieldFileOnChangeHandler({
    setFiles, isMultiple, fileMessageClean, files,
  })

  const {
    onDeleteHandler,
  } = filesHooks.useFieldFileDeleteHandler({
    setFiles, fileMessageClean,
  })

  const {
    getRemoteFiles,
  } = filesHooks.useFieldFileRemote({
    setFiles,
  })

  const [
    renderFiles,
    setRenderFiles,
  ] = React.useState<React.ReactNode>(<RenderFiles files={files} />)

  const additionalInput: Additional = [
    cls[`border-size-${borderSize}`],
  ]

  const CommonMods: Mods = {
    [cls.max]: isMax,
    [cls.readonly]: isReadonly,
    [cls.loadingCommon]: isLoading,
  }

  const wrapperMods: Mods = {
    [cls.error]: Boolean(valid),
    [cls.success]: Boolean(successState),
    [cls.loading]: isLoading,
    [cls.drag]: isDragActive,
    [cls.Required]: isRequired,
  }

  React.useEffect(() => {
    setRenderFiles(<RenderFiles onDelete={onDeleteHandler} files={files} />)
  }, [files, onDeleteHandler])

  React.useEffect(() => {
    onChange?.(files, {
      name,
      isMultiple,
    } as O)
  }, [files, isMultiple, name, onChange])

  React.useEffect(() => {
    if (!isLoading && validation) {
      setValid(validation)
    }
  }, [isLoading, validation])

  React.useEffect(() => {
    if (!isLoading && success) {
      setSuccess(success)
    }
  }, [isLoading, success])

  React.useEffect(() => {
    if (remoteFiles.length > 0 && !mountedRemoteFiles) {
      void getRemoteFiles(remoteFiles)
      setMountedRemoteFiles(true)
    }
  }, [getRemoteFiles, mountedRemoteFiles, remoteFiles])

  return (
    <div
      className={classNames(cls.InputFieldFile, CommonMods, [className])
      }>
      <VStack gap={16}>
        <label
          className={cls.InputFileLabel}
          onDragOver={onHandlerDragOver}
          onDragLeave={onHandlerDragLeave}
          onDrop={onHandlerDrop}
        >
          <VStack
            align={'center'}
            justify={'center'}
            gap={16}
            className={classNames(cls.Wrapper, wrapperMods, additionalInput)}
          >
            <IconLib Icon={'IconLoadLocal'} />
            {label && (
              <Text
                align={'center'}
                type={'small'}
                className={cls.title}
              >
                {label}
              </Text>
            )}
            {valid && <span className={cls.validation}>{valid}</span>}
            {successState && <span className={cls.successInfo}>{successState}</span>}
          </VStack>
          <input
            type="file"
            multiple={isMultiple}
            hidden
            onChange={onChangeHandler}
            disabled={isReadonly || isLoading}
          />
        </label>
        {Boolean(files.length) && (
          <HStack gap={16} isWrap className={cls.WrapperFiles}>
            {renderFiles}
          </HStack>
        )}
      </VStack>
    </div>
  )
}

export const InputFieldFile = TypedMemo(InputFieldFileComponent)
