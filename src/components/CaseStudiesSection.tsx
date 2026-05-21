import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import Icon from "@/components/ui/icon"

type CaseNiche = "all" | "investments" | "franchise" | "realty" | "other"

const filters: { label: string; value: CaseNiche }[] = [
  { label: "Все кейсы", value: "all" },
  { label: "Инвестиции", value: "investments" },
  { label: "Франшизы", value: "franchise" },
  { label: "Недвижимость", value: "realty" },
  { label: "Другие ниши", value: "other" },
]

const cases = [
  {
    niche: "investments" as CaseNiche,
    nicheLabel: "Частные инвестиции",
    icon: "Landmark",
    company: "Инвестиционный клуб «Альфа»",
    task: "Привлечь частных инвесторов от 1 млн ₽ для новых проектов",
    channel: "Таргетированная реклама + лид-формы",
    period: "2 месяца",
    metrics: [
      { label: "Лидов", value: "214" },
      { label: "Инвесторов", value: "11" },
      { label: "Сумма", value: "47 млн ₽" },
      { label: "Цена лида", value: "1 400 ₽" },
    ],
    quote: "Раньше искали инвесторов через знакомых. Теперь они сами приходят — тёплые, с деньгами и готовностью к переговорам.",
    author: "Алексей Г., управляющий партнёр",
    color: "from-violet-500/10 to-violet-500/5",
    accent: "text-violet-600 dark:text-violet-400",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-800/40",
  },
  {
    niche: "franchise" as CaseNiche,
    nicheLabel: "Продажа франшиз",
    icon: "Store",
    company: "Сеть кофеен «Брю»",
    task: "Масштабировать продажи франшизы по России",
    channel: "Контекстная реклама + ретаргет",
    period: "3 месяца",
    metrics: [
      { label: "Лидов", value: "310" },
      { label: "Франшиз", value: "18" },
      { label: "Выручка", value: "27 млн ₽" },
      { label: "Конверсия", value: "5.8%" },
    ],
    quote: "За три месяца продали больше франшиз, чем за весь прошлый год. Лиды приходят с пониманием продукта — это экономит время менеджеров.",
    author: "Светлана О., владелица сети",
    color: "from-amber-500/10 to-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800/40",
  },
  {
    niche: "realty" as CaseNiche,
    nicheLabel: "Недвижимость",
    icon: "Building2",
    company: "Застройщик «СтройПро»",
    task: "Увеличить поток целевых заявок на новостройки в трёх ЖК",
    channel: "Мультиканальная стратегия",
    period: "6 месяцев",
    metrics: [
      { label: "Лидов", value: "540" },
      { label: "Квартир", value: "34" },
      { label: "Средний чек", value: "6.8 млн ₽" },
      { label: "ROI канала", value: "412%" },
    ],
    quote: "Стоимость сделки упала вдвое по сравнению с контекстом. Поток предсказуемый — планируем загрузку отдела продаж на месяц вперёд.",
    author: "Илья З., коммерческий директор",
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800/40",
  },
  {
    niche: "investments" as CaseNiche,
    nicheLabel: "Частные инвестиции",
    icon: "Landmark",
    company: "Финансовый советник Виктор С.",
    task: "Найти клиентов с капиталом от 3 млн ₽ для доверительного управления",
    channel: "Нативная реклама + SEO-лиды",
    period: "4 месяца",
    metrics: [
      { label: "Лидов", value: "98" },
      { label: "Клиентов", value: "7" },
      { label: "AuM", value: "84 млн ₽" },
      { label: "Цена лида", value: "2 100 ₽" },
    ],
    quote: "Сфера инвестиций требует доверия. Лиды от «Вам Лям!» уже тёплые — они понимают продукт и ждут звонка. Конверсия удивила.",
    author: "Виктор С., финансовый советник",
    color: "from-violet-500/10 to-violet-500/5",
    accent: "text-violet-600 dark:text-violet-400",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-800/40",
  },
  {
    niche: "franchise" as CaseNiche,
    nicheLabel: "Продажа франшиз",
    icon: "Store",
    company: "Сеть автомоек «АкваПро»",
    task: "Выйти в 10 новых городов через франчайзи за полгода",
    channel: "Таргет в деловых соцсетях",
    period: "5 месяцев",
    metrics: [
      { label: "Лидов", value: "187" },
      { label: "Франшиз", value: "11" },
      { label: "Городов", value: "9" },
      { label: "Цена лида", value: "1 250 ₽" },
    ],
    quote: "Нам нужны были серьёзные предприниматели, а не просто «интересующиеся». Именно таких и приводили — с планом по запуску.",
    author: "Роман Б., директор по франчайзингу",
    color: "from-amber-500/10 to-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800/40",
  },
  {
    niche: "other" as CaseNiche,
    nicheLabel: "Другие ниши",
    icon: "Briefcase",
    company: "Юридическая компания «ЛегалПро»",
    task: "Привлечь корпоративных клиентов на абонентское обслуживание",
    channel: "LinkedIn + email-маркетинг",
    period: "3 месяца",
    metrics: [
      { label: "Лидов", value: "76" },
      { label: "Договоров", value: "12" },
      { label: "LTV / клиент", value: "480 тыс. ₽" },
      { label: "Цена лида", value: "3 200 ₽" },
    ],
    quote: "Думали, что наша ниша слишком узкая. Оказалось — нет. Подобрали нестандартный канал и дали качественный поток B2B-клиентов.",
    author: "Ольга Л., директор по маркетингу",
    color: "from-sky-500/10 to-sky-500/5",
    accent: "text-sky-600 dark:text-sky-400",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    border: "border-sky-200 dark:border-sky-800/40",
  },
]

export function CaseStudiesSection() {
  const [active, setActive] = useState<CaseNiche>("all")

  const filtered = active === "all" ? cases : cases.filter((c) => c.niche === active)

  return (
    <section className="py-20 sm:py-28" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <TrendingUp className="w-4 h-4" />
            Наши кейсы
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Реальные результаты клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Не обещания — конкретные цифры по нишам, каналам и срокам
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((c) => (
              <div key={`${c.company}-${c.niche}`} className={`bg-card rounded-2xl border ${c.border} overflow-hidden flex flex-col`}>
                <div className={`bg-gradient-to-br ${c.color} p-5 border-b ${c.border}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>{c.nicheLabel}</span>
                    <span className="text-xs text-muted-foreground">{c.period}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-background/70 flex items-center justify-center shrink-0">
                      <Icon name={c.icon} className={`w-4 h-4 ${c.accent}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">{c.company}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.channel}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    <span className="font-semibold text-foreground">Задача:</span> {c.task}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-secondary/50 rounded-xl p-3">
                        <p className={`text-xl font-bold font-display ${c.accent}`}>{m.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">«{c.quote}»</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ArrowUpRight className="w-3 h-3" />
                      {c.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 bg-card rounded-2xl border border-border p-7"
        >
          {[
            { value: "3.5 млрд ₽", label: "Инвестиций привлечено" },
            { value: "250+", label: "Компаний работают с нами" },
            { value: "7 лет", label: "Опыта в лидогенерации" },
            { value: "92%", label: "Целевых лидов в среднем" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
