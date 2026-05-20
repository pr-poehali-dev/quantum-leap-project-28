import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "Когда можно получить первые лиды?",
    answer:
      "Первые качественные лиды поступают уже через 24 часа после запуска кампании. Это одно из наших ключевых отличий — не нужно ждать недели «раскачки». Настройка, лендинг и аналитика готовятся параллельно с согласованием условий.",
  },
  {
    question: "Сколько лидов вы можете давать?",
    answer:
      "В зависимости от ниши и выбранного канала — от 20 до 120+ лидов в сутки. Перед стартом мы рассчитываем прогноз по объёму именно под вашу нишу и план продаж. Указанные цифры фиксируются в договоре.",
  },
  {
    question: "Как вы определяете канал продвижения?",
    answer:
      "На основе анализа ниши, конкурентной среды и вашей целевой аудитории. Мы не применяем один инструмент ко всем — подбираем канал с максимальной отдачей для конкретного бизнеса: таргет, контекст, нативная реклама, SEO-трафик или комбинация.",
  },
  {
    question: "Что считается нецелевым лидом?",
    answer:
      "Перед стартом мы вместе с вами согласовываем портрет целевого лида: бюджет, намерение, регион, другие параметры. Если полученный контакт не соответствует этим критериям — это нецелевой лид. Такие лиды мы заменяем бесплатно без дополнительных обсуждений.",
  },
  {
    question: "Вы работаете только с инвестициями, франшизами и недвижимостью?",
    answer:
      "Нет. Эти три ниши — наша проверенная экспертиза с измеримыми результатами. Но мы работаем и с другими направлениями: EdTech, медицина, юридические услуги, страхование, B2B-сервисы. В таких случаях проводим анализ ниши и предлагаем индивидуальную стратегию.",
  },
  {
    question: "Как строится прогноз?",
    answer:
      "Мы анализируем нишу, объём поискового и рекламного спроса, конкуренцию и исторические данные по похожим проектам. На выходе — расчёт: сколько лидов можно получить, по какой цене и с какой конверсией. Прогноз согласовывается до старта и фиксируется письменно.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer:
      "Стоимость зависит от ниши, объёма и выбранного канала. Модель оплаты: за лид или абонентская. Чем выше объём — тем ниже цена за контакт. Точную стоимость рассчитываем после брифа и прогноза. Пройдите квиз — подготовим предварительный расчёт бесплатно.",
  },
  {
    question: "Как быстро можно запустить проект?",
    answer:
      "Стандартный старт — 24–48 часов с момента согласования условий. Мы не тратим время на долгие согласования: быстро изучаем задачу, согласовываем критерии и запускаем. Первые лиды — уже на следующий день.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Всё, что нужно знать о работе с «Вам Лям!» до принятия решения.
            </p>
            <ShinyButton
              variant="secondary"
              onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
            >
              Задать свой вопрос
              <ArrowRight className="ml-2 w-4 h-4" />
            </ShinyButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold py-5 hover:no-underline">
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
