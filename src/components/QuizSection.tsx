import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

type Option = { label: string; icon: string; value: string; desc?: string }

type Step = {
  id: string
  question: string
  subtitle?: string
  type: "choice" | "contact"
  options?: Option[]
}

const steps: Step[] = [
  {
    id: "niche",
    question: "Ваша ниша?",
    subtitle: "Выберите направление, в котором работает ваш бизнес",
    type: "choice",
    options: [
      { label: "Частные инвестиции", icon: "Landmark", value: "investments", desc: "Привлечение инвесторов" },
      { label: "Франшизы", icon: "Store", value: "franchise", desc: "Продажа франшизы" },
      { label: "Недвижимость", icon: "Building2", value: "realty", desc: "Новостройки, вторичка" },
      { label: "Другое направление", icon: "Briefcase", value: "other", desc: "Иной вид бизнеса" },
    ],
  },
  {
    id: "goal",
    question: "Какой результат хотите получить?",
    subtitle: "Что для вас важнее всего на старте",
    type: "choice",
    options: [
      { label: "Стабильный поток заявок", icon: "TrendingUp", value: "stable", desc: "Предсказуемый объём каждый месяц" },
      { label: "Быстрый запуск за 24 ч", icon: "Zap", value: "fast", desc: "Первые лиды как можно скорее" },
      { label: "Выполнить план продаж", icon: "BarChart3", value: "plan", desc: "Конкретные цифры по сделкам" },
      { label: "Масштабировать поток", icon: "Rocket", value: "scale", desc: "Увеличить объём лидов" },
    ],
  },
  {
    id: "volume",
    question: "Сколько заявок нужно в месяц?",
    subtitle: "Укажите желаемый объём — сделаем прогноз",
    type: "choice",
    options: [
      { label: "До 50 заявок", icon: "Zap", value: "50", desc: "Старт и тест канала" },
      { label: "50–100 заявок", icon: "TrendingUp", value: "100", desc: "Активные продажи" },
      { label: "100–200 заявок", icon: "Rocket", value: "200", desc: "Системный рост" },
      { label: "Более 200 заявок", icon: "BarChart3", value: "200+", desc: "Масштаб и поток" },
    ],
  },
  {
    id: "sales",
    question: "Есть действующий отдел продаж?",
    subtitle: "Это поможет подобрать правильную модель передачи лидов",
    type: "choice",
    options: [
      { label: "Да, отдел есть", icon: "Users", value: "yes", desc: "Менеджеры готовы к приёму заявок" },
      { label: "Обрабатываю сам", icon: "User", value: "solo", desc: "Пока без команды" },
      { label: "Нанимаем под запуск", icon: "UserPlus", value: "hiring", desc: "Формируем команду" },
      { label: "Нужна помощь в настройке", icon: "Settings", value: "help", desc: "Помогите выстроить процесс" },
    ],
  },
  {
    id: "contact",
    question: "Подготовим прогноз под ваш бизнес",
    subtitle: "Оставьте контакт — перезвоним в течение 15 минут и пришлём расчёт",
    type: "contact",
  },
]

const forecastMap: Record<string, Record<string, { leads: string; price: string; conversion: string }>> = {
  investments: {
    "50": { leads: "30–50", price: "1 500 ₽", conversion: "до 8%" },
    "100": { leads: "60–100", price: "1 350 ₽", conversion: "до 10%" },
    "200": { leads: "120–200", price: "1 200 ₽", conversion: "до 12%" },
    "200+": { leads: "200+", price: "от 900 ₽", conversion: "до 15%" },
  },
  franchise: {
    "50": { leads: "30–50", price: "1 600 ₽", conversion: "до 6%" },
    "100": { leads: "60–100", price: "1 400 ₽", conversion: "до 8%" },
    "200": { leads: "120–200", price: "1 250 ₽", conversion: "до 10%" },
    "200+": { leads: "200+", price: "от 1 000 ₽", conversion: "до 12%" },
  },
  realty: {
    "50": { leads: "30–50", price: "1 700 ₽", conversion: "до 5%" },
    "100": { leads: "60–100", price: "1 500 ₽", conversion: "до 7%" },
    "200": { leads: "120–200", price: "1 300 ₽", conversion: "до 9%" },
    "200+": { leads: "200+", price: "от 1 100 ₽", conversion: "до 11%" },
  },
  other: {
    "50": { leads: "30–50", price: "1 600 ₽", conversion: "до 7%" },
    "100": { leads: "60–100", price: "1 400 ₽", conversion: "до 9%" },
    "200": { leads: "120–200", price: "1 200 ₽", conversion: "до 11%" },
    "200+": { leads: "200+", price: "от 1 000 ₽", conversion: "до 13%" },
  },
}

