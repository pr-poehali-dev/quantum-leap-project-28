import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const tasks = [
  {
    number: "01",
    title: "Нужен стабильный поток клиентов",
    description: "Реклама не даёт предсказуемого результата. Лиды приходят то много, то вообще нет — план горит каждый месяц.",
    accent: "Обеспечим стабильный поток от 20 до 120+ лидов в месяц под ваш план продаж.",
  },
  {
    number: "02",
    title: "Лиды есть, но много нецелевых",
    description: "Менеджеры тратят время на пустые разговоры. Стоимость привлечения реального клиента растёт, конверсия падает.",
    accent: "Гарантируем качество и заменяем нецелевые обращения бесплатно.",
  },
  {
    number: "03",
    title: "Не понимаете, какой канал даст результат",
    description: "Пробовали контекст, таргет, SEO — что-то работало, что-то нет. Бюджет уходит, а системного результата нет.",
    accent: "Анализируем нишу и подбираем наиболее эффективный канал именно для вас.",
  },
  {
    number: "04",
    title: "Нужно выполнить план в цифрах",
    description: "Задача — не «запустить рекламу», а закрыть конкретный план: N сделок, N млн выручки. Нужен подрядчик, который считает результат.",
    accent: "Считаем прогноз по объёму лидов и конверсии под ваш план продаж.",
  },
  {
    number: "05",
    title: "Нужен быстрый старт без раскачки",
    description: "Нет времени ждать 2–3 месяца, пока «заработает». Нужен результат быстро: заявки, звонки, встречи.",
    accent: "Первые качественные лиды — уже через 24 часа после старта.",
  },
  {
    number: "06",
    title: "Требуется масштабирование потока",
    description: "Текущий источник лидов упёрся в потолок. Нужно больше — x2, x3 — не теряя в качестве и не перегружая отдел.",
    accent: "Масштабируем без потери качества за счёт мультиканального подхода.",
  },
]

export function TasksSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Задачи, которые мы решаем
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Узнаёте себя?
          </h2>
          <p className="text-lg text-gray-500">
            Если хоть одна ситуация знакома — мы знаем, как её закрыть.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task, i) => (
            <motion.div
              key={task.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
              className="group bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:border-[#392AE7]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-5xl font-bold font-display text-gray-100 group-hover:text-[#392AE7]/15 transition-colors block mb-4 leading-none">
                {task.number}
              </span>
              <h3 className="font-display text-lg font-bold mb-2 text-gray-900 leading-snug">{task.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{task.description}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm text-[#392AE7] font-semibold flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" />
                  {task.accent}
                </p>
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
            onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-200 shadow-sm"
          >
            Обсудить мою задачу
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}