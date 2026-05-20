import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Search",
    title: "Изучаем нишу, продукт и план продаж",
    description: "Проводим бриф, разбираемся в продукте и целевой аудитории. Формируем критерии целевого лида и согласовываем ожидаемый результат.",
    badge: "Аналитика",
  },
  {
    icon: "Crosshair",
    title: "Определяем наиболее эффективный канал",
    description: "На основе анализа ниши выбираем канал с максимальной отдачей: контекстная реклама, таргет, нативные форматы или комбинация.",
    badge: "Стратегия",
  },
  {
    icon: "BarChart3",
    title: "Считаем прогноз по объёму и стоимости",
    description: "Рассчитываем ожидаемый объём лидов, конверсию и стоимость привлечения. Фиксируем в договоре — никаких абстрактных обещаний.",
    badge: "Прогноз",
  },
  {
    icon: "Rocket",
    title: "Запускаем привлечение",
    description: "Настраиваем рекламные кампании, лендинги, аналитику и систему передачи лидов. Полная готовность к старту без задержек.",
    badge: "Запуск",
  },
  {
    icon: "Zap",
    title: "Уже через 24 часа — первые лиды",
    description: "Передаём первые качественные контакты с именем, телефоном и описанием запроса. Ваши менеджеры сразу начинают работу.",
    badge: "24 часа",
    highlight: true,
  },
  {
    icon: "ShieldCheck",
    title: "Контролируем качество и заменяем нецелевые",
    description: "Следим за качеством каждого лида. Если контакт не соответствует критериям — заменяем бесплатно. Без споров и оговорок.",
    badge: "Гарантия",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28" id="how">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Как мы работаем
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Простой и понятный процесс
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Шесть шагов от первого разговора до стабильного потока клиентов в ваш бизнес
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`flex gap-5 items-start p-6 rounded-2xl border transition-all ${
                  step.highlight
                    ? "bg-primary/5 border-primary/30 shadow-md shadow-primary/10"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 relative z-10 ${
                  step.highlight ? "bg-primary shadow-lg shadow-primary/30" : "bg-secondary"
                }`}>
                  <Icon
                    name={step.icon}
                    className={`w-5 h-5 ${step.highlight ? "text-primary-foreground" : "text-primary"}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="font-display text-lg font-bold">{step.title}</h3>
                    <span className={`hidden sm:block text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      step.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                <span className="hidden md:block text-3xl font-bold font-display text-muted-foreground/20 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
