import ScrollReveal from "@/components/ScrollReveal"
import Destinations from "@/components/landingPage/Destinations"
import Hero from "@/components/landingPage/Hero"
import HowItWorks from "@/components/landingPage/HowItWorks"
import Locations from "@/components/landingPage/Locations"
import PopularRoutes from "@/components/landingPage/PopularRoutes"
import TrustedOperators from "@/components/landingPage/TrustedOperators"
import WhyChoose from "@/components/landingPage/WhyChoose"

export default function Page() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <PopularRoutes />
      </ScrollReveal>
      <ScrollReveal>
        <TrustedOperators />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChoose />
      </ScrollReveal>
      <ScrollReveal>
        <Destinations />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <Locations />
      </ScrollReveal>
    </>
  )
}
