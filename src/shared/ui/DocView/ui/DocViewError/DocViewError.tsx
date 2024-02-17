import { Text } from '@ui-kit/Text'
import { useTranslation } from 'react-i18next'

export const DocViewError = () => {
  const { t } = useTranslation('ui-kit')

  return (
    <Text>
      {t('doc-view-error')}
    </Text>
  )
}
