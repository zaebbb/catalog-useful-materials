import React from 'react'

/** @module useDevice */

/**
 * @interface UseDeviceResult
 * @description Интерфейс описывающий возвращаемое значение для хука useDevice
 * */
interface UseDeviceResult {
  /** Проверка на то что девайс является мобильным устройством */
  isMobile: boolean
  /** Проверка на то что девайс является планшетным устройством */
  isTablet: boolean
  /** Проверка на то что девайс является ноутбуком/мини ПК */
  isLaptop: boolean
  /** Проверка на то что девайс является экраном монитора */
  isDesktop: boolean
}

/**
 * @description Хук проверяет ширину экрана при каждом изменении размера окна и возвращает
 * @returns {UseDeviceResult} Возвращается объект с состоянием экрана
 * */
export const useDevice = (): UseDeviceResult => {
  const [
    isMobile, setIsMobile,
  ] = React.useState<boolean>(false)
  const [
    isTablet, setIsTablet,
  ] = React.useState<boolean>(false)
  const [
    isLaptop, setIsLaptop,
  ] = React.useState<boolean>(false)
  const [
    isDesktop, setIsDesktop,
  ] = React.useState<boolean>(false)

  const checkWidthWindow = React.useCallback((): void => {
    const width = window.innerWidth

    if (width < 768) {
      setIsMobile(true)
      setIsTablet(false)
      setIsLaptop(false)
      setIsDesktop(false)
    }

    if (width > 767 && width < 959) {
      setIsMobile(false)
      setIsTablet(true)
      setIsLaptop(false)
      setIsDesktop(false)
    }

    if (width > 959 && width < 1599) {
      setIsMobile(false)
      setIsTablet(false)
      setIsLaptop(true)
      setIsDesktop(false)
    }

    if (width > 1599) {
      setIsMobile(false)
      setIsTablet(false)
      setIsLaptop(false)
      setIsDesktop(true)
    }
  }, [])

  React.useEffect(() => {
    checkWidthWindow()
    window.addEventListener('resize', checkWidthWindow)

    return () => {
      window.removeEventListener('resize', checkWidthWindow)
    }
  }, [checkWidthWindow])

  return {
    isMobile,
    isDesktop,
    isLaptop,
    isTablet,
  }
}
