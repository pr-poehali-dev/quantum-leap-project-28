import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"

const benefits = [
  "Первые лиды через 24 часа",
  "Прогноз под ваш план продаж",
  "Гарантия качества",
  "Замена нецелевых бесплатно",
  "Персональный менеджер",
  "Без долгосрочных контрактов",
]

export function FinalOfferSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (phone.length < 6) return
    setSubmitted(true)
  }

  return (
    <section className="py-20 sm:py-24 bg-primary" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="inline-flex items-center border border-white/30 text-white/70 text-xs px-3 py-1 mb-6">
              Начните сегодня
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Готовы запустить поток клиентов?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Оставьте контакт — подготовим прогноз по лидам и стоимости для вашего бизнеса и перезвоним в течение 15 минут.
            </p>

            <div className="space-y-2.5">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0" />
                  <span className="text-sm text-white/80 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="bg-white p-8">
              {!submitted ? (
                <>
                  <h3 className="font-display text-xl font-bold mb-1">Получить прогноз</h3>
                  <p className="text-sm text-muted-foreground mb-6">Свяжемся в течение 15 минут</p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Ваше имя</label>
                      <Input
                        placeholder="Александр"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Телефон *</label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 000-00-00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-11"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={phone.length < 6}
                      className="w-full bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Обсудить проект →
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="#" className="underline underline-offset-2 hover:text-foreground">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm">
                    Перезвоним в течение 15 минут и подготовим прогноз под вашу нишу.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
