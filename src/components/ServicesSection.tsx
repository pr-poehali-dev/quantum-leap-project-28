import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import { scrollToId } from "@/lib/scrollTo"

const services = [
  {
    step: "01",
    icon: "Search",
    title: "Анализ ниши и цели по продажам",
    description: "Изучаем ваш рынок, конкурентов и целевую аудиторию. Определяем реалистичный план: сколько лидов нужно и по какой цене.",
    result: "Ясный план с цифрами",
  },
  {
    step: "02",
    icon: "Crosshair",
    title: "Подбор лучшего канала привлечения",
    description: "Не используем одинаковый набор инструментов для всех. Подбираем канал под вашу нишу: таргет, контекст, нативка, SEO-лиды.",
    result: "Канал с максимальной отдачей",
  },
  {
    step: "03",
    icon: "BarChart3",
    title: "Расчёт прогноза и стоимости",
    description: "До запуска считаем ожидаемый объём лидов, конверсию и стоимость привлечения. Согласовываем с вашим планом продаж.",
    result: "Прогноз зафиксирован в договоре",
  },
  {
    step: "04",
    icon: "Rocket",
    title: "Запуск рекламной системы",
    description: "Настраиваем кампании, лендинги, воронки и аналитику. Первые лиды начинают поступать уже через 24 часа после старта.",
    result: "Система работает с первого дня",
  },
  {
    step: "05",
    icon: "UserCheck",
    title: "Передача качественных лидов",
    description: "Каждый лид передаётся с именем, контактом и кратким описанием запроса. Вы получаете тёплые контакты, готовые к разговору.",
    result: "Лиды в удобном формате",
  },
  {
    step: "06",
    icon: "ShieldCheck",
    title: "Контроль качества и замена нецелевых",
    description: "Отслеживаем качество каждого лида. Если обращение не соответствует критериям — заменяем бесплатно без лишних переговоров.",
    result: "Платите только за результат",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white/30" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Услуги
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Что входит в нашу работу
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Выстраиваем систему привлечения клиентов от анализа до гарантированного результата
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
              className="glass glass-hover rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#392AE7]/8 flex items-center justify-center group-hover:bg-[#392AE7] transition-colors duration-300">
                  <Icon name={svc.icon} className="w-5 h-5 text-[#392AE7] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-display text-3xl font-bold text-gray-100 group-hover:text-[#392AE7]/15 transition-colors leading-none">
                  {svc.step}
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2 text-gray-900 leading-snug">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-gray-50 mt-auto">
                <ArrowRight className="w-3.5 h-3.5 text-[#392AE7] shrink-0" />
                <p className="text-sm font-semibold text-[#392AE7]">{svc.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => scrollToId("quiz")}
            className="inline-flex items-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-200 shadow-sm"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}