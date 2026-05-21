import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

type Step = {
  id: string
  question: string
  subtitle?: string
  type: "choice" | "contact"
  options?: { label: string; icon: string; value: string; desc?: string }[]
}

const steps: Step[] = [
  {
    id: "niche",
    question: "Какой продукт вы продаёте?",
    subtitle: "Выберите ваше направление",
    type: "choice",
    options: [
      { label: "Частные инвестиции", icon: "Landmark", value: "investments", desc: "Привлечение инвесторов" },
      { label: "Франшизы", icon: "Store", value: "franchise", desc: "Продажа франшизы" },
      { label: "Недвижимость", icon: "Building2", value: "realty", desc: "Новостройки, ЖК" },
      { label: "Другое", icon: "Briefcase", value: "other", desc: "Иная ниша" },
    ],
  },
  {
    id: "volume",
    question: "Сколько лидов нужно в месяц?",
    subtitle: "Укажите желаемый объём",
    type: "choice",
    options: [
      { label: "20–50 лидов", icon: "Zap", value: "20", desc: "Тест канала" },
      { label: "50–100 лидов", icon: "TrendingUp", value: "50", desc: "Активные продажи" },
      { label: "100–200 лидов", icon: "Rocket", value: "100", desc: "Системный рост" },
      { label: "Более 200", icon: "BarChart3", value: "200", desc: "Масштаб" },
    ],
  },
  {
    id: "current",
    question: "Как сейчас привлекаете клиентов?",
    subtitle: "Текущий источник лидов",
    type: "choice",
    options: [
      { label: "Контекстная реклама", icon: "MousePointer2", value: "context" },
      { label: "Соцсети / таргет", icon: "Share2", value: "social" },
      { label: "Рекомендации", icon: "Users", value: "referral" },
      { label: "Пока никак", icon: "CircleOff", value: "none" },
    ],
  },
  {
    id: "contact",
    question: "Куда отправить прогноз?",
    subtitle: "Перезвоним в течение 15 минут",
    type: "contact",
  },
]

