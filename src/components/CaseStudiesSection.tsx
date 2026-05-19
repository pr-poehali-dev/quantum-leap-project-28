import { motion } from "framer-motion"
import { TrendingUp, ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const cases = [
  {
    niche: "Частные инвестиции",
    icon: "Landmark",
    company: "Инвестиционный клуб «Альфа»",
    period: "2 месяца",
    metrics: [
      { label: "Лидов получено", value: "214" },
      { label: "Инвесторов привлечено", value: "11" },
      { label: "Сумма инвестиций", value: "47 млн ₽" },
      { label: "Цена лида", value: "1 400 ₽" },
    ],
    quote: "Раньше сами искали инвесторов через знакомых. Теперь они сами приходят — тёплые, с деньгами и готовностью разговаривать.",
    author: "Алексей Г., управляющий партнёр",
    color: "from-violet-500/10 to-violet-500/5",
    accent: "text-violet-600 dark:text-violet-400",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  },
  {
    niche: "Продажа франшиз",
    icon: "Store",
    company: "Сеть кофеен «Брю»",
    period: "3 месяца",
    metrics: [
      { label: "Лидов получено", value: "310" },
      { label: "Франшиз продано", value: "18" },
      { label: "Выручка от продаж", value: "27 млн ₽" },
      { label: "Конверсия в сделку", value: "5.8%" },
    ],
    quote: "За три месяца продали больше франшиз, чем за весь прошлый год. Лиды приходят с пониманием продукта — это экономит время менеджеров.",
    author: "Светлана О., владелица сети",
    color: "from-amber-500/10 to-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  {
    niche: "Недвижимость",
    icon: "Building2",
    company: "Застройщик «СтройПро»",
    period: "6 месяцев",
    metrics: [
      { label: "Лидов получено", value: "540" },
      { label: "Квартир продано", value: "34" },
      { label: "Средний чек", value: "6.8 млн ₽" },
      { label: "ROI канала", value: "412%" },
    ],
    quote: "Стоимость сделки упала вдвое по сравнению с контекстной рекламой. Поток предсказуемый — можем планировать загрузку отдела продаж.",
    author: "Илья З., коммерческий директор",
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <TrendingUp className="w-4 h-4" />
            Реальные результаты
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Цифры наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Не обещания, а конкретные результаты — по нишам, срокам и деньгам
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.niche}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col"
            >
              <div className={`bg-gradient-to-br ${c.color} p-6 border-b border-border`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
                    {c.niche}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.period}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background/60 flex items-center justify-center">
                    <Icon name={c.icon} className={`w-5 h-5 ${c.accent}`} />
                  </div>
                  <p className="font-semibold text-sm">{c.company}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-secondary/50 rounded-xl p-3">
                      <p className={`text-xl font-bold font-display ${c.accent}`}>{m.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                    «{c.quote}»
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ArrowUpRight className="w-3 h-3" />
                    {c.author}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 bg-card rounded-2xl border border-border p-8"
        >
          {[
            { value: "3.5 млрд ₽", label: "Инвестиций привлечено клиентами" },
            { value: "250+", label: "Компаний уже работают с нами" },
            { value: "7 лет", label: "Опыта в лидогенерации" },
            { value: "92%", label: "Целевых лидов в среднем" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
