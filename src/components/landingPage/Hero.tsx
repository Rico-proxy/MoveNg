import { ArrowsLeftRight, CalendarBlank, Users } from "@phosphor-icons/react"
import { useState } from "react"

import { heroBus } from "@/assets/images"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { passengerOptions, routeFields, tripTypes } from "./heroData"

function formatTripDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

export default function Hero() {
  const [tripType, setTripType] = useState(tripTypes[0])
  const [departureDate, setDepartureDate] = useState(new Date(2025, 4, 24))
  const [returnDate, setReturnDate] = useState(new Date(2025, 4, 31))
  const [passengers, setPassengers] = useState(passengerOptions[0])

  const isReturnTrip = tripType === "Return"

  return (
    <main className="min-h-svh bg-background text-foreground">
      <section
        className="relative isolate min-h-svh overflow-hidden bg-slate-950 bg-cover bg-center before:absolute before:inset-0 before:z-0 before:bg-linear-to-r before:from-slate-950/95 before:via-slate-950/70 before:to-slate-950/30 after:absolute after:inset-0 after:z-0 after:bg-linear-to-b after:from-slate-950/20 after:to-slate-950/80"
        style={{
          backgroundImage: `url(${heroBus})`,
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-6 pt-28 pb-6">
          <div className="max-w-xl pb-10 text-white">
            <p className="mb-4 text-sm font-semibold text-primary">MoveNG</p>
            <h1 className="text-5xl leading-tight font-bold tracking-normal text-balance md:text-6xl">
              Intercity travel made simple
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 font-medium text-white/85 md:text-lg">
              Book bus tickets online across Nigeria. Trusted operators, secure
              payments, instant tickets.
            </p>
          </div>

          <div className="w-full">
            <div className="flex w-fit overflow-hidden rounded-t-lg border border-white/15 bg-slate-950/80 text-sm font-semibold text-white shadow-lg">
              {tripTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTripType(type)}
                  className={cn(
                    "px-7 py-4 transition-colors",
                    tripType === type
                      ? "bg-white text-slate-950"
                      : "text-white/75 hover:text-white"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>

            <div
              className={cn(
                "grid gap-4 rounded-tr-xl rounded-b-xl border border-white/20 bg-white p-5 shadow-2xl shadow-slate-950/35 md:grid-cols-2",
                isReturnTrip
                  ? "xl:grid-cols-[minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1.25fr)_minmax(0,1.25fr)_minmax(0,1fr)_max-content]"
                  : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1.25fr)_minmax(0,1fr)_max-content]"
              )}
            >
              {routeFields.map((field, index) => {
                const Icon = field.icon

                return (
                  <div
                    key={field.label}
                    className="relative flex min-h-16 items-center gap-3 rounded-lg border border-border bg-background px-4"
                  >
                    <Icon className="size-5 text-primary" weight="bold" />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted-foreground">
                        {field.label}
                      </p>
                      <p className="truncate text-base font-semibold text-foreground">
                        {field.value}
                      </p>
                    </div>
                    {index === 0 && (
                      <span className="absolute top-1/2 -right-5 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm lg:flex">
                        <ArrowsLeftRight className="size-4" weight="bold" />
                      </span>
                    )}
                  </div>
                )
              })}

              <Popover>
                <PopoverTrigger className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-background px-4 text-left transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
                  <CalendarBlank
                    className="size-5 text-primary"
                    weight="bold"
                  />
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-muted-foreground">
                      Date
                    </span>
                    <span className="block truncate text-base font-semibold text-foreground">
                      {formatTripDate(departureDate)}
                    </span>
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    selected={departureDate}
                    onSelect={(date) => setDepartureDate(date)}
                  />
                </PopoverContent>
              </Popover>

              {isReturnTrip && (
                <Popover>
                  <PopoverTrigger className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-background px-4 text-left transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
                    <CalendarBlank
                      className="size-5 text-primary"
                      weight="bold"
                    />
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-muted-foreground">
                        Return
                      </span>
                      <span className="block truncate text-base font-semibold text-foreground">
                        {formatTripDate(returnDate)}
                      </span>
                    </span>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      selected={returnDate}
                      onSelect={(date) => setReturnDate(date)}
                    />
                  </PopoverContent>
                </Popover>
              )}

              <Select
                value={passengers}
                onValueChange={(value) => {
                  if (value) {
                    setPassengers(value)
                  }
                }}
              >
                <SelectTrigger>
                  <span className="flex min-w-0 items-center gap-3">
                    <Users className="size-5 text-primary" weight="bold" />
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-muted-foreground">
                        Passengers
                      </span>
                      <span className="block truncate text-base font-semibold text-foreground">
                        {passengers}
                      </span>
                    </span>
                  </span>
                </SelectTrigger>
                <SelectContent>
                  {passengerOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                className={cn(
                  "min-h-16 px-6 text-base font-bold",
                  isReturnTrip
                    ? "md:col-span-2 xl:col-span-1"
                    : "md:col-span-2 lg:col-span-1"
                )}
              >
                Search Trips
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
