import { motion } from "framer-motion"
import { scrollToId } from "@/lib/scrollTo"
import Icon from "@/components/ui/icon"

const steps = [
  {
    title: "Рассчитаем прогноз",
    desc: "Укажите нишу и бюджет — покажем сколько лидов получите, по какой цене и с какой конверсией",
    demo: "forecast",
  },
  {
    title: "Запустим привлечение",
    desc: "Настроим рекламу, лендинги и аналитику. Первые заявки приходят уже в день запуска на проверенных площадках",
    demo: "channels",
  },
  {
    title: "Передадим целевых лидов",
    desc: "Каждую заявку проверяем по вашим критериям: бюджет, локация, намерение. Передаём только тёплых клиентов",
    link: "О проверке лидов",
    demo: "lead",
  },
  {
    title: "Платите за результат",
    desc: "Оплата только за целевые лиды, а не за показы и клики. Все цифры — в личном кабинете в реальном времени",
    link: "Об оплате",
    demo: null,
  },
]

function StepDemo({ type }: { type: string | null }) {
  if (type === "forecast") {
    return (
      <div className="glass rounded-3xl p-6 sm:p-7">
        <p className="text-sm text-gray-500 mb-5">
          Узнайте сколько целевых клиентов получите в вашей нише и сколько будет стоить каждый
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: "100+", l: "лидов / сутки" },
            { v: "от 500 ₽", l: "за лид" },
            { v: "8–14%", l: "конверсия" },
          ].map((m) => (
            <div key={m.l} className="glass rounded-2xl px-3 py-4 text-center">
              <div className="font-display text-lg sm:text-xl font-bold text-[#392AE7]">{m.v}</div>
              <div className="text-[11px] text-gray-400 mt-1 leading-tight">{m.l}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollToId("quiz")}
          className="mt-5 w-full bg-[#392AE7] hover:bg-[#2d21c0] text-white font-semibold text-sm py-3 rounded-2xl transition-colors"
        >
          Узнать прогноз
        </button>
      </div>
    )
  }

  if (type === "channels") {
    return (
      <div className="glass rounded-3xl p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-700">Кампании активны</span>
        </div>
        <div className="space-y-3">
          {[
            { icon: "Search", name: "Контекстная реклама", val: "42 лида" },
            { icon: "Target", name: "Таргет в соцсетях", val: "31 лид" },
            { icon: "Globe", name: "Нативные форматы", val: "27 лидов" },
          ].map((c) => (
            <div key={c.name} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#392AE7]/8 flex items-center justify-center shrink-0">
                <Icon name={c.icon} size={18} className="text-[#392AE7]" fallback="Activity" />
              </div>
              <span className="text-sm text-gray-700 flex-1">{c.name}</span>
              <span className="text-sm font-semibold text-[#392AE7]">{c.val}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === "lead") {
    return (
      <div className="bg-gray-900 rounded-3xl p-6 sm:p-7 text-white overflow-hidden">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/60 mb-1">Новый целевой лид</p>
            <p className="font-semibold text-lg">Алексей, 34 года</p>
            <div className="flex items-center gap-1.5 mt-2 text-white/70 text-xs">
              <Icon name="ShieldCheck" size={14} className="text-green-400" fallback="Check" />
              Бюджет и намерение подтверждены
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#392AE7] flex items-center justify-center shrink-0">
            <Icon name="UserCheck" size={22} className="text-white" fallback="User" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          {[
            { l: "Ниша", v: "Новостройки" },
            { l: "Бюджет", v: "до 9 млн ₽" },
            { l: "Город", v: "Москва" },
          ].map((t) => (
            <div key={t.l} className="glass-dark rounded-xl px-3 py-2">
              <div className="text-[10px] text-white/50">{t.l}</div>
              <div className="text-xs font-medium mt-0.5">{t.v}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export function LeadsExplainerSection() {
  return (
    <section className="py-16 sm:py-24 bg-white/30" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Как это работает
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Получайте поток горячих клиентов без забот — мы берём на себя привлечение,
            проверку и аналитику на каждом этапе
          </p>
        </motion.div>

        {/* Вертикальная лента шагов */}
        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                  {step.desc}
                </p>
                {step.link && (
                  <button
                    onClick={() => scrollToId("quiz")}
                    className="inline-flex items-center gap-1 text-[#392AE7] font-semibold text-sm mt-3 hover:gap-2 transition-all"
                  >
                    {step.link}
                    <Icon name="ChevronRight" size={16} />
                  </button>
                )}
              </motion.div>

              {step.demo && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mt-7"
                >
                  <StepDemo type={step.demo} />
                </motion.div>
              )}

              {/* Нумерованный кружок между шагами */}
              {i < steps.length - 1 && (
                <div className="flex justify-center my-8 sm:my-10">
                  <div className="w-9 h-9 rounded-full bg-[#392AE7] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#392AE7]/25">
                    {i + 2}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
