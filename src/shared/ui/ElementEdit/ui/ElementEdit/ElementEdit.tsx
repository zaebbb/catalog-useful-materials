import { classNames } from '@lib/helpers/classNames'
import { AppLink } from '@ui-kit/AppLink'
import { Button } from '@ui-kit/Button'
import { IconLib } from '@ui-kit/Icon'
import { Modal } from '@ui-kit/Modal'
import { HStack, VStack } from '@ui-kit/Stack'
import { Text } from '@ui-kit/Text'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ElementEdit.module.scss'

interface ElementEditProps {
  className?: string
  linkEdit?: string
  onDelete?: () => void
  deleteContent?: string
}

export const ElementEdit: React.FC<ElementEditProps> = memo((props: ElementEditProps) => {
  const {
    className,
    linkEdit,
    onDelete,
    deleteContent,
  } = props

  const { t } = useTranslation('ui-kit')

  const [showAccept, setShowAccept] = React.useState(false)

  const onDeleteHandler = React.useCallback(() => {
    setShowAccept(true)
  }, [])

  const onDeleteCancel = React.useCallback(() => {
    setShowAccept(false)
  }, [])

  const onDeleteApply = React.useCallback(() => {
    setShowAccept(false)
    onDelete?.()
  }, [onDelete])

  return (
    <HStack
      gap={8}
      align={'center'}
      className={classNames(cls.ElementEdit, {}, [className])}
    >
      {linkEdit && (
        <AppLink to={linkEdit}>
          <HStack justify={'center'} align={'center'}>
            <IconLib
              Icon={'IconEditOutline'}
              size={'24'}
              className={cls.IconEdit}
            />
          </HStack>
        </AppLink>
      )}

      {onDelete && (
        <IconLib
          Icon={'IconDelete'}
          size={'24'}
          clickable
          onClick={onDeleteHandler}
          className={cls.IconDelete}
        />
      )}

      <Modal
        isOpen={showAccept}
        onClose={onDeleteCancel}
      >
        <VStack gap={16}>
          <Text type={'large'}>
            {deleteContent}
          </Text>
          <HStack gap={12}>
            <Button onClick={onDeleteCancel}>
              {t('element-edit-modal-delete-cancel')}
            </Button>
            <Button theme={'danger'} onClick={onDeleteApply}>
              {t('element-edit-modal-delete-complete')}
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </HStack>
  )
})
