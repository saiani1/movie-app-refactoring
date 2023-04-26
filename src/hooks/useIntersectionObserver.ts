import { useEffect, useRef } from 'react'

interface useIntersectionObserverProps {
  threshold?: number
  onIntersect: IntersectionObserverCallback
}

const useIntersectionObserver = ({ threshold = 0.5, onIntersect }: useIntersectionObserverProps) => {
  const targetRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!targetRef.current) return

    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { threshold })
    observer.observe(targetRef.current)

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect()
  }, [onIntersect, targetRef, threshold])

  return { targetRef }
}

export default useIntersectionObserver
