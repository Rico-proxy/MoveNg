import { Outlet } from "react-router"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function BaseLayout() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
