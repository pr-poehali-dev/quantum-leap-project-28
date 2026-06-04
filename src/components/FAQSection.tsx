import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Как быстро начнут приходить лиды?",
    answer: "Первые лиды начинают поступать уже через 24 часа после запуска рекламной системы. В среднем, мы запускаем кампании в течение 1–2 рабочих дней после подписания договора.",
  },
  {
    question: "Что произойдёт, если лид окажется нецелевым?",
    answer: "Мы бесплатно заменяем нецелевые лиды без каких-либо дополнительных условий или переговоров. Критерии целевого лида фиксируются в договоре до начала работы.",
  },
  {
    question: "По каким каналам вы генерируете лиды?",
    answer: "Мы используем контекстную рекламу (Яндекс.Директ), таргетированную рекламу в ВКонтакте и Telegram, нативные форматы, лид-формы и SEO-лиды. Конкретный канал выбирается под вашу нишу и цели.",
  },
  {
    question: "Как происходит передача лидов?",
    answer: "Каждый лид передаётся с именем, номером телефона и кратким описанием запроса. Мы настраиваем удобный формат: CRM-интеграция, таблица, Telegram-бот или email-уведомления.",
  },
  {
    question: "Возможна ли оплата за результат?",
    answer: "Да, мы работаем по модели cost-per-lead — вы платите за каждый квалифицированный лид. Стоимость и критерии качества фиксируются в договоре.",
  },
  {
    question: "Работаете ли вы с моей нишей?",
    answer: "Основные направления — недвижимость, франшизы и частные инвестиции. Но мы также работаем с B2B-услугами, медициной, образованием и другими нишами. Оставьте заявку, и мы скажем, возможно ли сотрудничество.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-28 bg-gray-50" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-500">
              Отвечаем на самые популярные вопросы о работе с нами
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className={`font-semibold text-base transition-colors ${open === i ? "text-[#392AE7]" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    open === i ? "bg-[#392AE7] rotate-180" : "bg-gray-100"
                  }`}>
                    <ChevronDown className={`w-4 h-4 ${open === i ? "text-white" : "text-gray-500"}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
