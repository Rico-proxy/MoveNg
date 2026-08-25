import {
  BellRinging,
  Headset,
  ShieldCheck,
  Ticket,
  Wallet,
  type Icon,
} from "@phosphor-icons/react"

type Benefit = {
  title: string
  description: string
  icon: Icon
}

export const benefits: Benefit[] = [
  {
    title: "Verified Operators",
    description: "We partner with trusted and regulated transport operators.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Payments",
    description: "Pay safely with cards, USSD, bank transfer and wallets.",
    icon: Wallet,
  },
  {
    title: "Instant Tickets",
    description: "Get your e-ticket instantly after successful payment.",
    icon: Ticket,
  },
  {
    title: "Real-time Updates",
    description: "Live trip status and alerts for a smoother journey.",
    icon: BellRinging,
  },
  {
    title: "Customer Support",
    description: "Helpful support when you need us before or after trips.",
    icon: Headset,
  },
]
