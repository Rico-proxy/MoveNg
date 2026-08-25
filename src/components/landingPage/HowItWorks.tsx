import { motion } from "motion/react"

import { Card, CardContent } from "@/components/ui/card"
import { howItWorksSteps } from "@/data/landingPage"

export default function HowItWorks() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-normal text-foreground md:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            Book your intercity trip in a few clear steps, from route selection
            to a generated receipt.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute top-0 left-6 hidden h-full w-px bg-border md:block lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-6">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  className="relative grid gap-5 md:grid-cols-[3rem_1fr] md:items-center lg:grid-cols-[1fr_4rem_1fr]"
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                >
                  <div
                    className={
                      isEven
                        ? "hidden lg:block"
                        : "hidden lg:col-start-3 lg:block"
                    }
                  >
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-xs font-semibold text-primary">
                          Step {index + 1}
                        </p>
                        <h3 className="mt-3 text-xl font-bold tracking-normal">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-primary/25 bg-background text-primary shadow-sm md:col-start-1 lg:col-start-2 lg:row-start-1 lg:mx-auto">
                    <Icon className="size-6" weight="bold" />
                  </div>

                  <Card className="md:col-start-2 lg:hidden">
                    <CardContent className="p-6">
                      <p className="text-xs font-semibold text-primary">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 text-xl font-bold tracking-normal">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
