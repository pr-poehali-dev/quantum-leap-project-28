import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import Icon from "@/components/ui/icon"

const niches = [
  {
    icon: "Landmark",
    title: "Частные инвестиции",
    stat: "3.5 млрд ₽",
    statLabel: "привлечено инвестиций",
    description: "Генерируем заявки от частных инвесторов с подтверждённым капиталом, готовых к вложению. Только целевые контакты — без случайных любопытных.",
    tags: ["Инвесторы от 300 тыс. ₽", "Проверенные контакты", "Тёплые лиды"],
    color: "from-violet-500/10 to-violet-500/5",
    accent: "text-violet-600 dark:text-violet-400",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-800/50",
  },
  {
    icon: "Store",
    title: "Франшизы",
    stat: "700+",
    statLabel: "франшиз продано",
    description: "Приводим людей, которые уже ищут франшизу в вашем сегменте и готовы к покупке. Фильтруем по бюджету и географии под ваши требования.",
    tags: ["Фильтр по бюджету", "Геолокация", "Срочность сделки"],
    color: "from-amber-500/10 to-amber-500/5",
    accent: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800/50",
  },
  {
    icon: "Building2",
    title: "Недвижимость",
    stat: "100+",
    statLabel: "новостроек в портфеле",
    description: "Целевые покупатели для новостроек и застройщиков. Знаем, как привлечь тех, кто реально покупает — с ипотечным одобрением и готовым бюджетом.",
    tags: ["Новостройки", "Ипотечники", "Готовый бюджет"],
    color: "from-emerald-500/10 to-emerald-500/5",
    accent: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-800/50",
  },
]

export function NichesSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20" id="niches">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Направления
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Экспертность в 3 ключевых нишах
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            За 7 лет мы накопили глубокую экспертизу в трёх нишах. Если ваше направление другое — мы тоже работаем с ним, подбирая модель индивидуально.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-card rounded-2xl border ${niche.border} overflow-hidden`}
            >
              <div className={`bg-gradient-to-br ${niche.color} p-6 border-b ${niche.border}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-background/70 flex items-center justify-center">
                    <Icon name={niche.icon} className={`w-6 h-6 ${niche.accent}`} />
                  </div>
                  <div className="text-right">
                    <p className={`font-display text-3xl font-bold ${niche.accent}`}>{niche.stat}</p>
                    <p className="text-xs text-muted-foreground">{niche.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold">{niche.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{niche.description}</p>
                <div className="flex flex-wrap gap-2">
                  {niche.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${niche.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-7 flex flex-col md:flex-row items-center gap-6 justify-between"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon name="Sparkles" className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-1">Другие ниши</h3>
              <p className="text-sm text-muted-foreground max-w-lg">
                Работаем с любыми B2B и B2C направлениями: EdTech, медицина, юридические услуги, страхование и другие. Изучаем нишу, подбираем канал и считаем прогноз индивидуально.
              </p>
            </div>
          </div>
          <ShinyButton
            variant="secondary"
            className="shrink-0"
            onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
          >
            Обсудить мою нишу
            <ArrowRight className="ml-2 w-4 h-4" />
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  )
}
