import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const niches = [
  {
    icon: "Building2",
    title: "Недвижимость",
    description: "Лиды на покупку новостроек, вторички, коммерческой недвижимости и аренду. Работаем с агентствами, застройщиками и частными риелторами.",
    metrics: ["от 500 ₽ / лид", "конверсия 8–14%", "запуск за 1 день"],
    href: "/niches/nedvizhimost",
    bg: "bg-blue-50",
    accent: "text-blue-600",
    badge: "Топ направление",
  },
  {
    icon: "Store",
    title: "Франшизы",
    description: "Привлекаем потенциальных франчайзи для вашего бренда. Квалифицируем по бюджету и готовности — передаём только реальных покупателей.",
    metrics: ["от 2 500 ₽ / лид", "конверсия 5–10%", "запуск за 2 дня"],
    href: "/niches/franshizy",
    bg: "bg-amber-50",
    accent: "text-amber-600",
    badge: "Высокий чек",
  },
  {
    icon: "TrendingUp",
    title: "Частные инвестиции",
    description: "Генерируем поток частных инвесторов с капиталом от 1 млн ₽. Инвесторы в бизнес, маркетплейсы, недвижимость, стартапы.",
    metrics: ["от 1 500 ₽ / лид", "только квал. инвесторы", "запуск за 1 день"],
    href: "/niches/investitsii",
    bg: "bg-violet-50",
    accent: "text-violet-600",
    badge: "Растущий рынок",
  },
  {
    icon: "Briefcase",
    title: "Другие ниши",
    description: "Работаем с B2B-услугами, образованием, медициной, юридическими услугами и другими нишами. Обсудим ваш запрос индивидуально.",
    metrics: ["индивидуальный расчёт", "любая ниша", "быстрый старт"],
    href: "/#quiz",
    bg: "bg-gray-50",
    accent: "text-gray-600",
    badge: "Под запрос",
  },
]

export function NichesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="niches">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#392AE7]/8 text-[#392AE7] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Направления
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            В каких нишах мы работаем
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Специализируемся на трёх ключевых направлениях и готовы взяться за другие ниши по запросу
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {niches.map((niche, i) => {
            const isExternal = niche.href.startsWith("/#")
            return (
              <motion.div
                key={niche.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {isExternal ? (
                  <div
                    onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
                    className={`group cursor-pointer ${niche.bg} border border-transparent hover:border-gray-200 rounded-3xl p-7 flex flex-col gap-5 hover:shadow-md transition-all duration-300`}
                  >
                    <NicheCard niche={niche} />
                  </div>
                ) : (
                  <Link
                    to={niche.href}
                    className={`group block ${niche.bg} border border-transparent hover:border-gray-200 rounded-3xl p-7 flex flex-col gap-5 hover:shadow-md transition-all duration-300`}
                  >
                    <NicheCard niche={niche} />
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function NicheCard({ niche }: { niche: typeof niches[0] }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
          <Icon name={niche.icon} className={`w-6 h-6 ${niche.accent}`} />
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white ${niche.accent}`}>
          {niche.badge}
        </span>
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{niche.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{niche.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {niche.metrics.map((m) => (
          <span key={m} className="text-xs bg-white text-gray-600 font-medium px-3 py-1.5 rounded-full border border-gray-100">
            {m}
          </span>
        ))}
      </div>

      <div className={`flex items-center gap-2 ${niche.accent} font-semibold text-sm group-hover:gap-3 transition-all`}>
        Подробнее <ArrowRight className="w-4 h-4" />
      </div>
    </>
  )
}
