import React from "react"
import { motion } from "framer-motion"

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

interface TestimonialsColumnProps {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}

export const TestimonialsColumn = (props: TestimonialsColumnProps) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl border border-border shadow-md shadow-primary/5 max-w-xs w-full bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  key={i}
                >
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-card-foreground leading-relaxed">"{text}"</p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                    <img
                      width={36}
                      height={36}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold tracking-tight leading-5">{name}</div>
                      <div className="text-xs leading-5 text-muted-foreground">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
