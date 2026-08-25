import {
  Bus,
  Moon,
  Question,
  RoadHorizon,
  Storefront,
  Sun,
} from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Dock, DockIcon } from "@/components/ui/dock"
import { useTheme } from "@/components/theme-provider"

const navItems = [
  {
    label: "Book",
    href: "#",
    icon: Bus,
  },
  {
    label: "Routes",
    href: "#",
    icon: RoadHorizon,
  },
  {
    label: "Operators",
    href: "#",
    icon: Storefront,
  },
  {
    label: "Help",
    href: "#",
    icon: Question,
  },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-2xl font-bold tracking-normal text-foreground"
          >
            Move<span className="text-primary">NG</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-foreground/80 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label === "Book" ? "Book a Trip" : item.label}
              </a>
            ))}
          </nav>

          <Button
            size="icon"
            variant="outline"
            className="border-border bg-background text-foreground hover:bg-muted"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
          >
            {isDark ? <Sun weight="bold" /> : <Moon weight="bold" />}
          </Button>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 md:hidden">
        <Dock iconSize={52} iconMagnification={58} disableMagnification>
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <DockIcon
                key={item.label}
                aria-label={item.label}
                className="gap-1 px-1"
              >
                <Icon className="size-5" weight="bold" />
                <span className="text-[0.62rem] leading-none font-semibold">
                  {item.label}
                </span>
              </DockIcon>
            )
          })}
        </Dock>
      </div>
    </>
  )
}
