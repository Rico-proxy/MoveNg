import { ArrowRight, MapPinLine } from "@phosphor-icons/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DottedMap } from "@/components/ui/dotted-map"
import { NumberTicker } from "@/components/ui/number-ticker"
import { locationMarkers, locationStats } from "./locationsData"

const nigeriaRegion = {
  lat: {
    min: 0,
    max: 15,
  },
  lng: {
    min: 1,
    max: 16,
  },
}

export default function Locations() {
  const [selectedCity, setSelectedCity] = useState(locationMarkers[0].city)
  const selectedMarker =
    locationMarkers.find((marker) => marker.city === selectedCity) ??
    locationMarkers[0]

  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="grid gap-10 p-6 md:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                <MapPinLine className="size-6" weight="bold" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-normal md:text-4xl">
                Find MoveNG parks across Nigeria
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
                Start from major terminals close to you, travel with verified
                operators, and arrive with your booking details already sorted.
              </p>

              <div className="mt-7 grid max-w-md grid-cols-3 gap-3">
                {locationStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border bg-background p-4"
                  >
                    <p className="text-2xl font-bold text-primary">
                      <NumberTicker value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="mt-8">
                View park locations
                <ArrowRight className="size-4" weight="bold" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="relative min-h-[30rem] overflow-hidden rounded-lg border border-border bg-muted/35">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,var(--primary),transparent_55%)] opacity-10" />
                <DottedMap
                  className="absolute inset-x-0 top-3 h-[28rem] text-muted-foreground/25"
                  width={180}
                  height={115}
                  region={nigeriaRegion}
                  markers={[]}
                  markerColor="var(--primary)"
                  dotRadius={0.24}
                />

                {locationMarkers.map((marker) => (
                  <button
                    key={marker.city}
                    type="button"
                    onClick={() => setSelectedCity(marker.city)}
                    className={`absolute z-20 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-transform hover:scale-110 focus-visible:ring-3 focus-visible:ring-primary/30 focus-visible:outline-none ${
                      marker.city === selectedCity
                        ? "border-primary/50 bg-primary/15"
                        : "border-primary/30 bg-primary/8"
                    }`}
                    style={{
                      left: `${marker.mapPosition.x}%`,
                      top: `${marker.mapPosition.y}%`,
                    }}
                    aria-label={`Show ${marker.city} park`}
                  >
                    <span className="absolute size-8 rounded-full border border-primary/50" />
                    <span className="size-3 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
                  </button>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-background p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-bold">{selectedMarker.city}</p>
                    <p className="mt-1 text-base font-bold text-primary">
                      {selectedMarker.park}
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {selectedMarker.address}, {selectedMarker.state}
                    </p>
                  </div>
                  <p className="max-w-xs text-xs leading-5 text-muted-foreground">
                    Click a map marker or city pill to preview another departure
                    park.
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {locationMarkers.map((marker) => (
                    <button
                      key={marker.city}
                      type="button"
                      onClick={() => setSelectedCity(marker.city)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        marker.city === selectedCity
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {marker.city}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
