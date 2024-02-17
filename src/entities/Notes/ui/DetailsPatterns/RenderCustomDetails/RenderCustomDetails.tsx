import { stringToHTML } from '@lib/helpers/stringToHTML'
import { AppImage } from '@ui-kit/AppImage'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { Slider } from '@ui-kit/Slider'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomFieldCodeList } from '../../../model/types/CustomFieldCode'
import { type FieldNoteOptionCustom } from '../../../model/types/NotesDetailsSchema'

interface RenderCustomDetailsProps {
  pattern?: FieldNoteOptionCustom[]
}

export const RenderCustomDetails: React.FC<RenderCustomDetailsProps> =
  memo((props: RenderCustomDetailsProps) => {
    const {
      pattern,
    } = props
    const { t } = useTranslation('note-view-page')

    if (!pattern) {
      return null
    }

    return pattern.map(field => {
      switch (field.code) {
        case CustomFieldCodeList.INPUT:
          return field.value && (
            <Text type={'large'}>
              {field.value}
            </Text>
          )
        case CustomFieldCodeList.LINK:
          return field.value && (
            <AppLink
              to={field.value}
              isBlank
            >
              <Button>
                {t('details-link-view')}
              </Button>
            </AppLink>
          )
        case CustomFieldCodeList.TEXTAREA:
          return field.value && (
            <Text type={'large'}>
              {stringToHTML(field.value ?? '')}
            </Text>
          )
        case CustomFieldCodeList.FILE:
          return field.value && (
            <AppImage
              src={field.value}
              isMax
              isModal
            />
          )
        case CustomFieldCodeList.FILE_GROUP:
          if ((JSON.parse(field.value) as string[]).length) {
            const images = JSON.parse(field.value) as string[]

            if (images.length > 1) {
              return (
                <Slider
                  images={images}
                />
              )
            } else {
              return (
                <AppImage
                  src={images[0]}
                  isMax
                  isModal
                />
              )
            }
          }

          return null

        default:
          return null
      }
    })
  })
