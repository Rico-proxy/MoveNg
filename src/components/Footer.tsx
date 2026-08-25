import { Heart } from "@phosphor-icons/react/dist/ssr/Heart"

const footerSections = [
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Blog"],
  },
  {
    title: "Travel",
    links: ["Book a Trip", "Popular Routes", "Operators", "Deals"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Safety", "FAQs"],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="/" className="text-2xl font-bold tracking-normal">
            Move<span className="text-primary">NG</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Simple, secure bus booking for intercity travel across Nigeria.
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-foreground">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 MoveNG. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookies
            </a>
            <p className="flex items-center gap-1">
              Created by Rico <Heart />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
