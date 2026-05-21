import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import Icon from "@/components/ui/icon"

const navLinks = [
  { label: "О нас", href: "/#trust" },
  { label: "Кейсы", href: "/cases" },
  { label: "Направления", href: "/#niches" },
  { label: "Услуги", href: "/#services" },
  { label: "Партнёрство", href: "/#faq" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "")
      if (location.pathname !== "/") {
        window.location.href = href
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-gray-900 hover:text-[#392AE7] transition-colors">
            Вам Лям!
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !link.href.startsWith("/#") && location.pathname === link.href
              return link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm px-3 py-2 rounded-xl transition-colors ${
                    isActive ? "text-[#392AE7] bg-[#392AE7]/8 font-semibold" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm px-3 py-2 rounded-xl transition-colors ${
                    isActive ? "text-[#392AE7] bg-[#392AE7]/8 font-semibold" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (location.pathname !== "/") {
                  window.location.href = "/#quiz"
                } else {
                  document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm shadow-[#392AE7]/20"
            >
              Получить клиентов
            </button>
            <button
              className="md:hidden p-2 text-gray-500 hover:text-gray-900"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-gray-100 bg-white pb-4"
          >
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <button
              onClick={() => {
                setMenuOpen(false)
                if (location.pathname !== "/") {
                  window.location.href = "/#quiz"
                } else {
                  document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="w-full mt-3 bg-[#392AE7] hover:bg-[#2d21c0] text-white text-sm font-semibold py-3 rounded-xl transition-colors"
            >
              Получить клиентов
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
