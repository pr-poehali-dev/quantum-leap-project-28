import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const leads = [
  {
    tag: "Частный инвестор",
    phone: "+7 (912) ••• ••-••",
    request: "Готов инвестировать от 1 млн рублей в ближайшие 30 дней в магазины на маркетплейсах, хочет изучить предложение проекта",
    color: "bg-violet-100 text-violet-700",
  },
  {
    tag: "Покупатель франшизы",
    phone: "+7 (926) ••• ••-••",
    request: "Ищет франшизу в сфере общепита, бюджет 2–3 млн рублей, рассматривает несколько городов присутствия",
    color: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Покупатель недвижимости",
    phone: "+7 (963) ••• ••-••",
    request: "Хочет приобрести квартиру в новостройке, бюджет до 8 млн рублей, рассматривает ипотеку с первым взносом",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    tag: "Частный инвестор",
    phone: "+7 (905) ••• ••-••",
    request: "Интересует пассивный доход, готов вложить от 500 тыс. рублей в стабильный бизнес с подтверждённой выручкой",
    color: "bg-violet-100 text-violet-700",
  },
  {
    tag: "Покупатель франшизы",
    phone: "+7 (985) ••• ••-••",
    request: "Рассматривает б'ьюти-франшизу или медицину, предпочтителен формат с обучением и поддержкой от франчайзера",
    color: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Покупатель недвижимости",
    phone: "+7 (977) ••• ••-••",
    request: "Семья из 3 человек, ищет двушку в Подмосковье, бюджет 6–7 млн рублей, хочет получить 3–4 варианта",
    color: "bg-emerald-100 text-emerald-700",
  },
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
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
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
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(57 42 231 / 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(57 42 231 / 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Работаем с 2018 года · 250+ клиентов
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 font-display">
            До 120 готовых клиентов уже через 24 часа
          </h1>

          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-xl">
            Мы генерируем целевые лиды для частных инвесторов, продажи франшиз и недвижимости. Гарантия качества — заменяем нецелевые обращения бесплатно.
          </p>

          <div className="flex flex-wrap gap-3">
            <ShinyButton className="text-base px-8">
              Получить лиды
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShinyButton>
            <ShinyButton variant="secondary" className="text-base px-8">
              Узнать стоимость
            </ShinyButton>
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
              <span className="text-sm font-semibold text-foreground">Входящие лиды</span>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Обновляется в реальном времени
              </div>
            </div>

            <div className="space-y-3">
              {visibleLeads.map((lead, i) => (
                <AnimatePresence key={i} mode="wait">
                  <LeadCard key={`${lead.phone}-${lead.tag}`} lead={lead} />
                </AnimatePresence>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/60 to-transparent rounded-b-3xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}