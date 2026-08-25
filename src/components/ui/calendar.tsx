import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

type CalendarProps = {
  selected?: Date
  onSelect?: (date: Date) => void
  className?: string
}

function isSameDay(first?: Date, second?: Date) {
  return (
    first?.getFullYear() === second?.getFullYear() &&
    first?.getMonth() === second?.getMonth() &&
    first?.getDate() === second?.getDate()
  )
}

function getMonthDays(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1)
  const totalDays = new Date(year, month + 1, 0).getDate()

  return [
    ...Array.from({ length: firstDay.getDay() }, () => null),
    ...Array.from({ length: totalDays }, (_, index) => {
      return new Date(year, month, index + 1)
    }),
  ]
}

function Calendar({ selected, onSelect, className }: CalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState(selected ?? new Date())

  const monthDays = useMemo(() => getMonthDays(visibleMonth), [visibleMonth])
  const monthLabel = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(visibleMonth)

  function goToMonth(offset: number) {
    setVisibleMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + offset, 1)
    )
  }

  return (
    <div className={cn("w-72", className)}>
      <div className="mb-4 flex items-center justify-between">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => goToMonth(-1)}
          aria-label="Previous month"
        >
          <CaretLeft weight="bold" />
        </Button>
        <p className="text-sm font-semibold">{monthLabel}</p>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => goToMonth(1)}
          aria-label="Next month"
        >
          <CaretRight weight="bold" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground">
        {weekdays.map((weekday) => (
          <div key={weekday} className="py-2">
            {weekday}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {monthDays.map((date, index) =>
          date ? (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onSelect?.(date)}
              className={cn(
                "flex aspect-square items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none",
                isSameDay(date, selected) &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {date.getDate()}
            </button>
          ) : (
            <div key={`blank-${index}`} />
          )
        )}
      </div>
    </div>
  )
}

export { Calendar }
