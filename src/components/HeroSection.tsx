import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const leads = [
  {
    tag: "Частный инвестор",
    phone: "+7 (912) ••• ••-••",
    request: "Готов инвестировать от 1 млн рублей. Ищет проект с подтверждённой выручкой.",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Покупатель франшизы",
    phone: "+7 (926) ••• ••-••",
    request: "Ищет франшизу в общепите, бюджет 2–3 млн рублей. Рассматривает несколько городов.",
    tagColor: "bg-sky-100 text-sky-700",
  },
  {
    tag: "Покупатель недвижимости",
    phone: "+7 (963) ••• ••-••",
    request: "Квартира в новостройке, бюджет до 8 млн рублей. Рассматривает ипотеку.",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Частный инвестор",
    phone: "+7 (905) ••• ••-••",
    request: "Интересует пассивный доход. Готов вложить от 500 тыс. в стабильный бизнес.",
    tagColor: "bg-sky-100 text-sky-700",
  },
  {
    tag: "Покупатель франшизы",
    phone: "+7 (985) ••• ••-••",
    request: "Рассматривает бьюти-франшизу, предпочтителен формат с обучением.",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Покупатель недвижимости",
    phone: "+7 (977) ••• ••-••",
    request: "Семья ищет двушку в Подмосковье, бюджет 6–7 млн рублей.",
    tagColor: "bg-sky-100 text-sky-700",
  },
]

function LeadCard({ lead }: { lead: typeof leads[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-border p-4"
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs font-semibold px-2 py-0.5 ${lead.tagColor}`}>
          {lead.tag}
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-green-500 animate-pulse" />
          <span className="text-xs text-muted-foreground">Новый лид</span>
        </div>
      </div>
      <p className="text-sm font-mono font-bold mb-1.5 text-foreground">{lead.phone}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">{lead.request}</p>
    </motion.div>
  )
}

export function HeroSection() {
  const [visibleLeads, setVisibleLeads] = useState(leads.slice(0, 3))
  const tickRef = { current: 0 }

  useEffect(() => {
    tickRef.current = 0
    const interval = setInterval(() => {
      tickRef.current += 1
      const slotToReplace = tickRef.current % 3
      const newLeadIdx = (3 + tickRef.current) % leads.length
      setVisibleLeads((prev) => {
        const updated = [...prev]
        updated[slotToReplace] = leads[newLeadIdx]
        return updated
      })
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-20 pb-0 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 sm:py-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 border border-border text-muted-foreground text-xs font-medium px-3 py-1 mb-6">
              <div className="w-1.5 h-1.5 bg-primary" />
              Работаем с 2018 года · 250+ клиентов
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05] font-display mb-5">Получайте до 120 клиентов уже через 24 часа</h1>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md">
              Генерируем целевые лиды для инвестиционных проектов, франшиз и недвижимости. Гарантия качества — заменяем нецелевых бесплатно.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 hover:bg-primary/90 transition-colors"
              >
                Получить прогноз
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 border border-border text-sm font-semibold px-6 py-3 hover:bg-secondary transition-colors"
              >
                Смотреть кейсы
              </a>
            </div>

            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold font-display">3.5 млрд ₽</p>
                <p className="text-xs text-muted-foreground mt-0.5">привлечено инвестиций</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display">700+</p>
                <p className="text-xs text-muted-foreground mt-0.5">продано франшиз</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display">100+</p>
                <p className="text-xs text-muted-foreground mt-0.5">новостроек</p>
              </div>
            </div>
          </motion.div>

          {/* Right — lead stream */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-secondary border border-border p-1">
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-white">
                <span className="text-xs font-semibold">Входящие лиды · прямо сейчас</span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-green-500 animate-pulse" />
                  Онлайн
                </div>
              </div>

              <div className="space-y-px">
                {visibleLeads.map((lead, i) => (
                  <AnimatePresence key={i} mode="wait">
                    <LeadCard key={`${lead.phone}-${i}`} lead={lead} />
                  </AnimatePresence>
                ))}
              </div>

              <div className="px-3 py-2.5 bg-primary/5 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">Каждый лид передаётся строго одному клиенту</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}