import { ArrowRight, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const stats = [
  { value: "С 2018", label: "года генерируем клиентов" },
  { value: "250+", label: "успешных кейсов" },
  { value: ">140 000", label: "лидов было сгенерировано" },
  { value: "24 часа", label: "со старта до первых лидов" },
]

function randomPhone() {
  const r = (n: number) => Math.floor(Math.random() * n)
  return `+7 (${9}${r(10)}${r(10)}) ${r(10)}${r(10)}${r(10)}-${r(10)}${r(10)}-${r(10)}${r(10)}`
}

const liveleads = [
  { name: "Алексей М.", avatar: "А", desc: "Готов инвестировать от 2 млн в недвижимость", city: "Москва", time: "Только что" },
  { name: "Елена С.", avatar: "Е", desc: "Ищу франшизу от 500 тыс. рублей", city: "Санкт-Петербург", time: "1 мин назад" },
  { name: "Дмитрий К.", avatar: "Д", desc: "Рассматриваю покупку готового бизнеса", city: "Краснодар", time: "2 мин назад" },
  { name: "Ольга В.", avatar: "О", desc: "Хочу купить квартиру в новостройке", city: "Екатеринбург", time: "Только что" },
  { name: "Игорь Н.", avatar: "И", desc: "Ищу инвестиции от 1 млн на 12 месяцев", city: "Казань", time: "3 мин назад" },
  { name: "Марина Л.", avatar: "М", desc: "Интересует коммерческая недвижимость", city: "Новосибирск", time: "Только что" },
  { name: "Сергей Р.", avatar: "С", desc: "Хочу купить франшизу в сфере питания", city: "Ростов-на-Дону", time: "1 мин назад" },
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
]



export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [leadIndex, setLeadIndex] = useState(0)
  const [phone, setPhone] = useState(() => randomPhone())

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setLeadIndex((prev) => (prev + 1) % liveleads.length)
      setPhone(randomPhone())
    }, 3500)
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

            <h1 className="font-display sm:text-5xl lg:text-6xl font-black text-slate-800 px-0 mx-0 my-0 py-0 text-5xl" style={{ lineHeight: 1.05 }}>
              Генерируем горячий поток{" "}
              <span className="inline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: "50%", filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: "-50%", filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="font-black text-white"
                    style={{
                      backgroundColor: "#392AE7",
                      WebkitBoxDecorationBreak: "clone",
                      boxDecorationBreak: "clone",
                      padding: "0 5px",
                      lineHeight: 1.15,
                      borderRadius: "4px",
                      display: "inline",
                    }}
                  >
                    {rotatingTexts[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg my-[13px]">Получайте 100+ потенциальных клиентов в сутки с оплатой только за целевых и заинтересованных</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
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
                  <span className="font-semibold text-white/90 text-sm">Вам Лям! - это системный и стабильный результат</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat) => (
                    <div key={stat.value} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <div className="text-xs text-white/60 font-medium uppercase tracking-wide">Свежие клиенты в 1 руки</div>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={leadIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold shrink-0">
                        {liveleads[leadIndex].avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm">{liveleads[leadIndex].name}</div>
                        <div className="text-xs text-white/70 mt-0.5">{liveleads[leadIndex].desc}</div>
                        <div className="text-xs text-white/60 mt-1 font-mono tracking-wide">
                          <span>{phone.slice(0, 4)}</span>
                          <span style={{ filter: "blur(3px)" }} className="select-none">{phone.slice(4)}</span>
                        </div>
                        <div className="text-xs text-white/50 mt-1">{liveleads[leadIndex].time} · {liveleads[leadIndex].city}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}