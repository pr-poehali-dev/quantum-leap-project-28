import { motion } from "framer-motion"

const tasks = [
  {
    number: "01",
    title: "Нет стабильного потока клиентов",
    description: "Заявки приходят нерегулярно — не можете планировать продажи и нагрузку на команду.",
    result: "Обеспечиваем предсказуемый поток от 20 до 120+ лидов в месяц.",
  },
  {
    number: "02",
    title: "Много нецелевых обращений",
    description: "Менеджеры тратят время на людей, которые не купят. Конверсия низкая, стоимость сделки растёт.",
    result: "Гарантируем качество и заменяем нецелевые лиды бесплатно.",
  },
  {
    number: "03",
    title: "Непонятно, какой канал работает",
    description: "Пробовали разные инструменты — результат непредсказуемый. Бюджет уходит, а системы нет.",
    result: "Анализируем нишу и подбираем канал с максимальной отдачей для вас.",
  },
  {
    number: "04",
    title: "Нужно выполнить план в цифрах",
    description: "Задача не «запустить рекламу», а закрыть конкретный план: N сделок, N млн выручки.",
    result: "Считаем прогноз по объёму лидов и конверсии под ваш план продаж.",
  },
  {
    number: "05",
    title: "Нужен быстрый старт",
    description: "Нет времени ждать 2–3 месяца. Нужны заявки, звонки и встречи здесь и сейчас.",
    result: "Первые качественные лиды — уже через 24 часа после запуска.",
  },
  {
    number: "06",
    title: "Уперлись в потолок объёма",
    description: "Текущий источник лидов не масштабируется. Нужно больше — без потери в качестве.",
    result: "Масштабируем поток через мультиканальный подход.",
  },
]

export function TasksSection() {
  return (
    <section className="py-20 sm:py-24 bg-secondary/30" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <div className="inline-flex items-center border border-border text-xs text-muted-foreground px-3 py-1 mb-4">
            Задачи, которые мы решаем
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Узнаёте себя?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Работаем не с «рекламой», а с конкретными бизнес-задачами. Если хоть одна ситуация знакома — мы умеем её закрыть.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {tasks.map((task, i) => (
            <motion.div
              key={task.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white p-6 hover:bg-accent/30 transition-colors group"
            >
              <span className="text-5xl font-bold font-display text-border group-hover:text-primary/15 transition-colors block mb-4 leading-none select-none">
                {task.number}
              </span>
              <h3 className="font-display text-base font-bold mb-2">{task.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{task.description}</p>
              <p className="text-sm font-medium text-primary border-t border-border pt-3">
                → {task.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
