import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function FeaturesSection() {
  const features = [
    {
      icon: "Zap",
      title: "Старт через 24 часа",
      description: "Запускаем генерацию лидов за один рабочий день. Не нужно ждать неделями — первые обращения приходят уже на следующий день.",
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Если лид оказался нецелевым — заменяем бесплатно. Вы платите только за реальные заявки от заинтересованных клиентов.",
    },
    {
      icon: "BarChart3",
      title: "Прогноз по продажам",
      description: "Перед запуском рассчитываем прогноз: сколько лидов и по какой цене можно ожидать для достижения вашего плана продаж.",
    },
    {
      icon: "Target",
      title: "Точная сегментация",
      description: "Работаем с тремя ключевыми направлениями: частные инвестиции, франшизы, недвижимость. Каждый лид — под вашу конкретную аудиторию.",
    },
    {
      icon: "Globe",
      title: "Лучший канал трафика",
      description: "Анализируем вашу нишу и выбираем наиболее эффективный канал привлечения: поиск, соцсети или медийная реклама.",
    },
    {
      icon: "Users",
      title: "Персональный менеджер",
      description: "С вами работает персональный менеджер: ведёт кампанию, отслеживает результаты и оперативно решает любые вопросы.",
    },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance font-display">
          Почему выбирают нас
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
          За 7 лет мы выстроили систему генерации лидов, которая даёт предсказуемый результат в трёх ключевых нишах.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
