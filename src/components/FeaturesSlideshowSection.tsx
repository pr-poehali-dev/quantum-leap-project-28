import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"
import { ShinyButton } from "@/components/ui/shiny-button"

const niches = [
  {
    id: 1,
    tab: "Инвестиции",
    icon: "TrendingUp",
    title: "Частные инвесторы",
    description:
      "Привлекаем инвесторов с конкретными запросами: от 500 тыс. до 10+ млн рублей. Помогли привлечь более 3.5 млрд рублей частных вложений в бизнес, маркетплейсы и другие проекты.",
    stats: [
      { value: "3.5 млрд ₽", label: "привлечено инвестиций" },
      { value: "от 500К", label: "минимальный чек" },
      { value: "8 лет", label: "экспертиза в нише" },
    ],
    color: "from-violet-500/15 to-violet-500/5",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/15",
    tags: ["Бизнес", "Маркетплейсы", "Недвижимость"],
    visual: [
      { name: "Андрей К.", tag: "Инвестор", sum: "3 млн ₽", time: "09:14" },
      { name: "Марина В.", tag: "Инвестор", sum: "1.5 млн ₽", time: "11:32" },
      { name: "Сергей Л.", tag: "Инвестор", sum: "5 млн ₽", time: "14:05" },
    ],
  },
  {
    id: 2,
    tab: "Франшизы",
    icon: "Store",
    title: "Покупатели франшиз",
    description:
      "Находим покупателей, которые уже готовы к сделке. За 7 лет помогли продать более 700 франшиз в сферах общепита, услуг, медицины и розничной торговли.",
    stats: [
      { value: "700+", label: "франшиз продано" },
      { value: "12 ниш", label: "охват по сферам" },
      { value: "7 лет", label: "в теме франшиз" },
    ],
    color: "from-blue-500/15 to-blue-500/5",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/15",
    tags: ["Общепит", "Услуги", "Медицина", "Ритейл"],
    visual: [
      { name: "Екатерина М.", tag: "Франчайзи", sum: "Готова к сделке", time: "10:20" },
      { name: "Игорь С.", tag: "Франчайзи", sum: "Рассматривает", time: "12:45" },
      { name: "Ольга Д.", tag: "Франчайзи", sum: "Горячий лид", time: "15:30" },
    ],
  },
  {
    id: 3,
    tab: "Недвижимость",
    icon: "Building2",
    title: "Покупатели жилья",
    description:
      "Генерируем заявки на покупку квартир в новостройках. Работаем с застройщиками и агентствами — помогли продать квартиры в 100+ жилых комплексах по всей России.",
    stats: [
      { value: "100+", label: "жилых комплексов" },
      { value: "×2", label: "снижение стоимости сделки" },
      { value: "47", label: "заявок за первый месяц" },
    ],
    color: "from-emerald-500/15 to-emerald-500/5",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/15",
    tags: ["Новостройки", "Москва", "Регионы"],
    visual: [
      { name: "Дмитрий Н.", tag: "Покупатель", sum: "2-комн. квартира", time: "08:55" },
      { name: "Анна П.", tag: "Покупатель", sum: "Студия + парковка", time: "13:10" },
      { name: "Николай К.", tag: "Покупатель", sum: "3-комн. квартира", time: "16:40" },
    ],
  },
  {
    id: 4,
    tab: "Другие",
    icon: "LayoutGrid",
    title: "Другие ниши",
    description:
      "Готовы взяться за B2B-услуги, онлайн-образование, медицину и другие направления. Анализируем нишу и запускаем поток клиентов под ваш продукт.",
    stats: [
      { value: "250+", label: "компаний в работе" },
      { value: "24ч", label: "до первого лида" },
      { value: "Любая", label: "ниша по запросу" },
    ],
    color: "from-orange-500/15 to-orange-500/5",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/15",
    tags: ["B2B", "Образование", "Медицина"],
    visual: [
      { name: "Роман Б.", tag: "B2B клиент", sum: "Обсудить условия", time: "09:50" },
      { name: "Светлана О.", tag: "EdTech", sum: "Горячий лид", time: "11:20" },
      { name: "Виктор С.", tag: "Медицина", sum: "Готов к встрече", time: "14:35" },
    ],
  },
]

export function FeaturesSlideshowSection() {
  const [active, setActive] = useState(0)
  const niche = niches[active]

  return (
    <section className="py-20 sm:py-32 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-balance mb-4">
            Три ниши — один поставщик лидов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работаем точечно в каждом направлении — без дженерик-подходов
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {niches.map((n, i) => (
            <button
              key={n.id}
              onClick={() => setActive(i)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${active === i
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }
              `}
            >
              <Icon name={n.icon} className="w-4 h-4" />
              {n.tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-3xl border border-border bg-gradient-to-br ${niche.color} p-6 sm:p-10`}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className={`w-14 h-14 rounded-2xl ${niche.iconBg} flex items-center justify-center mb-6`}>
                  <Icon name={niche.icon} className={`w-7 h-7 ${niche.iconColor}`} />
                </div>

                <h3 className="text-3xl font-bold font-display mb-4">{niche.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{niche.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {niche.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-background/60 border border-border rounded-full px-3 py-1 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {niche.stats.map((s) => (
                    <div key={s.label} className="text-center bg-background/50 rounded-xl p-3">
                      <p className="text-xl font-bold text-primary font-display">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <ShinyButton>Получить лиды в этой нише</ShinyButton>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold">Последние лиды</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Обновляется в реальном времени
                  </div>
                </div>

                {niche.visual.map((v, i) => (
                  <motion.div
                    key={v.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-background/70 backdrop-blur-sm border border-border/50 rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">{v.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{v.name}</p>
                      <p className="text-xs text-muted-foreground">{v.sum}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium block mb-1">
                        {v.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{v.time}</span>
                    </div>
                  </motion.div>
                ))}

                <div className="text-center pt-2">
                  <p className="text-xs text-muted-foreground">+ ещё 40+ лидов сегодня</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
