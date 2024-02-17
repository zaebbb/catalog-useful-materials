import React from 'react'

export interface UseInfinityScrollOptions {
  callback?: () => void
  triggerRef: React.MutableRefObject<HTMLDivElement>
  wrapperRef?: React.MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({
  wrapperRef,
  triggerRef,
  callback,
}: UseInfinityScrollOptions): void => {
  React.useEffect(() => {
    let observer: IntersectionObserver | null = null
    const wrapperElement = wrapperRef?.current || null
    const triggerElement = triggerRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '1px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver((
        [entry]
      ) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)

      return () => {
        if (observer && triggerElement) {
          observer.unobserve(triggerElement)
        }
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
