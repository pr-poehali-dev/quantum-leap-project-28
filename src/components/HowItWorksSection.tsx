import { motion } from "framer-motion"
import { TrendingUp, Zap, CheckCircle2, Activity, ArrowUpRight, BarChart3, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      title: "Определяем нишу и канал",
      description:
        "Вы рассказываете о продукте и целевой аудитории. Мы анализируем нишу, подбираем наиболее эффективный канал привлечения и рассчитываем прогноз лидов для выполнения вашего плана продаж.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Прогноз по нише</p>
                  <p className="text-sm text-muted-foreground">Частные инвестиции</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Лидов в месяц</span>
                  <span className="text-sm font-medium text-primary">80–120 шт.</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Цена лида</span>
                  <span className="text-sm font-medium text-primary">от 1 500 ₽</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Старт</span>
                  <span className="text-sm font-medium text-green-500">24 часа</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: TrendingUp,
      title: "Запускаем генерацию",
      description:
        "Настраиваем рекламные кампании и начинаем привлечение целевой аудитории. Уже через 24 часа первые лиды поступают к вам: с именем, контактом и кратким описанием запроса клиента.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Лиды сегодня</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>Активно</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Частный инвестор</p>
                    <p className="text-xs text-muted-foreground">+7 (912) ••• ••-•• · 10:23</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Покупатель франшизы</p>
                    <p className="text-xs text-muted-foreground">+7 (926) ••• ••-•• · 11:47</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Покупатель недвижимости</p>
                    <p className="text-xs text-muted-foreground">+7 (963) ••• ••-•• · 13:05</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: Zap,
      title: "Гарантируем качество",
      description:
        "Каждый лид проходит проверку на соответствие вашей аудитории. Если обращение оказалось нецелевым — мы заменяем его бесплатно. Вы платите только за результат.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Качество лидов</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+18%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Целевые лиды</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Дозвон с первого раза</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Конверсия в сделку</span>
                    <span className="font-semibold">до 35%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[35%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-primary/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Замена нецелевых</p>
                  <p className="text-lg font-bold text-primary">Бесплатно</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Старт за</p>
                  <p className="text-lg font-bold text-primary">24 часа</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 bg-background" id="how">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Как это работает</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три простых шага — и поток целевых клиентов уже идёт в ваш бизнес
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">{step.visual}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Шаг {index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
