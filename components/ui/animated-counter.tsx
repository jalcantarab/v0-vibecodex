"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"
import { animate } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1,
  delay = 0,
  formatter = (value) => Math.round(value).toString(),
  className,
}: AnimatedCounterProps) {
  const nodeRef = React.useRef<HTMLSpanElement>(null)
  const { ref, inView } = useInView({ triggerOnce: true })
  const [hasAnimated, setHasAnimated] = React.useState(false)

  React.useEffect(() => {
    if (inView && !hasAnimated && nodeRef.current) {
      const node = nodeRef.current

      setTimeout(() => {
        const controls = animate(from, to, {
          duration,
          onUpdate(value) {
            node.textContent = formatter(value)
          },
          onComplete() {
            setHasAnimated(true)
          },
        })

        return () => controls.stop()
      }, delay)
    }
  }, [from, to, duration, delay, formatter, inView, hasAnimated])

  return (
    <span
      ref={(el) => {
        // Combine refs
        if (el) {
          nodeRef.current = el
          ref(el)
        }
      }}
      className={className}
    >
      {formatter(from)}
    </span>
  )
}
