import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import Icon from "@/components/ui/icon"

const services = [
  {
    step: "1",
    icon: "Search",
    title: "Анализ ниши и цели по продажам",
    description: "Изучаем ваш рынок, конкурентов и целевую аудиторию. Определяем реалистичный план: сколько лидов нужно и по какой цене.",
    result: "Вы получаете ясный план с цифрами",
  },
  {
    step: "2",
    icon: "Crosshair",
    title: "Подбор лучшего канала привлечения",
    description: "Не используем одинаковый набор инструментов для всех. Подбираем канал под вашу нишу: таргет, контекст, нативка, SEO-лиды.",
    result: "Канал с максимальной отдачей именно для вас",
  },
  {
    step: "3",
    icon: "BarChart3",
    title: "Расчёт прогноза и стоимости",
    description: "До запуска считаем ожидаемый объём лидов, конверсию и стоимость привлечения. Согласовываем с вашим планом продаж.",
    result: "Прогноз зафиксирован в договоре",
  },
  {
    step: "4",
    icon: "Rocket",
    title: "Запуск рекламной системы",
    description: "Настраиваем кампании, лендинги, воронки и аналитику. Первые лиды начинают поступать уже через 24 часа после старта.",
    result: "Система запущена и работает с первого дня",
  },
  {
    step: "5",
    icon: "UserCheck",
    title: "Передача качественных лидов",
    description: "Каждый лид передаётся с именем, контактом и кратким описанием запроса. Вы получаете тёплые контакты, готовые к разговору.",
    result: "Лиды поступают в удобном для вас формате",
  },
  {
    step: "6",
    icon: "ShieldCheck",
    title: "Контроль качества и замена нецелевых",
    description: "Отслеживаем качество каждого лида. Если обращение не соответствует критериям — заменяем бесплатно без лишних переговоров.",
    result: "Вы платите только за результат",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Услуги
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Что входит в нашу работу
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы не просто «запускаем рекламу» — выстраиваем систему привлечения клиентов от анализа до гарантированного результата
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon name={svc.icon} className="w-5 h-5 text-primary" />
                </div>
                <span className="text-4xl font-bold font-display text-primary/10 group-hover:text-primary/20 transition-colors leading-none">
                  {svc.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold mb-3 leading-snug">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{svc.description}</p>

              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm font-medium text-primary">{svc.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <ShinyButton
            className="text-base px-8"
            onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
          >
            Обсудить проект
            <ArrowRight className="ml-2 h-4 w-4" />
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  )
}
