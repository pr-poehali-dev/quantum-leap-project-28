import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const benefits = [
  "Первые лиды уже через 24 часа",
  "Прогноз под ваш план продаж",
  "Гарантия качества лидов",
  "Замена нецелевых — бесплатно",
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
    <section className="py-20 sm:py-28 relative overflow-hidden" id="contact">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Начните сегодня
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Готовы запустить поток клиентов?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Оставьте контакт — подготовим прогноз по лидам и стоимости под ваш бизнес и перезвоним в течение 15 минут.
              </p>

              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg shadow-primary/5">
                {!submitted ? (
                  <>
                    <h3 className="font-display text-2xl font-bold mb-2">Получить прогноз</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Заполните форму — свяжемся в течение 15 минут
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <label className="block text-sm font-medium mb-1.5">Номер телефона *</label>
                        <Input
                          type="tel"
                          placeholder="+7 (999) 000-00-00"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-11"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold"
                        disabled={phone.length < 6}
                      >
                        Обсудить проект
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
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
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
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
      </div>
    </section>
  )
}
