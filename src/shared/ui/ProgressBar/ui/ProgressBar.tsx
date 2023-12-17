import { classNames } from '@lib/helpers/classNames'
import React, { memo } from 'react'
import cls from './ProgressBar.module.scss'

interface ProgressBarProps {
  className?: string
  value?: number
  onChange?: (progress: number) => void
  loadProgress?: number
}

export const ProgressBar: React.FC<ProgressBarProps> = memo((props: ProgressBarProps) => {
  const {
    className,
    value = 0,
    onChange,
    loadProgress = 0,
  } = props
  const [widthScrollbar, setWidthScrollbar] = React.useState('0px')
  const [loadWidthScrollbar, setLoadWidthScrollbar] = React.useState('0px')

  const onClickHandler = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const fullWidth = target.offsetWidth
    const clientWidth = e.clientX

    const percent = ((clientWidth - 50) * 100) / fullWidth
    const percentFraction = percent * 0.01
    setWidthScrollbar(`${percent}%`)
    onChange?.(percentFraction)
  }, [onChange])

  React.useEffect(() => {
    setWidthScrollbar(`${value * 100}%`)
  }, [value])

  React.useEffect(() => {
    setLoadWidthScrollbar(`${loadProgress * 100}%`)
  }, [loadProgress])

  return (
    <div
      className={classNames(cls.ProgressBar, {}, [className])}
      onClick={onClickHandler}
    >
      <span
        className={cls.ProgressFullness}
        style={{ width: widthScrollbar }}
      />

      <span
        className={classNames(cls.ProgressFullness, {}, [cls.LoadProgressBar])}
        style={{ width: loadWidthScrollbar }}
      />

      <span
        className={cls.Picker}
        style={{ left: widthScrollbar }}
      />
    </div>
  )
})
