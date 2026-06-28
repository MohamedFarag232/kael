"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Process() {
  const steps = [
    { title: "Diagnosis", description: "We audit your current setup and identify opportunities." },
    { title: "Strategy", description: "We build a custom strategy aligned with your goals." },
    { title: "Execution", description: "We launch campaigns with precision and creativity." },
    { title: "Optimization", description: "We continuously optimize for better performance." },
    { title: "Scaling", description: "We scale what works and eliminate what doesn't." },
  ]

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A proven framework for predictable growth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-transparent mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
