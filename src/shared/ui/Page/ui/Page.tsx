import { MetaInfo, type MetaInfoProps } from '@lib/components/MetaInfo'
import { classNames } from '@lib/helpers/classNames'
import { useInfinityScroll } from '@lib/hooks/useInfinityScroll'
import { AppPadding } from '@ui-kit/AppPadding'
import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'
import cls from './Page.module.scss'

/** @module Page */

/**
 * @interface PageProps
 * @description Описывает передаваемые параметры в компонент
 * */
interface PageProps extends React.PropsWithChildren, MetaInfoProps {
  /** Передаваемый класс в компонент, необязательный */
  className?: string
  onScrollEnd?: () => void
}

/**
 * @description Компонент для обертки страниц в компонент без необходимости использования AppPadding
 * @param {PageProps} props - Пропсы типа PageProps
 * */
export const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const {
    className,
    children,
    title,
    description,
    keywords,
    imageLink,
    onScrollEnd,
  } = props
  const triggerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>

  useInfinityScroll({
    wrapperRef: undefined,
    triggerRef,
    callback: onScrollEnd,
  })

  return (
    <>
      <MetaInfo
        title={title}
        description={description}
        keywords={keywords}
        imageLink={imageLink}
      />
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

      <section>
        <AppPadding className={classNames(cls.Page, {}, [className])}>
          {children}

          {onScrollEnd && (
            <div
              className={cls.trigger}
              ref={triggerRef}
            />
          )}
        </AppPadding>
      </section>
    </>
  )
})
