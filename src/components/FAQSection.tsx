import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"
import { ShinyButton } from "@/components/ui/shiny-button"

const faqs = [
  {
    icon: "HelpCircle",
    question: "Что такое «лид» и что именно вы передаёте?",
    answer:
      "Лид — это контактные данные человека, заинтересованного в вашем продукте. Мы передаём: имя, номер телефона и краткое описание запроса клиента (что ищет, какой бюджет, в какие сроки). Вы получаете тёплый контакт, которому уже можно позвонить.",
  },
  {
    icon: "Clock",
    question: "Через сколько времени я получу первые лиды?",
    answer:
      "Первые лиды поступают уже через 24 часа после согласования условий и запуска кампании. Это одно из наших ключевых преимуществ — не нужно ждать недели, пока «раскачается» реклама.",
  },
  {
    icon: "ShieldCheck",
    question: "Что происходит, если лид оказался нецелевым?",
    answer:
      "Мы заменяем нецелевой лид бесплатно. Перед стартом согласовываем критерии целевого лида. Если полученный контакт им не соответствует — сообщаете нам, и мы предоставляем замену без доплат.",
  },
  {
    icon: "Target",
    question: "В каких нишах вы работаете?",
    answer:
      "Основные направления: частные инвестиции, продажа франшиз и недвижимость (новостройки). За 7 лет мы наработали экспертизу именно в этих нишах. Также рассматриваем другие направления — обсудите с менеджером.",
  },
  {
    icon: "BarChart3",
    question: "Как рассчитывается стоимость?",
    answer:
      "Цена зависит от ниши и объёма: чем больше лидов в месяц — тем ниже стоимость одного контакта. Стартовая цена — от 1 500 ₽ за лид. Перед запуском делаем прогноз и фиксируем стоимость в договоре.",
  },
  {
    icon: "Users",
    question: "Вы работаете с небольшими компаниями?",
    answer:
      "Да, работаем с бизнесами любого размера. Минимальный пакет — от 20 лидов в месяц. Если только начинаете или хотите протестировать канал — это отличная точка старта.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            FAQ
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center">
            Частые вопросы
          </h2>
          <p className="text-center mt-4 text-muted-foreground">
            Всё, что нужно знать о работе с нами. Если не нашли ответ — напишите нам.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div
                className={`
                  rounded-2xl border transition-all duration-300 overflow-hidden
                  ${open === index
                    ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5"
                    : "border-border bg-card hover:border-primary/20"
                  }
                `}
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className={`w-9 h-9 rounded-xl shrink-0 flex items-center justify-center transition-colors ${open === index ? "bg-primary/15" : "bg-secondary"}`}>
                    <Icon name={faq.icon} className={`w-4 h-4 ${open === index ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <span className="flex-1 font-semibold font-display text-base">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: open === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${open === index ? "border-primary/30 bg-primary/10" : "border-border"}`}
                  >
                    <Icon name="Plus" className={`w-3.5 h-3.5 ${open === index ? "text-primary" : "text-muted-foreground"}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pl-[72px] text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="font-semibold">Остались вопросы?</p>
              <p className="text-sm text-muted-foreground">Менеджер ответит в течение 15 минут</p>
            </div>
            <ShinyButton>Написать нам</ShinyButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