type Props = { openLegal?: () => void }

export function QuizSection({ openLegal }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(1)

  const step = steps[currentStep]
  const progress = (currentStep / (steps.length - 1)) * 100
  const isContact = step.type === "contact"

  function selectChoice(value: string) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }))
    setDirection(1)
    setTimeout(() => setCurrentStep((s) => s + 1), 200)
  }

  function goBack() {
    setDirection(-1)
    setCurrentStep((s) => s - 1)
  }

  function handleSubmit() {
    if (phone.length < 6 || !consent) return
    setSubmitted(true)
  }

  const niche = answers["niche"] || "investments"
  const volume = answers["volume"] || "50"
  const forecast = forecastMap[niche]?.[volume] ?? { leads: "30–50", price: "1 500 ₽", conversion: "до 8%" }

  return (
    <section className="pt-4 pb-16 sm:pt-8 sm:pb-20 relative" id="quiz">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl overflow-hidden relative"
          >
            <div className="bg-primary px-6 sm:px-8 pt-7 pb-5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm font-medium">Бесплатный расчёт прогноза</span>
              </div>
              <p className="text-primary-foreground text-lg font-bold font-display">
                Ответьте на 4 вопроса — получите прогноз по лидам и стоимости привлечения
              </p>
              <div className="mt-4 h-1.5 bg-primary-foreground/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-foreground rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-primary-foreground/60">Шаг {currentStep + 1} из {steps.length}</span>
                <span className="text-xs text-primary-foreground/60">{Math.round(progress)}%</span>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              {!submitted ? (
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="font-display text-2xl font-bold mb-1">{step.question}</h3>
                    {step.subtitle && (
                      <p className="text-muted-foreground text-sm mb-6">{step.subtitle}</p>
                    )}

                    {step.type === "choice" && step.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.options.map((opt) => {
                          const selected = answers[step.id] === opt.value
                          return (
                            <button
                              key={opt.value}
                              onClick={() => selectChoice(opt.value)}
                              className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all group ${
                                selected
                                  ? "border-primary bg-primary/10"
                                  : "border-border bg-secondary/30 hover:border-primary/50 hover:bg-primary/5"
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${selected ? "bg-primary/20" : "bg-background group-hover:bg-primary/10"}`}>
                                <Icon name={opt.icon} className={`w-4 h-4 ${selected ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
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

                    {step.type === "contact" && (
                      <div className="space-y-5">
                        <div className="bg-secondary/50 rounded-2xl p-5 border border-border">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Ваш предварительный прогноз</p>
                          <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            <div>
                              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{forecast.leads}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">лидов / мес.</p>
                            </div>
                            <div>
                              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{forecast.price}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">за лид</p>
                            </div>
                            <div>
                              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{forecast.conversion}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">конверсия</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                            Точный расчёт по каналам и стоимости пришлём после звонка
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Ваше имя</label>
                            <Input
                              placeholder="Александр"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="h-11"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5">Номер телефона</label>
                            <Input
                              type="tel"
                              placeholder="+7 (999) 000-00-00"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="h-11"
                              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            />
                          </div>
                        </div>

                        <label className="flex items-start gap-2.5 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 w-4 h-4 accent-[#392AE7] cursor-pointer shrink-0"
                            aria-required="true"
                          />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            Я согласен(а) на обработку персональных данных в соответствии с{" "}
                            <button
                              type="button"
                              onClick={openLegal}
                              className="text-[#392AE7] hover:underline focus:outline-none"
                            >
                              Политикой конфиденциальности
                            </button>
                          </span>
                        </label>

                        <Button
                          onClick={handleSubmit}
                          className="w-full h-12 text-base font-semibold"
                          disabled={phone.length < 6 || !consent}
                        >
                          Получить прогноз и консультацию
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Позвоним в течение 15 минут. Без спама и навязчивых рассылок.
                        </p>
                      </div>
                    )}

                    {currentStep > 0 && (
                      <button
                        onClick={goBack}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mt-5"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Назад
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Заявка принята!</h3>
                  <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                    Перезвоним в течение 15 минут, обсудим задачу и пришлём точный прогноз по лидам и каналам.
                  </p>
                  <div className="grid grid-cols-3 gap-4 bg-secondary/40 rounded-2xl p-5 max-w-sm mx-auto">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}