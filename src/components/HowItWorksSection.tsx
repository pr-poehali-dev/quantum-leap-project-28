import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Phone",
    number: "01",
    title: "Определяем нишу и канал",
    description:
      "Вы рассказываете о продукте и аудитории. Мы анализируем нишу, подбираем лучший канал и рассчитываем прогноз лидов.",
    details: [
      { label: "Лидов в месяц", value: "80–120 шт." },
      { label: "Цена лида", value: "от 1 500 ₽" },
      { label: "Старт", value: "24 часа" },
    ],
    color: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-500",
    badge: "Шаг 1",
  },
  {
    icon: "Rocket",
    number: "02",
    title: "Запускаем генерацию",
    description:
      "Настраиваем рекламные кампании. Уже через 24 часа первые лиды поступают к вам с именем, телефоном и кратким описанием запроса.",
    details: [
      { label: "Частный инвестор", value: "10:23" },
      { label: "Покупатель франшизы", value: "11:47" },
      { label: "Покупатель квартиры", value: "13:05" },
    ],
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-500",
    badge: "Шаг 2",
  },
  {
    icon: "ShieldCheck",
    number: "03",
    title: "Гарантируем качество",
    description:
      "Каждый лид проходит проверку. Нецелевой — заменяем бесплатно. Вы платите только за реальные заявки.",
    details: [
      { label: "Целевые лиды", value: "92%" },
      { label: "Дозвон с первого раза", value: "78%" },
      { label: "Конверсия в сделку", value: "до 35%" },
    ],
    color: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-500",
    badge: "Шаг 3",
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className={`relative rounded-2xl border border-border bg-gradient-to-br ${step.color} p-6 overflow-hidden h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5`}>
        <div className="absolute top-4 right-4 text-6xl font-black text-foreground/4 font-display select-none">
          {step.number}
        </div>

        <div className="flex items-start gap-4 mb-5">
          <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center shrink-0`}>
            <Icon name={step.icon} className={`w-6 h-6 ${step.iconColor}`} />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">{step.badge}</span>
            <h3 className="text-xl font-bold font-display mt-0.5">{step.title}</h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>

        <div className="space-y-2">
          {step.details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.3 + i * 0.08 }}
              className="flex items-center justify-between bg-background/50 backdrop-blur-sm rounded-lg px-3 py-2"
            >
              <span className="text-xs text-muted-foreground">{d.label}</span>
              <span className="text-xs font-semibold text-primary">{d.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function HowItWorksSection() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" })

  return (
    <section className="py-20 sm:py-32 bg-secondary/20 relative overflow-hidden" id="how">
      <div className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Простой процесс
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Как это работает</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три шага — и поток целевых клиентов уже идёт в ваш бизнес
          </p>
        </motion.div>

        <div ref={lineRef} className="relative">
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border z-10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500"
            />
          </div>

          <div className="hidden lg:flex absolute top-[52px] left-0 right-0 justify-between px-[calc(16.67%-4px)] z-20 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={lineInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.35 }}
                className="w-3 h-3 rounded-full border-2 border-primary bg-background"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">
              Среднее время от заявки до первого лида —{" "}
              <span className="text-primary font-bold">24 часа</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
