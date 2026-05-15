import { motion } from "framer-motion"

export function SocialProof() {
  const companies = [
    { name: "Инвестиции", width: 130 },
    { name: "Франшизы", width: 120 },
    { name: "Недвижимость", width: 160 },
    { name: "Маркетплейсы", width: 160 },
    { name: "Финансы", width: 110 },
  ]

  return (
    <section className="border-y border-border bg-secondary/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left shrink-0"
          >
            <p className="text-lg text-muted-foreground">
              Помогли вырасти
              <br />
              <span className="text-foreground font-semibold">250+ компаниям</span> с 2018 года
            </p>
          </motion.div>

          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center lg:justify-end flex-1">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                whileHover={{ opacity: 0.9, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-muted-foreground font-bold text-lg tracking-wide uppercase"
                style={{ minWidth: company.width }}
              >
                {company.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
