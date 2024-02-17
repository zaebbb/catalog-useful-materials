import { classNames } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { IconLib } from '@ui-kit/Icon'
import React, { memo } from 'react'
import cls from './Slider.module.scss'

interface SliderProps {
  className?: string
  images?: string[]
  width?: string
  height?: string
}

const SLIDE_CLASSNAME = 'slide'

export const Slider: React.FC<SliderProps> = memo((props: SliderProps) => {
  const {
    className,
    images = [],
    width = '1000px',
    height = '500px',
  } = props

  const [
    current,
    setCurrent,
  ] = React.useState<number>(1)

  const onSwitchSlide = React.useCallback((current: number) => {
    const slides = document.querySelectorAll<HTMLImageElement>(`.${SLIDE_CLASSNAME}`)

    slides.forEach((slide, i) => {
      const index = i + 1

      if (index < current) {
        slide.style.transform = `translateX(${(index - current) * 100}%)`
      }

      if (index === current) {
        slide.style.transform = 'translateX(0%)'
      }

      if (index > current) {
        slide.style.transform = `translateX(${(index - current) * 100}%)`
      }
    })
  }, [])

  const onChangeNextSlideHandler = React.useCallback(() => {
    if ((current + 1) > images.length) {
      setCurrent(1)
    } else {
      setCurrent(current + 1)
    }
  }, [current, images.length])

  const onChangePrevSlideHandler = React.useCallback(() => {
    if ((current - 1) < 1) {
      setCurrent(images.length)
    } else {
      setCurrent(current - 1)
    }
  }, [current, images.length])

  const imageItems = React.useMemo(() => {
    return images.map((image, i) => (
      <img
        src={image}
        key={generateKey()}
        alt={image}
        className={classNames(cls.Image, {}, [SLIDE_CLASSNAME])}
        style={{ transform: `translateX(${(i * 100)}%)` }}
      />
    ))
  }, [images])

  React.useEffect(() => {
    onSwitchSlide(current)
  }, [current, onSwitchSlide])

  return React.useMemo(() => (
    <div
      style={{
        maxWidth: width,
        height,
      }}
      className={classNames(cls.Slider, {}, [className])}
    >
      {imageItems}

      <IconLib
        Icon={'IconArrowLeftNoLine'}
        className={cls.ArrowPrev}
        size={'40'}
        clickable
        onClick={onChangePrevSlideHandler}
      />

      <IconLib
        Icon={'IconArrowRightNoLine'}
        className={cls.ArrowNext}
        size={'40'}
        clickable
        onClick={onChangeNextSlideHandler}
      />
    </div>
  ), [className, height, imageItems, onChangeNextSlideHandler, onChangePrevSlideHandler, width])
})
