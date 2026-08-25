import {
  CalendarCheck,
  CreditCard,
  MapPinLine,
  MagnifyingGlass,
  Receipt,
  type Icon,
} from "@phosphor-icons/react"

type HowItWorksStep = {
  title: string
  description: string
  icon: Icon
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: "Find your route",
    description:
      "Choose where you are leaving from, where you are going, and the trip type that fits your journey.",
    icon: MagnifyingGlass,
  },
  {
    title: "Pick a travel date",
    description:
      "Select your departure date, add a return date when needed, and confirm the number of passengers.",
    icon: CalendarCheck,
  },
  {
    title: "Pay securely",
    description:
      "Continue to our payment platform to complete your booking with a secure checkout experience.",
    icon: CreditCard,
  },
  {
    title: "Get your receipt",
    description:
      "After payment, you return to a success page where your receipt is generated with your name and trip details.",
    icon: Receipt,
  },
  {
    title: "Head to your park",
    description:
      "Go to the closest departure park for your operator and show your receipt before boarding.",
    icon: MapPinLine,
  },
]
