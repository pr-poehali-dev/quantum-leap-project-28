import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const allCases = [
  {
    id: "etazhi",
    niche: "Недвижимость",
    nicheColor: "bg-blue-50 text-blue-700",
    company: "Этажи Москва",
    title: "800 лидов на новостройки за 6 месяцев",
    description: "Выстроили систему лидогенерации для крупного агентства недвижимости. Снизили стоимость лида в 2 раза и увеличили конверсию в сделку.",
    metrics: [
      { value: "800", label: "лидов" },
      { value: "×2", label: "снижение CPL" },
      { value: "12%", label: "конверсия" },
    ],
    accent: "#392AE7",
  },
  {
    id: "coffee",
    niche: "Франшизы",
    nicheColor: "bg-amber-50 text-amber-700",
    company: "Кофе Рядом",
    title: "3 франчайзи за первый месяц работы",
    description: "Запустили продажу франшизы сети кофеен с нуля. С первого месяца пошли закрытые сделки, стоимость привлечения франчайзи — 45 000 ₽.",
    metrics: [
      { value: "3", label: "сделки за месяц" },
      { value: "45K", label: "руб. за партнёра" },
      { value: "30", label: "лидов в месяц" },
    ],
    accent: "#392AE7",
  },
  {
    id: "invest",
    niche: "Инвестиции",
    nicheColor: "bg-violet-50 text-violet-700",
    company: "InvestBridge Capital",
    title: "50 квалифицированных инвесторов в месяц",
    description: "Настроили поток частных инвесторов с капиталом от 1 млн ₽. Работаем без «смотрящих» — только реальные инвесторы с подтверждённым интересом.",
    metrics: [
      { value: "50", label: "инвесторов/мес" },
      { value: "1M+", label: "минимальный чек" },
      { value: "2 г.", label: "сотрудничество" },
    ],
    accent: "#392AE7",
  },
]

interface Props {
  preview?: boolean
}

export function CaseStudiesSection({ preview = false }: Props) {
  const cases = preview ? allCases.slice(0, 3) : allCases

  return (
    <section className="py-20 sm:py-28 bg-white/30" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Кейсы
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Реальные результаты
            </h2>
            <p className="text-lg text-gray-500 mt-3 max-w-lg">
              Цифры, которые получили наши клиенты
            </p>
          </div>
          {preview && (
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-[#392AE7] font-semibold text-sm hover:gap-3 transition-all shrink-0"
            >
              Все кейсы <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
              className="glass glass-hover rounded-3xl p-6 flex flex-col gap-5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.nicheColor}`}>
                  {c.niche}
                </span>
                <span className="text-xs text-gray-400 font-medium">{c.company}</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-gray-900 leading-snug mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-gray-50 pt-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="font-display font-bold text-xl text-[#392AE7]">{m.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 text-center"
          >
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-sm"
            >
              Смотреть все кейсы
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}