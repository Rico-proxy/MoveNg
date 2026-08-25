import { ArrowRight } from "@phosphor-icons/react"

import { Marquee } from "@/components/ui/marquee"
import { trustedOperators } from "./trustedOperatorsData"

type OperatorLogoProps = {
  mark: string
  className?: string
}

function OperatorLogo({ mark, className }: OperatorLogoProps) {
  switch (mark) {
    case "wave":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path
            d="M7 28c7-12 15 12 24 0 4-5 7-7 10-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="6"
          />
          <circle cx="35" cy="17" r="5" fill="currentColor" />
        </svg>
      )
    case "orbit":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <circle cx="24" cy="24" r="9" fill="currentColor" />
          <path
            d="M8 25c4-12 28-17 33-8 5 10-14 24-28 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      )
    case "road":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M18 42 23 6h10l-5 36z" fill="currentColor" />
          <path
            d="M26 11v7m-1 8v7"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      )
    case "bolt":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M29 4 10 27h13l-4 17 19-24H25z" fill="currentColor" />
        </svg>
      )
    case "pin":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path
            d="M24 4c-8 0-14 6-14 14 0 11 14 26 14 26s14-15 14-26c0-8-6-14-14-14z"
            fill="currentColor"
          />
          <circle cx="24" cy="18" r="5" fill="white" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path
            d="M10 26c0-10 6-16 14-16s14 6 14 16c0 8-5 12-11 12-5 0-8-3-8-7 0-3 2-6 6-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="6"
          />
        </svg>
      )
  }
}

export default function TrustedOperators() {
  return (
    <section className="bg-background py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-normal text-foreground">
            Travel with trusted operators
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all operators
            <ArrowRight className="size-4" weight="bold" />
          </a>
        </div>

        <div className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-linear-to-l after:from-background after:to-transparent">
          <Marquee>
            {trustedOperators.map((operator) => (
              <a
                key={operator.name}
                href="#"
                className="flex min-w-48 items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted"
              >
                <OperatorLogo
                  mark={operator.mark}
                  className={`size-11 shrink-0 ${operator.color}`}
                />
                <span className="text-sm leading-tight font-bold text-foreground">
                  {operator.name}
                </span>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
