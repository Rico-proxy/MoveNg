import * as React from "react"

import { cn } from "@/lib/utils"

type MarqueeProps = React.ComponentProps<"div"> & {
  pauseOnHover?: boolean
  reverse?: boolean
}

function Marquee({
  className,
  children,
  pauseOnHover = true,
  reverse = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:28s] [--gap:2.5rem]",
        className
      )}
      {...props}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex min-w-max shrink-0 animate-[marquee_var(--duration)_linear_infinite] items-center justify-around gap-[var(--gap)]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

export { Marquee }
