import { MapPin, type Icon } from "@phosphor-icons/react"
import {
  routeAbujaEnugu,
  routeLagosAbuja,
  routeLagosBenin,
  routePortHarcourtOwerri,
} from "@/assets/images"

export const tripTypes = ["One way", "Return"]

type TripField = {
  label: string
  value: string
  icon: Icon
}

export const routeFields: TripField[] = [
  {
    label: "From",
    value: "Lagos",
    icon: MapPin,
  },
  {
    label: "To",
    value: "Abuja",
    icon: MapPin,
  },
]

export const passengerOptions = [
  "1 Passenger",
  "2 Passengers",
  "3 Passengers",
  "4 Passengers",
  "5 Passengers",
]

export const popularRoutes = [
  {
    route: "Lagos -> Abuja",
    price: "From N7,500",
    meta: "6h 30m • 2+ daily trips",
    image: routeLagosAbuja,
  },
  {
    route: "Lagos -> Benin City",
    price: "From N10,500",
    meta: "6h 15m • 2+ daily trips",
    image: routeLagosBenin,
  },
  {
    route: "Abuja -> Enugu",
    price: "From N14,000",
    meta: "7h 45m • 2+ daily trips",
    image: routeAbujaEnugu,
  },
  {
    route: "Port Harcourt -> Owerri",
    price: "From N5,900",
    meta: "2h 30m • 2+ daily trips",
    image: routePortHarcourtOwerri,
  },
]
