import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { scrollToId } from "@/lib/scrollTo"

const navLinks = [
  { label: "О нас", href: "/#trust" },
  { label: "Кейсы", href: "/cases" },
  { label: "Услуги", href: "/#services" },
  { label: "Партнёрство", href: "/#faq" },
]

const nichesDropdown = [
  { label: "Недвижимость", href: "/niches/nedvizhimost" },
  { label: "Франшизы", href: "/niches/franshizy" },
  { label: "Инвестиции", href: "/niches/investitsii" },
  { label: "Другие ниши", href: "/#niches" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [nichesOpen, setNichesOpen] = useState(false)
  const [mobileNichesOpen, setMobileNichesOpen] = useState(false)
  const nichesRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (nichesRef.current && !nichesRef.current.contains(e.target as Node)) {
        setNichesOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

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
        scrollToId(id)
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-gray-900 hover:text-[#392AE7] transition-colors text-xl font-black">
            Вам Лям!
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <div className="relative" ref={nichesRef}>
              <button
                onClick={() => setNichesOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm px-3 py-2 rounded-xl transition-colors ${
                  nichesOpen ? "text-[#392AE7] bg-[#392AE7]/8 font-semibold" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Направления
                <Icon name="ChevronDown" className={`w-3.5 h-3.5 transition-transform duration-200 ${nichesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {nichesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/8 overflow-hidden z-50 py-1"
                  >
                    {nichesDropdown.map((item) =>
                      item.href.startsWith("/#") ? (
                        <button
                          key={item.href}
                          onClick={() => { setNichesOpen(false); handleNavClick(item.href) }}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-[#392AE7] hover:bg-[#392AE7]/5 transition-colors"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setNichesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#392AE7] hover:bg-[#392AE7]/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                  scrollToId("quiz")
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
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
            <button
              onClick={() => setMobileNichesOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Направления
              <Icon name="ChevronDown" className={`w-4 h-4 transition-transform duration-200 ${mobileNichesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileNichesOpen && (
              <div className="pl-4 mb-1">
                {nichesDropdown.map((item) =>
                  item.href.startsWith("/#") ? (
                    <button
                      key={item.href}
                      onClick={() => { setMobileNichesOpen(false); handleNavClick(item.href) }}
                      className="block w-full text-left py-2 text-sm text-gray-400 hover:text-[#392AE7] transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-sm text-gray-400 hover:text-[#392AE7] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            )}
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