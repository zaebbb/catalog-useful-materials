import MetaImage from '@assets/image/pages/register-page.png'
import { UserRegisterForm } from '@features/UserRegister'
import { Page } from '@ui-kit/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface RegisterPageProps {
  className?: string
}

const RegisterPage: React.FC<RegisterPageProps> = memo((props: RegisterPageProps) => {
  const { className } = props
  const { t } = useTranslation('register-page')

  return (
    <Page
      className={className}
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <UserRegisterForm />
    </Page>
  )
})

export default RegisterPage
