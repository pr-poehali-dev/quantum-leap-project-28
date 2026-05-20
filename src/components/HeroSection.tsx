import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const leads = [
  {
    tag: "Частный инвестор",
    phone: "+7 (912) ••• ••-••",
    request: "Готов инвестировать от 1 млн рублей в ближайшие 30 дней в магазины на маркетплейсах",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  {
    tag: "Покупатель франшизы",
    phone: "+7 (926) ••• ••-••",
    request: "Ищет франшизу в сфере общепита, бюджет 2–3 млн рублей, рассматривает несколько городов",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  {
    tag: "Покупатель недвижимости",
    phone: "+7 (963) ••• ••-••",
    request: "Квартира в новостройке, бюджет до 8 млн рублей, рассматривает ипотеку с первым взносом",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  {
    tag: "Частный инвестор",
    phone: "+7 (905) ••• ••-••",
    request: "Интересует пассивный доход, готов вложить от 500 тыс. в стабильный бизнес с выручкой",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  {
    tag: "Покупатель франшизы",
    phone: "+7 (985) ••• ••-••",
    request: "Рассматривает бьюти-франшизу или медицину, предпочтителен формат с обучением",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  {
    tag: "Покупатель недвижимости",
    phone: "+7 (977) ••• ••-••",
    request: "Семья из 3 человек, ищет двушку в Подмосковье, бюджет 6–7 млн рублей",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
]

const trustMarkers = [
  "250+ бизнесов с 2018 года",
  "До 120 клиентов в сутки",
  "Замена нецелевых лидов",
  "Первые лиды за 24 часа",
]

function LeadCard({ lead }: { lead: typeof leads[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-2xl p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${lead.color}`}>
          {lead.tag}
        </span>
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${lead.dot} animate-pulse`} />
          <span className="text-xs text-muted-foreground">Новый лид</span>
        </div>
      </div>
      <p className="text-sm font-mono font-semibold mb-2">{lead.phone}</p>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{lead.request}</p>
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
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(57 42 231 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(57 42 231 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Агентство по генерации клиентов · с 2018 года
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 font-display leading-[1.1]">
              Приводим бизнесу качественных клиентов уже через 24 часа
            </h1>

            <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-xl">
              До 120 лидов в сутки, прогноз по вашему плану продаж, замена нецелевых заявок и подбор лучшего канала под вашу нишу.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <ShinyButton
                className="text-base px-8"
                onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
              >
                Получить прогноз
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShinyButton>
              <ShinyButton
                variant="secondary"
                className="text-base px-8"
                onClick={() => document.querySelector("#cases")?.scrollIntoView({ behavior: "smooth" })}
              >
                Смотреть кейсы
              </ShinyButton>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustMarkers.map((marker) => (
                <div key={marker} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {marker}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold font-display">3.5 млрд ₽</p>
                <p className="text-sm text-muted-foreground">привлечено инвестиций</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display">700+</p>
                <p className="text-sm text-muted-foreground">продано франшиз</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display">100+</p>
                <p className="text-sm text-muted-foreground">новостроек</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-secondary/40 border border-border rounded-3xl p-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-sm font-semibold">Клиенты под ваш запрос</span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  В реальном времени
                </div>
              </div>

              <div className="space-y-3">
                {visibleLeads.map((lead, i) => (
                  <AnimatePresence key={i} mode="wait">
                    <LeadCard key={`${lead.phone}-${lead.tag}-${i}`} lead={lead} />
                  </AnimatePresence>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/60 to-transparent rounded-b-3xl pointer-events-none" />
            </div>

            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Каждый лид — только вам
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
