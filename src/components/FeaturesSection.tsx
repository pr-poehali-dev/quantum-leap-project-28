import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Zap",
    title: "Старт через 24 часа",
    description: "Первые лиды приходят уже на следующий день. Никаких недель ожидания.",
    size: "large",
    accent: true,
    visual: (
      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {["bg-violet-400", "bg-blue-400", "bg-emerald-400"].map((c, i) => (
            <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-card`} />
          ))}
        </div>
        <span className="text-xs text-muted-foreground ml-1">+47 новых лидов сегодня</span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1" />
      </div>
    ),
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия качества",
    description: "Нецелевой лид — заменяем бесплатно. Платите только за результат.",
    size: "small",
    accent: false,
  },
  {
    icon: "BarChart3",
    title: "Прогноз по продажам",
    description: "Перед запуском рассчитываем сколько лидов ждать и по какой цене.",
    size: "small",
    accent: false,
  },
  {
    icon: "Target",
    title: "Точная сегментация",
    description: "Инвестиции, франшизы, недвижимость — каждый лид под вашу аудиторию.",
    size: "small",
    accent: false,
    visual: (
      <div className="mt-3 flex gap-1.5 flex-wrap">
        {["Инвестиции", "Франшизы", "Недвижимость"].map((t) => (
          <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{t}</span>
        ))}
      </div>
    ),
  },
  {
    icon: "Globe",
    title: "Лучший канал трафика",
    description: "Анализируем нишу и выбираем наиболее эффективный рекламный канал.",
    size: "small",
    accent: false,
  },
  {
    icon: "Users",
    title: "Персональный менеджер",
    description: "Ведёт кампанию, отслеживает результаты, решает вопросы оперативно.",
    size: "large",
    accent: false,
    visual: (
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "Целевых", value: "92%" },
          { label: "Дозвон", value: "78%" },
          { label: "Конверсия", value: "35%" },
        ].map((s) => (
          <div key={s.label} className="bg-background/60 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-primary">{s.value}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
          Почему выбирают нас
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance font-display">
          Всё, что нужно для<br className="hidden sm:block" /> стабильного потока клиентов
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
          За 7 лет мы выстроили систему, которая даёт предсказуемый результат.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`
              group relative rounded-2xl border border-border p-6 cursor-default
              ${feature.accent
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              }
              transition-all duration-300
            `}
          >
            <div className={`
              w-11 h-11 rounded-xl flex items-center justify-center mb-4
              ${feature.accent ? "bg-white/20" : "bg-primary/10"}
            `}>
              <Icon
                name={feature.icon}
                className={`w-5 h-5 ${feature.accent ? "text-white" : "text-primary"}`}
              />
            </div>

            <h3 className={`text-lg font-bold font-display mb-2 ${feature.accent ? "text-white" : ""}`}>
              {feature.title}
            </h3>
            <p className={`text-sm leading-relaxed ${feature.accent ? "text-white/75" : "text-muted-foreground"}`}>
              {feature.description}
            </p>

            {feature.visual && feature.visual}

            <div className={`
              absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${!feature.accent ? "bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" : ""}
            `} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
