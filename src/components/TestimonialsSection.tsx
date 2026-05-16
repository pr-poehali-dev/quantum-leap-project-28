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
    <section className="py-20 sm:py-32 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[560px] mx-auto mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Отзывы клиентов
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center">
            Что говорят наши клиенты
          </h2>

          <div className="flex gap-0.5 mt-4">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          <p className="text-center mt-3 text-muted-foreground">
            <span className="font-semibold text-foreground">250+</span> компаний уже растут вместе с нами с 2018 года
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[760px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
