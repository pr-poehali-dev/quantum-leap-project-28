import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"

const tasks = [
  {
    number: "01",
    title: "Нужен стабильный поток клиентов",
    description: "Реклама не даёт предсказуемого результата. Лиды приходят то много, то вообще нет — план горит каждый месяц.",
    accent: "Обеспечим стабильный поток от 20 до 120+ лидов в месяц под ваш план продаж.",
  },
  {
    number: "02",
    title: "Лиды есть, но много нецелевых",
    description: "Менеджеры тратят время на пустые разговоры. Стоимость привлечения реального клиента растёт, конверсия падает.",
    accent: "Гарантируем качество и заменяем нецелевые обращения бесплатно.",
  },
  {
    number: "03",
    title: "Не понимаете, какой канал даст результат",
    description: "Пробовали контекст, таргет, SEO — что-то работало, что-то нет. Бюджет уходит, а системного результата нет.",
    accent: "Анализируем нишу и подбираем наиболее эффективный канал именно для вас.",
  },
  {
    number: "04",
    title: "Нужно выполнить план в цифрах",
    description: "Задача — не «запустить рекламу», а закрыть конкретный план: N сделок, N млн выручки. Нужен подрядчик, который считает результат.",
    accent: "Считаем прогноз по объёму лидов и конверсии под ваш план продаж.",
  },
  {
    number: "05",
    title: "Нужен быстрый старт без раскачки",
    description: "Нет времени ждать 2–3 месяца, пока «заработает». Нужен результат быстро: заявки, звонки, встречи.",
    accent: "Первые качественные лиды — уже через 24 часа после старта.",
  },
  {
    number: "06",
    title: "Требуется масштабирование потока",
    description: "Текущий источник лидов упёрся в потолок. Нужно больше — x2, x3 — не теряя в качестве и не перегружая отдел.",
    accent: "Масштабируем без потери качества за счёт мультиканального подхода.",
  },
]

export function TasksSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Задачи, которые мы решаем
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Узнаёте себя?
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы решаем не абстрактный «маркетинг», а конкретные бизнес-задачи. Если хоть одна ситуация знакома — мы знаем, как её закрыть.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task, i) => (
            <motion.div
              key={task.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="text-5xl font-bold font-display text-primary/10 group-hover:text-primary/20 transition-colors block mb-4 leading-none">
                {task.number}
              </span>
              <h3 className="font-display text-lg font-bold mb-3 leading-snug">{task.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{task.description}</p>
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-primary font-medium flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" />
                  {task.accent}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <ShinyButton
            className="text-base px-8"
            onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
          >
            Обсудить мою задачу
            <ArrowRight className="ml-2 h-4 w-4" />
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  )
}
