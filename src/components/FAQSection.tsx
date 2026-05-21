import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Через сколько времени я получу первые лиды?",
    answer:
      "Первые лиды поступают уже через 24 часа после согласования условий и запуска кампании. Это одно из ключевых преимуществ — не нужно ждать недели, пока «раскачается» реклама.",
  },
  {
    question: "Что происходит, если лид оказался нецелевым?",
    answer:
      "Мы заменяем нецелевой лид бесплатно. Перед стартом согласовываем критерии целевого лида. Если контакт им не соответствует — сообщаете нам, и мы предоставляем замену без доплат.",
  },
  {
    question: "Как вы определяете, какой канал использовать?",
    answer:
      "Анализируем вашу нишу, конкурентов и целевую аудиторию. Выбираем канал с наибольшей отдачей для вашего продукта: контекст, таргет, нативная реклама или комбинация. Решение обосновываем цифрами.",
  },
  {
    question: "В каких нишах вы работаете?",
    answer:
      "Основные направления: частные инвестиции, продажа франшиз и недвижимость. За 7 лет наработали экспертизу именно в этих нишах. Также работаем с другими направлениями — обсудим вашу нишу и оценим возможности.",
  },
  {
    question: "Как рассчитывается стоимость?",
    answer:
      "Цена зависит от ниши и объёма: чем больше лидов в месяц — тем ниже стоимость одного контакта. Стартовая цена — от 1 200 ₽ за лид. Перед запуском делаем прогноз и фиксируем стоимость в договоре.",
  },
  {
    question: "Что именно вы передаёте как «лид»?",
    answer:
      "Лид — это контактные данные целевого человека с описанием запроса. Вы получаете: имя, телефон и краткое описание (что ищет, какой бюджет, когда планирует). Это тёплый контакт, которому уже можно позвонить.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 sm:py-24" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:sticky lg:top-20 self-start"
          >
            <div className="inline-flex items-center border border-border text-xs text-muted-foreground px-3 py-1 mb-4">
              FAQ
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground mb-8">
              Всё, что нужно знать о работе с «Вам Лям!» до принятия решения.
            </p>
            <a
              href="#quiz"
              className="inline-flex items-center border border-border text-sm font-semibold px-5 py-2.5 hover:bg-secondary transition-colors"
            >
              Задать свой вопрос →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full divide-y divide-border border-t border-b border-border">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold py-5 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
