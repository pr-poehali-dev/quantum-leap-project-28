import { motion } from "framer-motion"
import { scrollToId } from "@/lib/scrollTo"

const steps = [
  {
    num: "01",
    title: "Лид",
    desc: "Человек оставляет заявку — имя и телефон. Он заинтересован в вашем продукте прямо сейчас.",
    icon: "📲",
  },
  {
    num: "02",
    title: "Квалификация",
    desc: "Мы проверяем лид по вашим критериям: бюджет, локация, намерение. Передаём только целевых.",
    icon: "✅",
  },
  {
    num: "03",
    title: "Звонок",
    desc: "Ваш менеджер звонит тёплому клиенту. Не холодный обзвон — человек сам хотел связи.",
    icon: "📞",
  },
  {
    num: "04",
    title: "Сделка",
    desc: "Клиент покупает. Вы платите только за лиды, а не за показы или клики без результата.",
    icon: "🤝",
  },
]

const proof = [
  { value: ">140 000", label: "лидов передано клиентам" },
  { value: "24 ч", label: "от запуска до первой заявки" },
  { value: "250+", label: "компаний уже работают с нами" },
]

export function LeadsExplainerSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-semibold text-[#392AE7] uppercase tracking-widest mb-3">Как это работает</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Лид — это готовый к разговору клиент. Не трафик, не показы.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Вы получаете имя и телефон человека, который сам оставил заявку. Остаётся только позвонить.
          </p>
        </motion.div>

        {/* Воронка шагов */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.07, 0.2) }}
              className="bg-white rounded-2xl p-6 border border-gray-100 relative"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <div className="text-xs font-bold text-gray-300 mb-1">{step.num}</div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 w-4 h-0.5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Цифры */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#392AE7] rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-8">
            {proof.map((p) => (
              <div key={p.label}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">{p.value}</div>
                <div className="text-sm text-white/70 mt-0.5">{p.label}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollToId("quiz")}
            className="shrink-0 bg-white hover:bg-gray-50 text-[#392AE7] font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Рассчитать прогноз →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
