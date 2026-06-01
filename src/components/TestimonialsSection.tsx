import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Андрей Климов",
    role: "Руководитель отдела продаж",
    company: "Этажи Москва",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrey&backgroundColor=b6e3f4",
    text: "Работаем с ВамЛям уже полтора года. За это время получили более 800 целевых лидов на новостройки. Конверсия в сделку — около 12%, что для нашего рынка очень хорошо. Замену нецелевых делают без лишних разговоров.",
    niche: "Недвижимость",
    result: "+120 сделок за год",
  },
  {
    name: "Ольга Светлова",
    role: "Собственник",
    company: "Сеть кофеен «Кофе Рядом»",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olga&backgroundColor=ffd5dc",
    text: "Запустили продажу франшизы через ВамЛям. Уже через месяц закрыли 3 сделки на франчайзинг. Лиды приходят тёплые — люди уже понимают, что хотят именно нашу франшизу. Очень доволен качеством.",
    niche: "Франшизы",
    result: "3 франчайзи за месяц",
  },
  {
    name: "Михаил Рудов",
    role: "Управляющий партнёр",
    company: "InvestBridge Capital",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail&backgroundColor=c0aede",
    text: "Привлекаем частных инвесторов через эту команду уже 2 года. Результат стабильный: 40–60 квалифицированных лидов в месяц. Инвесторы с реальным капиталом, не «смотрящие». Рекомендую без оговорок.",
    niche: "Инвестиции",
    result: "50 инвесторов в месяц",
  },
  {
    name: "Светлана Морозова",
    role: "Директор по маркетингу",
    company: "Concept House",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Svetlana&backgroundColor=d1f4cc",
    text: "До ВамЛям пробовали разных подрядчиков — никто не давал гарантий. Здесь всё прозрачно: прогноз в договоре, отчёты каждую неделю, замена нецелевых. Стоимость лида снизили на 30% по сравнению с предыдущим агентством.",
    niche: "Недвижимость",
    result: "−30% стоимость лида",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#392AE7] text-[#392AE7]" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Отзывы клиентов
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Реальные результаты компаний, которые привлекают клиентов через нашу систему
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-3xl p-7 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-2xl bg-gray-200 object-cover shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{t.role}, {t.company}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <Stars />
                  <span className="text-xs font-medium bg-[#392AE7]/8 text-[#392AE7] px-2.5 py-0.5 rounded-full">
                    {t.niche}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                «{t.text}»
              </p>

              <div className="border-t border-gray-100 pt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#392AE7]" />
                <span className="text-sm font-semibold text-[#392AE7]">{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}