import { useEffect } from "react"
import { Navigation } from "@/components/Navigation"
import { allCases } from "@/components/CaseStudiesSection"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"

const extendedCases = [
  ...allCases,
  {
    id: "b2b",
    niche: "B2B-услуги",
    nicheColor: "bg-green-50 text-green-700",
    company: "LegalPro",
    title: "140 заявок от компаний на юридическое сопровождение",
    description: "Выстроили B2B-лидогенерацию для юридической фирмы. Целевая аудитория — руководители и собственники компаний.",
    metrics: [
      { value: "140", label: "заявок/мес" },
      { value: "8K", label: "руб. за лид" },
      { value: "22%", label: "конверсия" },
    ],
    accent: "#392AE7",
  },
  {
    id: "med",
    niche: "Медицина",
    nicheColor: "bg-red-50 text-red-700",
    company: "МедЦентр Здоровье",
    title: "300 пациентов в месяц для частной клиники",
    description: "Настроили поток первичных пациентов для многопрофильной клиники. Реклама в Яндексе + SEO дали устойчивый результат.",
    metrics: [
      { value: "300", label: "пациентов/мес" },
      { value: "650", label: "руб. за лид" },
      { value: "9 мес", label: "сотрудничество" },
    ],
    accent: "#392AE7",
  },
]

const stages = [
  { title: "Задача", icon: "🎯" },
  { title: "Решение", icon: "💡" },
  { title: "Результат", icon: "📈" },
]

export default function Cases() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Кейсы
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Реальные результаты наших клиентов
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Конкретные цифры, которых мы достигли вместе с нашими клиентами в разных нишах — недвижимость, франшизы, инвестиции и другие.
            </p>
            <div className="flex flex-wrap gap-6">
              {[["250+", "компаний"], ["50 000+", "лидов"], ["8 лет", "опыта"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-[#392AE7]">{v}</div>
                  <div className="text-sm text-gray-400">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {extendedCases.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass glass-hover rounded-3xl p-7 flex flex-col gap-5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.nicheColor}`}>
                    {c.niche}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{c.company}</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 leading-snug mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-gray-50 pt-5 mt-auto">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display font-bold text-xl text-[#392AE7]">{m.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Хотите такой же результат?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Оставьте заявку — рассчитаем прогноз бесплатно
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {stages.map((s) => (
              <div key={s.title} className="glass rounded-3xl p-6 text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-semibold text-gray-900">{s.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/#quiz"
              className="inline-flex items-center gap-2 bg-[#392AE7] hover:bg-[#2d21c0] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-[#392AE7]/20"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/30 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <Link to="/" className="font-display font-bold text-gray-900 hover:text-[#392AE7] transition-colors">
          Вам Лям!
        </Link>
        <p>&copy; 2018–2026 ООО «Вам Лям!»</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-600 transition-colors">Главная</Link>
          <a href="tel:+78001234567" className="hover:text-gray-600 transition-colors">8 800 123-45-67</a>
        </div>
      </div>
    </footer>
  )
}