"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Stethoscope, Target, BarChart3, TrendingUp } from "lucide-react"

export function WhyKael() {
  const features = [
    {
      icon: Stethoscope,
      title: "Diagnose before execution",
      description: "We analyze your current setup before spending a dollar on ads. No guessing.",
    },
    {
      icon: Target,
      title: "Strategy first",
      description: "Every campaign starts with a data-driven strategy tailored to your business.",
    },
    {
      icon: BarChart3,
      title: "Data driven",
      description: "Decisions based on metrics, not opinions. Real-time optimization 24/7.",
    },
    {
      icon: TrendingUp,
      title: "Profitable growth",
      description: "We don't just scale spend. We scale profit. That's the difference.",
    },
  ]

  return (
    <section id="why-kael" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why KAEL?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We're not just another agency. We're your growth partners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
