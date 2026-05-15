import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 })

  useEffect(() => {
    if (inView) motionVal.set(to)
  }, [inView, motionVal, to])

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: 250, suffix: "+", label: "компаний-клиентов", sublabel: "с 2018 года" },
  { value: 3500, suffix: "+", label: "млн ₽ привлечено", sublabel: "для инвесторов" },
  { value: 700, suffix: "+", label: "франшиз продано", sublabel: "в разных нишах" },
  { value: 92, suffix: "%", label: "целевых лидов", sublabel: "гарантированно" },
]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-primary/5 via-background to-primary/5 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Наши результаты</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center group"
            >
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
              )}
              <div className="text-4xl sm:text-5xl font-bold font-display text-primary mb-1">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border"
        >
          {["Инвестиции", "Франшизы", "Недвижимость", "Маркетплейсы", "Финансы"].map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.45 }}
              whileHover={{ opacity: 0.85, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="text-muted-foreground font-bold text-sm tracking-widest uppercase cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
