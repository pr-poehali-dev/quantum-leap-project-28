import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

type Step = {
  id: string
  question: string
  type: "choice" | "input"
  options?: { label: string; icon: string; value: string }[]
  inputLabel?: string
  inputPlaceholder?: string
  inputType?: string
}

const steps: Step[] = [
  {
    id: "niche",
    question: "Какой продукт вы продаёте?",
    type: "choice",
    options: [
      { label: "Частные инвестиции", icon: "Landmark", value: "investments" },
      { label: "Франшизы", icon: "Store", value: "franchise" },
      { label: "Недвижимость", icon: "Building2", value: "realty" },
      { label: "Другое направление", icon: "Briefcase", value: "other" },
    ],
  },
  {
    id: "volume",
    question: "Сколько лидов вам нужно в месяц?",
    type: "choice",
    options: [
      { label: "20–50 лидов", icon: "Zap", value: "20" },
      { label: "50–100 лидов", icon: "TrendingUp", value: "50" },
      { label: "100–200 лидов", icon: "Rocket", value: "100" },
      { label: "Более 200 лидов", icon: "BarChart3", value: "200" },
    ],
  },
  {
    id: "current",
    question: "Как сейчас привлекаете клиентов?",
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
    question: "Куда отправить ваш прогноз?",
    type: "input",
    inputLabel: "Номер телефона",
    inputPlaceholder: "+7 (999) 000-00-00",
    inputType: "tel",
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
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(1)

  const step = steps[currentStep]
  const isLast = currentStep === steps.length - 1
  const progress = ((currentStep) / (steps.length - 1)) * 100

  function selectChoice(value: string) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }))
    if (!isLast) {
      setDirection(1)
      setTimeout(() => setCurrentStep((s) => s + 1), 180)
    }
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

  const nicheLabels: Record<string, string> = {
    investments: "частных инвестиций",
    franchise: "продажи франшиз",
    realty: "недвижимости",
    other: "вашей ниши",
  }

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" id="quiz">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <Phone className="w-4 h-4" />
            Бесплатный прогноз
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Узнайте, сколько клиентов<br className="hidden md:block" /> вы можете получить
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ответьте на 3 вопроса — мы рассчитаем прогноз для вашей ниши и перезвоним
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg shadow-primary/5">
              <div className="h-1 bg-secondary">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-muted-foreground">
                    Шаг {currentStep + 1} из {steps.length}
                  </span>
                  {currentStep > 0 && (
                    <button
                      onClick={goBack}
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Назад
                    </button>
                  )}
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="font-display text-2xl font-bold mb-6">{step.question}</h3>

                    {step.type === "choice" && step.options && (
                      <div className="grid grid-cols-2 gap-3">
                        {step.options.map((opt) => {
                          const selected = answers[step.id] === opt.value
                          return (
                            <button
                              key={opt.value}
                              onClick={() => selectChoice(opt.value)}
                              className={`
                                flex items-center gap-3 p-4 rounded-xl border text-left transition-all
                                ${selected
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-secondary/30 hover:border-primary/50 hover:bg-primary/5"
                                }
                              `}
                            >
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${selected ? "bg-primary/20" : "bg-background"}`}>
                                <Icon name={opt.icon} className={`w-4 h-4 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                              </div>
                              <span className="text-sm font-medium leading-tight">{opt.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    )}

                    {step.type === "input" && (
                      <div className="space-y-4">
                        <div className="bg-secondary/30 rounded-xl p-5 mb-6">
                          <p className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide text-xs">Ваш прогноз готов</p>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="font-display text-2xl font-bold text-primary">{forecast.leads}</p>
                              <p className="text-xs text-muted-foreground">лидов / мес.</p>
                            </div>
                            <div>
                              <p className="font-display text-2xl font-bold text-primary">{forecast.price}</p>
                              <p className="text-xs text-muted-foreground">за лид</p>
                            </div>
                            <div>
                              <p className="font-display text-2xl font-bold text-primary">{forecast.conversion}</p>
                              <p className="text-xs text-muted-foreground">конверсия</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-3">
                            Прогноз для {nicheLabels[niche]} · Точный расчёт пришлём на телефон
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">{step.inputLabel}</label>
                          <Input
                            type={step.inputType}
                            placeholder={step.inputPlaceholder}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="text-base h-12"
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            Позвоним в течение 15 минут. Без спама и навязчивых рассылок.
                          </p>
                        </div>

                        <Button
                          onClick={handleSubmit}
                          className="w-full h-12 text-base font-semibold"
                          disabled={phone.length < 6}
                        >
                          Получить прогноз и консультацию
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl border border-border p-10 text-center shadow-lg shadow-primary/5"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Заявка принята!</h3>
              <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                Перезвоним в течение 15 минут, обсудим вашу нишу и пришлём точный прогноз по лидам.
              </p>
              <div className="grid grid-cols-3 gap-4 bg-secondary/40 rounded-xl p-5">
                <div>
                  <p className="font-display text-2xl font-bold text-primary">{forecast.leads}</p>
                  <p className="text-xs text-muted-foreground">лидов / мес.</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">{forecast.price}</p>
                  <p className="text-xs text-muted-foreground">за лид</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">{forecast.conversion}</p>
                  <p className="text-xs text-muted-foreground">конверсия</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
