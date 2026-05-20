import { motion } from "framer-motion"
import { ShieldCheck, Clock, RefreshCw, TrendingUp, Users, Calendar } from "lucide-react"

const stats = [
  { value: "250+", label: "бизнесов выросли с нашей помощью", icon: Users },
  { value: "7 лет", label: "на рынке лидогенерации с 2018 года", icon: Calendar },
  { value: "24 ч", label: "до первых лидов после запуска", icon: Clock },
  { value: "до 120", label: "клиентов в сутки в активных кампаниях", icon: TrendingUp },
]

const advantages = [
  {
    icon: ShieldCheck,
    title: "Гарантия качества лидов",
    description: "Каждый лид проходит верификацию на соответствие вашей целевой аудитории. Платите только за результат.",
  },
  {
    icon: RefreshCw,
    title: "Замена нецелевых — бесплатно",
    description: "Если лид не соответствует согласованным критериям — заменяем без доплат и лишних вопросов.",
  },
  {
    icon: Clock,
    title: "Старт через 24 часа",
    description: "Без долгих согласований и месяцев раскачки. Настраиваем систему и передаём первые контакты уже на следующий день.",
  },
  {
    icon: TrendingUp,
    title: "Прогноз под план продаж",
    description: "Перед стартом считаем объём лидов, конверсию и стоимость привлечения под ваши цели. Не «запустим рекламу», а выполним план.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28" id="trust">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Почему нам доверяют
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Цифры и факты, а не слова
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            За 7 лет мы помогли 250+ компаниям выстроить предсказуемый поток клиентов
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <adv.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
