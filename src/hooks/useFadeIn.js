import React, { useState, useEffect } from 'react'

const useScrollFadeIn = (WrappedComponent) => {
  return (props) => {
    const { id, delay } = props
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      if (delay) {
        setTimeout(() => {
          setIsVisible(true)
        }, delay)
      }

      const scrollListener = () => {
        const el = document.getElementById(id)
        if (el && !isVisible) {
          const rect = el.getBoundingClientRect()
          const elemTop = rect.top
          const elemBottom = rect.bottom
          const isComponentVisible =
            elemTop < window.innerHeight && elemBottom >= 0
          setIsVisible(isComponentVisible)
        }
      }

      window.addEventListener('scroll', scrollListener)
      return () => {
        window.removeEventListener('scroll', scrollListener)
      }
    }, [id, isVisible, delay])

    return (
      <div
        id={id}
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default useScrollFadeIn
