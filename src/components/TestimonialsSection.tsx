import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Получили первые лиды уже на следующий день после запуска. За месяц привлекли 4 инвесторов на общую сумму 18 млн рублей.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Алексей Громов",
    role: "Управляющий инвестиционного клуба",
  },
  {
    text: "Работаем с «Вам Лям!» уже второй год. Качество лидов на уровне — нецелевые единицы, и их сразу меняют без лишних вопросов.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Марина Соловьёва",
    role: "Руководитель отдела продаж франшиз",
  },
  {
    text: "Раньше тратили половину бюджета впустую. С «Вам Лям!» стоимость сделки упала вдвое, а поток клиентов стал предсказуемым.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Илья Захаров",
    role: "Коммерческий директор застройщика",
  },
  {
    text: "Нужен был быстрый старт для продажи франшизы. Через 24 часа уже разговаривал с потенциальными партнёрами. За 2 месяца — 6 продаж.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Светлана Орлова",
    role: "Владелица сети кофеен",
  },
  {
    text: "Прогноз, который они сделали перед запуском, оказался точным — разница с фактом не больше 10%. Помогает планировать заранее.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Роман Беляев",
    role: "Генеральный директор",
  },
  {
    text: "Обращались к трём подрядчикам. «Вам Лям!» — единственные, кто дал гарантию замены и выполнил обещание. Год без нареканий.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Ольга Лебедева",
    role: "Директор по маркетингу",
  },
  {
    text: "Сфера частных инвестиций непростая. Лиды от «Вам Лям!» уже тёплые: они понимают продукт и ждут звонка. Конверсия удивила.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Виктор Сидоров",
    role: "Финансовый советник",
  },
  {
    text: "Запустили нишу недвижимости в новом городе. За первый месяц — 47 заявок, 5 дошли до сделки. Результат превзошёл ожидания.",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Наталья Фёдорова",
    role: "Руководитель агентства недвижимости",
  },
  {
    text: "ROI с «Вам Лям!» — самый высокий из всех каналов, что мы тестировали. Ребята знают своё дело и считают результат.",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
    name: "Дмитрий Новиков",
    role: "Предприниматель, серийный инвестор",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 bg-secondary/30 overflow-hidden" id="reviews">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center border border-border text-xs text-muted-foreground px-3 py-1 mb-4">
            Отзывы клиентов
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Что говорят клиенты
          </h2>
          <p className="text-muted-foreground">
            250+ компаний растут вместе с «Вам Лям!» с 2018 года
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