const forecastMap: Record<string, Record<string, { leads: string; price: string; conversion: string }>> = {
  investments: {
    "20": { leads: "20–40", price: "1 500 ₽", conversion: "до 8%" },
    "50": { leads: "50–80", price: "1 350 ₽", conversion: "до 10%" },
    "100": { leads: "100–140", price: "1 200 ₽", conversion: "до 12%" },
    "200": { leads: "200+", price: "от 900 ₽", conversion: "до 15%" },
  },
  franchise: {
    "20": { leads: "20–35", price: "1 600 ₽", conversion: "до 6%" },
    "50": { leads: "50–75", price: "1 400 ₽", conversion: "до 8%" },
    "100": { leads: "100–130", price: "1 250 ₽", conversion: "до 10%" },
    "200": { leads: "200+", price: "от 1 000 ₽", conversion: "до 12%" },
  },
  realty: {
    "20": { leads: "20–45", price: "1 700 ₽", conversion: "до 5%" },
    "50": { leads: "50–90", price: "1 500 ₽", conversion: "до 7%" },
    "100": { leads: "100–150", price: "1 300 ₽", conversion: "до 9%" },
    "200": { leads: "200+", price: "от 1 100 ₽", conversion: "до 11%" },
  },
  other: {
    "20": { leads: "20–40", price: "1 600 ₽", conversion: "до 7%" },
    "50": { leads: "50–80", price: "1 400 ₽", conversion: "до 9%" },
    "100": { leads: "100–140", price: "1 200 ₽", conversion: "до 11%" },
    "200": { leads: "200+", price: "от 1 000 ₽", conversion: "до 13%" },
  },
}

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(1)

  const step = steps[currentStep]
  const progress = (currentStep / (steps.length - 1)) * 100
  const isContact = step.type === "contact"

  function selectChoice(value: string) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }))
    setDirection(1)
    setTimeout(() => setCurrentStep((s) => s + 1), 180)
  }

  function goBack() {
    setDirection(-1)
    setCurrentStep((s) => s - 1)
  }

  function handleSubmit() {
    if (phone.length < 6) return
    setSubmitted(true)
  }

  const niche = answers["niche"] || "investments"
  const volume = answers["volume"] || "20"
  const forecast = forecastMap[niche]?.[volume] ?? { leads: "20–50", price: "1 500 ₽", conversion: "до 8%" }

  return (
    <section className="relative" id="quiz">
      {/* Peek strip at bottom of hero */}
      <div className="h-8 bg-primary" />

      <div className="bg-primary pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto -mt-2">

            {/* Card */}
            <div className="bg-white border border-white/20 overflow-hidden shadow-xl">

              {/* Progress bar */}
              <div className="h-1 bg-blue-200">
                <motion.div
                  className="h-full bg-primary"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Бесплатный расчёт прогноза</p>
                  <p className="text-sm font-semibold">Шаг {currentStep + 1} из {steps.length}</p>
                </div>
                {currentStep > 0 && !submitted && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    Назад
                  </button>
                )}
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={step.id}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -30 }}
                      transition={{ duration: 0.22 }}
                    >
                      <h3 className="font-display text-xl font-bold mb-1">{step.question}</h3>
                      {step.subtitle && (
                        <p className="text-sm text-muted-foreground mb-5">{step.subtitle}</p>
                      )}

                      {step.type === "choice" && step.options && (
                        <div className="grid grid-cols-2 gap-2">
                          {step.options.map((opt) => {
                            const selected = answers[step.id] === opt.value
                            return (
                              <button
                                key={opt.value}
                                onClick={() => selectChoice(opt.value)}
                                className={`flex items-start gap-3 p-4 border text-left transition-all ${
                                  selected
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/40 hover:bg-secondary/50"
                                }`}
                              >
                                <div className={`w-8 h-8 flex items-center justify-center shrink-0 ${selected ? "bg-primary/15" : "bg-secondary"}`}>
                                  <Icon name={opt.icon} className={`w-4 h-4 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold leading-tight">{opt.label}</p>
                                  {opt.desc && <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      )}

                      {isContact && (
                        <div className="space-y-4">
                          {/* Forecast preview */}
                          <div className="bg-secondary border border-border p-4">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Предварительный прогноз</p>
                            <div className="grid grid-cols-3 gap-3">
                              <div>
                                <p className="font-display text-xl font-bold text-primary">{forecast.leads}</p>
                                <p className="text-xs text-muted-foreground">лидов / мес.</p>
                              </div>
                              <div>
                                <p className="font-display text-xl font-bold text-primary">{forecast.price}</p>
                                <p className="text-xs text-muted-foreground">за лид</p>
                              </div>
                              <div>
                                <p className="font-display text-xl font-bold text-primary">{forecast.conversion}</p>
                                <p className="text-xs text-muted-foreground">конверсия</p>
                              </div>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium mb-1">Имя</label>
                              <Input
                                placeholder="Александр"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-10"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Телефон *</label>
                              <Input
                                type="tel"
                                placeholder="+7 (999) 000-00-00"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-10"
                              />
                            </div>
                          </div>

                          <button
                            onClick={handleSubmit}
                            disabled={phone.length < 6}
                            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Получить прогноз и консультацию
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <p className="text-xs text-center text-muted-foreground">
                            Перезвоним в течение 15 минут. Без спама.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">Заявка принята!</h3>
                    <p className="text-sm text-muted-foreground mb-5">
                      Перезвоним в течение 15 минут и пришлём точный расчёт.
                    </p>
                    <div className="grid grid-cols-3 gap-3 bg-secondary border border-border p-4">
                      <div>
                        <p className="font-display text-xl font-bold text-primary">{forecast.leads}</p>
                        <p className="text-xs text-muted-foreground">лидов / мес.</p>
                      </div>
                      <div>
                        <p className="font-display text-xl font-bold text-primary">{forecast.price}</p>
                        <p className="text-xs text-muted-foreground">за лид</p>
                      </div>
                      <div>
                        <p className="font-display text-xl font-bold text-primary">{forecast.conversion}</p>
                        <p className="text-xs text-muted-foreground">конверсия</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
