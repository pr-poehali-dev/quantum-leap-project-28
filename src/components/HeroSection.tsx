import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const stats = [
  { value: "250+", label: "компаний вырастили" },
  { value: "8 лет", label: "на рынке" },
  { value: "24ч", label: "до первых лидов" },
  { value: "97%", label: "довольных клиентов" },
]

const niches = [
  { label: "Недвижимость", href: "/niches/nedvizhimost" },
  { label: "Франшизы", href: "/niches/franshizy" },
  { label: "Инвестиции", href: "/niches/investitsii" },
  { label: "Другие ниши", href: "/#quiz" },
]

const rotatingTexts = [
  "клиентов в Ваш бизнес",
  "частных инвесторов",
  "покупателей недвижимости",
  "покупателей франшиз",
  "покупателей готового бизнеса",
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white" id="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#392AE7]" />
              Агентство по генерации клиентов
            </div>

            <h1 className="font-display sm:text-5xl lg:text-6xl mb-6 font-black text-slate-800 px-0 text-4xl" style={{ lineHeight: 1.35 }}>
              Генерируем горячий поток{" "}
              <span className="inline relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: "60%", filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: "-60%", filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="font-black text-white"
                    style={{
                      backgroundColor: "#392AE7",
                      WebkitBoxDecorationBreak: "clone",
                      boxDecorationBreak: "clone",
                      padding: "0 6px 2px",
                      borderRadius: "4px",
                    }}
                  >
                    {rotatingTexts[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Генерируем целевые лиды в сфере недвижимости, франшиз и частных инвестиций. Первые клиенты — уже через 24 часа.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {niches.map((n) => (
                <Link
                  key={n.href}
                  to={n.href}
                  className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-[#392AE7] hover:text-white text-gray-700 border border-gray-200 hover:border-[#392AE7] text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                >
                  {n.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-lg shadow-[#392AE7]/25 hover:shadow-[#392AE7]/40"
              >
                Получить клиентов
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/cases"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3.5 rounded-2xl border border-gray-200 transition-all duration-200"
              >
                Смотреть кейсы
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {["Гарантия замены лидов", "Оплата за результат", "Работаем с 2018 года"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#392AE7] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-[#392AE7] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold text-white/90 text-sm">Статистика за 2024 год</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat) => (
                    <div key={stat.value} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-white/60 mb-2 font-medium uppercase tracking-wide">Свежий лид</div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold shrink-0">
                      А
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Алексей М.</div>
                      <div className="text-xs text-white/70 mt-0.5">Готов инвестировать от 2 млн рублей в недвижимость</div>
                      <div className="text-xs text-white/50 mt-1.5">Только что · Москва</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <div className="text-xs text-gray-400 mb-1">Средняя стоимость лида</div>
                <div className="font-display font-bold text-xl text-gray-900">от 800 ₽</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <div className="text-xs text-gray-400 mb-1">Срок запуска</div>
                <div className="font-display font-bold text-xl text-gray-900">1–2 дня</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}