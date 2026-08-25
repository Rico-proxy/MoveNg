import { animate, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

type NumberTickerProps = {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

function NumberTicker({
  value,
  suffix = "",
  duration = 1.8,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  useEffect(() => {
    if (!isInView) {
      return
    }

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [duration, isInView, value])

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  )
}

export { NumberTicker }
