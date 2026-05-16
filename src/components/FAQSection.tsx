import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Что такое «лид» и что именно вы передаёте?",
    answer:
      "Лид — это контактные данные человека, заинтересованного в вашем продукте. Мы передаём: имя, номер телефона и краткое описание запроса клиента (что ищет, какой бюджет, в какие сроки). Вы получаете тёплый контакт, которому уже можно позвонить.",
  },
  {
    question: "Через сколько времени я получу первые лиды?",
    answer:
      "Первые лиды поступают уже через 24 часа после согласования условий и запуска кампании. Это одно из наших ключевых преимуществ — не нужно ждать недели, пока «раскачается» реклама.",
  },
  {
    question: "Что происходит, если лид оказался нецелевым?",
    answer:
      "Мы заменяем нецелевой лид бесплатно. Перед стартом мы согласовываем критерии целевого лида. Если полученный контакт им не соответствует — сообщаете нам, и мы предоставляем замену без дополнительных оплат.",
  },
  {
    question: "В каких нишах вы работаете?",
    answer:
      "Основные направления: частные инвестиции, продажа франшиз и недвижимость (новостройки). За 7 лет работы мы наработали экспертизу именно в этих нишах. Также берём другие направления — обсудите вашу нишу с менеджером, и мы оценим возможности.",
  },
  {
    question: "Как рассчитывается стоимость?",
    answer:
      "Цена зависит от ниши и объёма: чем больше лидов в месяц — тем ниже стоимость одного контакта. Стартовая цена — от 1 500 ₽ за лид. Перед запуском мы делаем прогноз и фиксируем стоимость в договоре.",
  },
  {
    question: "Вы работаете с небольшими компаниями?",
    answer:
      "Да, мы работаем с бизнесами любого размера. Минимальный пакет — от 20 лидов в месяц. Если вы только начинаете или хотите протестировать канал — это отличная точка старта.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12">
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">FAQ</div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Частые вопросы
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Всё, что нужно знать о работе с «Вам Лям!».</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
