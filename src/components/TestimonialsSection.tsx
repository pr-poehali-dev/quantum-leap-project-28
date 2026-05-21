import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Получили первые лиды уже на следующий день после запуска. За месяц привлекли 4 инвесторов на общую сумму 18 млн рублей. Рекомендую всем, кто работает с частными вложениями.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Алексей Громов",
    role: "Управляющий инвестиционного клуба",
  },
  {
    text: "Работаем с «Вам Лям!» уже второй год. Качество лидов на уровне — нецелевые единицы, и их сразу меняют без лишних вопросов. Это ценно, когда важен результат, а не процесс.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Марина Соловьёва",
    role: "Руководитель отдела продаж франшиз",
  },
  {
    text: "Продаём квартиры в трёх жилых комплексах. Раньше тратили половину бюджета впустую. С «Вам Лям!» стоимость сделки упала вдвое, а поток клиентов стал предсказуемым.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Илья Захаров",
    role: "Коммерческий директор застройщика",
  },
  {
    text: "Нужен был быстрый старт для продажи франшизы кофейни. Через 24 часа уже разговаривал с потенциальными партнёрами. За 2 месяца продали 6 франшиз в разных городах.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Светлана Орлова",
    role: "Владелица сети кофеен",
  },
  {
    text: "Прогноз, который они сделали перед запуском, оказался точным — разница с фактом не больше 10%. Это помогает планировать найм и бюджеты заранее.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Роман Беляев",
    role: "Генеральный директор",
  },
  {
    text: "Обращались к трём подрядчикам по лидам. «Вам Лям!» — единственные, кто дал гарантию замены и выполнил обещание. Уже год сотрудничаем без нареканий.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Ольга Лебедева",
    role: "Директор по маркетингу",
  },
  {
    text: "Сфера частных инвестиций непростая — клиент должен доверять. Лиды от «Вам Лям!» уже тёплые: они понимают продукт и ждут звонка. Конверсия удивила.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Виктор Сидоров",
    role: "Финансовый советник",
  },
  {
    text: "Запустили нишу недвижимости в новом городе. Боялись, что лиды будут слабыми. Но за первый месяц получили 47 заявок, из которых 5 дошли до сделки.",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Наталья Фёдорова",
    role: "Руководитель агентства недвижимости",
  },
  {
    text: "Как человек, который привык считать деньги, скажу честно: ROI с «Вам Лям!» самый высокий из всех каналов, что мы тестировали. Ребята знают своё дело.",
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
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">Отзывы клиентов</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Что говорят наши клиенты
          </h2>
          <p className="text-center mt-5 text-muted-foreground">250+ компаний уже растут вместе с «Вам Лям!» с 2018 года.</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
