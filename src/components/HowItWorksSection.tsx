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
    <section className="py-20 sm:py-28 bg-white" id="how">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Как мы работаем
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Простой и понятный процесс
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Шесть шагов от первого разговора до стабильного потока клиентов
          </p>
        </motion.div>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex gap-5 items-center p-5 rounded-3xl border transition-all duration-300 ${
                step.highlight
                  ? "bg-[#392AE7] border-[#392AE7] text-white shadow-lg shadow-[#392AE7]/20"
                  : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                step.highlight ? "bg-white/15" : "bg-gray-50"
              }`}>
                <Icon
                  name={step.icon}
                  className={`w-5 h-5 ${step.highlight ? "text-white" : "text-[#392AE7]"}`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className={`font-display text-base font-bold ${step.highlight ? "text-white" : "text-gray-900"}`}>
                    {step.title}
                  </h3>
                  <span className={`hidden sm:block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    step.highlight
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {step.badge}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/80" : "text-gray-500"}`}>
                  {step.description}
                </p>
              </div>

              <span className={`hidden md:block text-2xl font-bold font-display shrink-0 ${
                step.highlight ? "text-white/20" : "text-gray-100"
              }`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
