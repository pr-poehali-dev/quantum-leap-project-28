import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const cases = [
  {
    niche: "Частные инвестиции",
    icon: "Landmark",
    company: "Инвестиционный клуб «Альфа»",
    period: "2 месяца",
    channel: "Таргет + нативная реклама",
    task: "Привлечь частных инвесторов от 1 млн ₽ для новых проектов",
    metrics: [
      { label: "Лидов получено", value: "214" },
      { label: "Инвесторов", value: "11" },
      { label: "Сумма инвестиций", value: "47 млн ₽" },
      { label: "Цена лида", value: "1 400 ₽" },
    ],
    quote: "Раньше сами искали инвесторов через знакомых. Теперь они приходят сами — тёплые, с деньгами и готовностью разговаривать.",
    author: "Алексей Г., управляющий партнёр",
  },
  {
    niche: "Продажа франшиз",
    icon: "Store",
    company: "Сеть кофеен «Брю»",
    period: "3 месяца",
    channel: "Контекстная реклама + ретаргет",
    task: "Масштабировать продажи франшизы по России",
    metrics: [
      { label: "Лидов получено", value: "310" },
      { label: "Франшиз продано", value: "18" },
      { label: "Выручка", value: "27 млн ₽" },
      { label: "Конверсия", value: "5.8%" },
    ],
    quote: "За три месяца продали больше франшиз, чем за весь прошлый год. Лиды приходят с пониманием продукта.",
    author: "Светлана О., владелица сети",
  },
  {
    niche: "Недвижимость",
    icon: "Building2",
    company: "Застройщик «СтройПро»",
    period: "6 месяцев",
    channel: "Мультиканальная стратегия",
    task: "Увеличить поток заявок на новостройки в трёх ЖК",
    metrics: [
      { label: "Лидов получено", value: "540" },
      { label: "Квартир продано", value: "34" },
      { label: "Средний чек", value: "6.8 млн ₽" },
      { label: "ROI канала", value: "412%" },
    ],
    quote: "Стоимость сделки упала вдвое. Поток предсказуемый — планируем загрузку отдела продаж на месяц вперёд.",
    author: "Илья З., коммерческий директор",
  },
]

const stats = [
  { value: "3.5 млрд ₽", label: "Инвестиций привлечено" },
  { value: "250+", label: "Компаний работают с нами" },
  { value: "7 лет", label: "Опыта в лидогенерации" },
  { value: "92%", label: "Целевых лидов в среднем" },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-24" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="inline-flex items-center border border-border text-xs text-muted-foreground px-3 py-1 mb-4">
            Наши кейсы
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Реальные результаты клиентов
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Не обещания — конкретные цифры по нишам, каналам и срокам
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border mb-px">
          {cases.map((c, i) => (
            <motion.div
              key={c.niche}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white flex flex-col"
            >
              {/* Card header */}
              <div className="bg-secondary/40 border-b border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5">
                    {c.niche}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.period}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-white border border-border flex items-center justify-center shrink-0">
                    <Icon name={c.icon} className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{c.company}</p>
                    <p className="text-xs text-muted-foreground">{c.channel}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Задача: </span>{c.task}
                </p>

                <div className="grid grid-cols-2 gap-px bg-border mb-5">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-secondary/40 p-3">
                      <p className="font-display text-xl font-bold text-primary">{m.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">«{c.quote}»</p>
                  <p className="text-xs text-muted-foreground">— {c.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 text-center">
              <p className="font-display text-3xl font-bold text-primary mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
