import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const guarantees = [
  "Первые лиды за 24 часа",
  "Замена нецелевых бесплатно",
  "Прогноз в договоре",
  "Без скрытых условий",
]

export function FinalOfferSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="offer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#392AE7] rounded-3xl px-8 py-16 sm:px-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Начните сегодня
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Готовы получать клиентов?
            </h2>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Оставьте заявку — бесплатно рассчитаем прогноз по вашей нише и предложим план привлечения клиентов.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {g}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#392AE7] font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-black/10"
              >
                Получить расчёт бесплатно
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+78001234567"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 border border-white/20"
              >
                Позвонить нам
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
