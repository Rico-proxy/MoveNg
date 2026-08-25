import React, { useRef, type PropsWithChildren } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  motion,
  type MotionProps,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

const DEFAULT_SIZE = 44
const DEFAULT_MAGNIFICATION = 58
const DEFAULT_DISTANCE = 130

const dockVariants = cva(
  "mx-auto flex h-17 w-max max-w-full items-center justify-center gap-1.5 rounded-2xl border border-white/15 bg-slate-950/90 p-2 text-white shadow-2xl backdrop-blur-md supports-backdrop-blur:bg-slate-950/75"
)

type DockProps = VariantProps<typeof dockVariants> & {
  className?: string
  iconSize?: number
  iconMagnification?: number
  iconDistance?: number
  disableMagnification?: boolean
  children: React.ReactNode
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      disableMagnification = false,
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity)

    return (
      <motion.div
        ref={ref}
        onMouseMove={(event) => mouseX.set(event.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(dockVariants({ className }))}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<DockIconProps>(child)) {
            return React.cloneElement(child, {
              ...child.props,
              mouseX,
              size: iconSize,
              magnification: iconMagnification,
              distance: iconDistance,
              disableMagnification,
            })
          }

          return child
        })}
      </motion.div>
    )
  }
)

Dock.displayName = "Dock"

type DockIconProps = Omit<
  MotionProps & React.HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  size?: number
  magnification?: number
  disableMagnification?: boolean
  distance?: number
  mouseX?: MotionValue<number>
  className?: string
  children?: React.ReactNode
  props?: PropsWithChildren
}

function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification = false,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const defaultMouseX = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return value - bounds.x - bounds.width / 2
  })

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, disableMagnification ? size : magnification, size]
  )

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize }}
      className={cn(
        "flex aspect-square cursor-pointer flex-col items-center justify-center rounded-full bg-white/8 text-white transition-colors hover:bg-primary hover:text-primary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { Dock, DockIcon }
