import { ArrowRight } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/ui/marquee"
import { destinations } from "@/data/landingPage"

export default function Destinations() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-7 grid gap-3 text-center md:grid-cols-[1fr_auto_1fr] md:items-end">
          <div />
          <div>
            <h2 className="text-2xl font-bold tracking-normal text-foreground">
              Where will you go next?
            </h2>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Explore top destinations
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 md:justify-self-end"
          >
            View all destinations
            <ArrowRight className="size-4" weight="bold" />
          </a>
        </div>

        <motion.div
          className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-linear-to-l after:from-background after:to-transparent"
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <Marquee className="[--duration:34s] [--gap:1rem]">
            {destinations.map((destination) => (
              <Card
                key={destination.city}
                className="group relative h-40 w-64 shrink-0 overflow-hidden border-border/80 bg-slate-950 text-white shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/10 via-slate-950/25 to-slate-950/85" />
                <CardContent className="relative flex h-full flex-col justify-end p-4">
                  <h3 className="text-base font-bold tracking-normal">
                    {destination.city}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-white/85">
                    {destination.tagline}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  )
}
