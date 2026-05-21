import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Наши кейсы", href: "#cases" },
  { label: "Направления", href: "#niches" },
  { label: "Услуги", href: "#services" },
  { label: "Партнёрство", href: "#faq" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-background border-b border-border shadow-sm" : "bg-background/90 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="/" className="text-lg font-bold font-display tracking-tight">
            Вам Лям!
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#quiz"
              className="hidden sm:inline-flex items-center bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 hover:bg-primary/90 transition-colors"
            >
              Получить прогноз
            </a>
            <button
              className="md:hidden p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quiz"
              className="block mt-3 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Получить прогноз
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
