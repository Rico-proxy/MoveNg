import { MapPin, type Icon } from "@phosphor-icons/react"
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
