import { Navigation } from "@/components/Navigation"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

interface Metric {
  value: string
  label: string
}

interface Step {
  title: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  text: string
  result: string
  avatar: string
}

interface Case {
  company: string
  title: string
  metrics: Metric[]
}

interface NicheLandingProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  heroMetrics: Metric[]
  guarantees: string[]
  steps: Step[]
  cases: Case[]
  testimonials: Testimonial[]
  faqItems: { q: string; a: string }[]
  accentColor?: string
}

export function NicheLandingLayout({
  badge,
  title,
  titleHighlight,
  description,
  heroMetrics,
  guarantees,
  steps,
  cases,
  testimonials,
  faqItems,
}: NicheLandingProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                {badge}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {title} <span className="text-[#392AE7]">{titleHighlight}</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">{description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {guarantees.map((g) => (
                  <div key={g} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#392AE7] shrink-0" />
                    {g}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => document.querySelector("#quiz-niche")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white font-bold px-7 py-3.5 rounded-2xl transition-all duration-200 shadow-lg shadow-[#392AE7]/25"
                >
                  Получить клиентов
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/cases"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3.5 rounded-2xl border border-gray-200 transition-all duration-200"
                >
                  Смотреть кейсы
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {heroMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`rounded-3xl p-6 ${i === 0 ? "bg-[#392AE7] text-white col-span-2" : "bg-gray-50 border border-gray-100"}`}
                >
                  <div className={`font-display text-4xl font-bold mb-1 ${i === 0 ? "text-white" : "text-[#392AE7]"}`}>
                    {m.value}
                  </div>
                  <div className={`text-sm ${i === 0 ? "text-white/70" : "text-gray-500"}`}>{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Как мы привлекаем клиентов
            </h2>
            <p className="text-gray-500">Прозрачный процесс от старта до результата</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-gray-100 rounded-3xl p-6"
              >
                <div className="w-9 h-9 rounded-2xl bg-[#392AE7] flex items-center justify-center text-white font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      {cases.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Кейсы в этой нише
              </h2>
              <p className="text-gray-500">Реальные результаты наших клиентов</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {cases.map((c, i) => (
                <motion.div
                  key={c.company}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-6"
                >
                  <div className="text-xs text-gray-400 font-medium mb-3">{c.company}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-4 leading-snug">{c.title}</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-display font-bold text-lg text-[#392AE7]">{m.value}</div>
                        <div className="text-xs text-gray-400">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Отзывы клиентов
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-2xl bg-gray-200" />
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#392AE7] text-[#392AE7]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">«{t.text}»</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#392AE7]" />
                    <span className="text-sm font-semibold text-[#392AE7]">{t.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Частые вопросы
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                <div className="font-semibold text-gray-900 mb-2">{f.q}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50" id="quiz-niche">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#392AE7] rounded-3xl px-8 py-14 sm:px-14 text-center max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 relative">
              Готовы начать?
            </h2>
            <p className="text-white/70 mb-8 relative">
              Рассчитаем прогноз по вашей нише бесплатно — оставьте заявку
            </p>
            <a
              href="tel:+78001234567"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#392AE7] font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-black/10 relative"
            >
              Позвонить: 8 800 123-45-67
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <Link to="/" className="font-display font-bold text-gray-900 hover:text-[#392AE7] transition-colors">
            Вам Лям!
          </Link>
          <p>&copy; 2018–2026 ООО «Вам Лям!»</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gray-600 transition-colors">Главная</Link>
            <Link to="/cases" className="hover:text-gray-600 transition-colors">Кейсы</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
