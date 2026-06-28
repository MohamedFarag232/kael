"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, HelpCircle, ZapOff } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Ads not generating consistent sales",
      description: "Your campaigns are unpredictable. Some days you win, most days you lose.",
    },
    {
      icon: AlertTriangle,
      title: "High customer acquisition costs",
      description: "CPA keeps climbing while margins keep shrinking. The math doesn't work.",
    },
    {
      icon: HelpCircle,
      title: "No clear growth strategy",
      description: "You're running ads but don't have a systematic approach to scale.",
    },
    {
      icon: ZapOff,
      title: "Scaling feels impossible",
      description: "Every time you try to scale, performance crashes. You're stuck.",
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
            Sound Familiar?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            These are the exact problems we solve for our clients every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-xl mb-4">
                    <problem.icon className="text-red-500" size={24} />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <CardDescription>{problem.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
