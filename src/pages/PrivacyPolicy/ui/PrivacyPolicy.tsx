import MetaImage from '@assets/image/pages/privacy-page.png'
import { Page } from '@ui-kit/Page'
import { VStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Privacy } from './Containers'
import cls from './PrivacyPolicy.module.scss'

const PrivacyPolicy: React.FC = memo(() => {
  const { t } = useTranslation('privacy-policy')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <VStack gap={40}>
        <Privacy.TitleContainer />

        <VStack gap={24} className={cls.PrivacyPolicy}>
          <Privacy.SubTitleContainer />
          <Privacy.GeneralContainer />
          <Privacy.BasicConceptsContainer />
          <Privacy.InfoOperatorContainer />
          <Privacy.PersonalDataSubjects />
          <Privacy.PrinciplesPersonalData />
          <Privacy.PurposesPersonalData />
          <Privacy.Terms />
        </VStack>
      </VStack>
    </Page>
  )
})

export default PrivacyPolicy
