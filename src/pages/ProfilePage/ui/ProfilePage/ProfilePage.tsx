import MetaImage from '@assets/image/pages/profile-page.png'
import { ProfileCard } from '@features/ProfileEdit'
import { StickyLayout } from '@layout/StickyLayout'
import { classNames } from '@lib/helpers/classNames'
import { Page } from '@ui-kit/Page'
import { ProfileSidebar } from '@widgets/ProfileSidebar'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = memo((props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation('profile-page')

  return (
    <Page
      title={t('page-title')}
      description={t('page-description')}
      keywords={t('page-keywords')}
      imageLink={MetaImage}
      className={classNames(cls.ProfilePage, {}, [className])}
    >
      <StickyLayout
        ContentLeft={<ProfileSidebar />}
        Content={<ProfileCard />}
      />
    </Page>
  )
})

export default ProfilePage
