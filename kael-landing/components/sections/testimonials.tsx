"use client"

import { motion } from "framer-motion"
import { Card, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "KAEL transformed our acquisition strategy. We went from struggling to scale to achieving 4x ROAS in just 3 months.",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Michael Roberts",
      role: "Founder, GrowthCo",
      content: "The team at KAEL doesn't just run ads. They build systems. Our CPA dropped by 40% while revenue tripled.",
      avatar: "MR",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "CMO, ScaleUp",
      content: "Finally an agency that understands profitable growth. No more vanity metrics. Just real, sustainable results.",
      avatar: "EW",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-primary text-primary" size={16} />
                    ))}
                  </div>
                  <p className="text-muted mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
