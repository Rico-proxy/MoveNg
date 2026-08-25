import { ArrowRight } from "@phosphor-icons/react"

import { Card, CardContent } from "@/components/ui/card"
import { popularRoutes } from "@/data/landingPage"

export default function PopularRoutes() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-normal text-foreground">
            Popular Routes
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all routes
            <ArrowRight className="size-4" weight="bold" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularRoutes.map((route) => (
            <Card
              key={route.route}
              className="group relative min-h-36 overflow-hidden border-border/80 bg-slate-950 text-white shadow-md transition-transform hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${route.image})`,
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-slate-950/30 via-slate-950/55 to-slate-950/90" />

              <CardContent className="relative flex min-h-46 flex-col justify-between p-5">
                <h3 className="text-lg font-bold tracking-normal">
                  {route.route}
                </h3>
                <div>
                  <p className="text-lg font-bold">{route.price}</p>
                  <p className="mt-1 text-xs font-semibold text-white/80">
                    {route.meta}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
