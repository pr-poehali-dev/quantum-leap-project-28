import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { icon: "Users", value: "250+", label: "компаний вырастили", description: "работаем с 2018 года" },
  { icon: "Target", value: "50 000+", label: "лидов доставлено", description: "за всё время работы" },
  { icon: "ShieldCheck", value: "97%", label: "довольных клиентов", description: "по итогам опросов" },
  { icon: "Clock", value: "24 ч", label: "до первых лидов", description: "с момента запуска" },
]

const advantages = [
  {
    icon: "FileCheck",
    title: "Прогноз зафиксирован в договоре",
    description: "Перед стартом согласовываем объём и стоимость лидов. Это письменное обязательство, а не обещание.",
  },
  {
    icon: "RefreshCw",
    title: "Замена нецелевых лидов",
    description: "Если лид не соответствует критериям — заменяем бесплатно. Без переговоров и дополнительных условий.",
  },
  {
    icon: "LineChart",
    title: "Прозрачная аналитика",
    description: "Еженедельные отчёты с цифрами: сколько лидов, по какой цене, какая конверсия. Ничего лишнего.",
  },
  {
    icon: "Zap",
    title: "Быстрый старт",
    description: "Запуск за 1–2 дня. Первые лиды — уже через 24 часа после старта рекламной системы.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50" id="trust">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            О нас
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Восемь лет опыта, прозрачные условия и гарантия результата
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 text-center"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#392AE7]/8 flex items-center justify-center mx-auto mb-4">
                <Icon name={s.icon} className="w-5 h-5 text-[#392AE7]" />
              </div>
              <div className="font-display text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-0.5">{s.label}</div>
              <div className="text-xs text-gray-400">{s.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#392AE7]/8 flex items-center justify-center shrink-0">
                <Icon name={adv.icon} className="w-5 h-5 text-[#392AE7]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{adv.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{adv.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
