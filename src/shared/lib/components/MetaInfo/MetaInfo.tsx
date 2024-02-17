import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'

export interface MetaInfoProps {
  /** Название страницы */
  title: string
  /** Описание страницы */
  description: string
  /** Ключевые слова страницы */
  keywords: string
  /** Ссылка на картинку предпросмотра страницы */
  imageLink: string
}

export const MetaInfo: React.FC<MetaInfoProps> = memo((props: MetaInfoProps) => {
  const {
    title,
    description,
    keywords,
    imageLink,
  } = props

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageLink} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={window.location.href} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageLink} />
    </Helmet>
  )
})
