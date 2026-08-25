import { heroBus } from "@/assets/images"
import { Card, CardContent } from "@/components/ui/card"
import { benefits } from "./whyChooseData"

export default function WhyChoose() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-5 px-6">
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-center text-xl font-bold tracking-normal">
              Why travellers choose MoveNG
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <div key={benefit.title} className="text-center lg:text-left">
                    <div className="mx-auto flex size-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary lg:mx-0">
                      <Icon className="size-5" weight="bold" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold">{benefit.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-lg">
          <CardContent className="grid items-center gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <div
              className="min-h-36 rounded-lg bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(2, 9, 25, 0.2), rgba(2, 9, 25, 0.75)), url(${heroBus})`,
              }}
            />

            <div>
              <h2 className="text-2xl font-bold tracking-normal">
                First trip? Let&apos;s make it special
              </h2>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">
                Get <span className="text-primary">N1,000</span> off your first
                booking with MoveNG
              </p>
              <div className="mt-5 inline-flex rounded-lg border border-dashed border-primary/80 bg-primary/5 px-6 py-4 text-base font-bold">
                Use code: <span className="ml-2 text-primary">MOVENGXK</span>
              </div>
              <p className="mt-4 text-xs font-medium text-muted-foreground">
                Valid for all routes. New users only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
