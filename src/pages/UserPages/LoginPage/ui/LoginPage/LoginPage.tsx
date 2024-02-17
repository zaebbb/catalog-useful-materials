import MetaImage from '@assets/image/pages/login-page.png'
import { UserLoginForm } from '@features/UserLogin'
import { Page } from '@ui-kit/Page'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface LoginPageProps {
  className?: string
}

const LoginPage: React.FC<LoginPageProps> = memo((props: LoginPageProps) => {
  const { className } = props
  const { t } = useTranslation('login-page')

  return (
    <Page
      className={className}
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
    >
      <UserLoginForm />
    </Page>
  )
})

export default LoginPage
