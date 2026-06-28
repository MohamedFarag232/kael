"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counted, setCounted] = useState(false)

  const metrics = [
    { value: 250, suffix: "%", label: "Revenue Growth" },
    { value: 35, suffix: "%", label: "CPA Reduction" },
    { value: 4.8, suffix: "x", label: "ROAS" },
  ]

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true)
    }
  }, [isInView, counted])

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Numbers that speak for themselves.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2 glow-text">
                {counted ? (
                  <Counter value={metric.value} suffix={metric.suffix} />
                ) : (
                  <span>{metric.value}{metric.suffix}</span>
                )}
              </div>
              <div className="text-xl text-muted">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {typeof value === "number" && !Number.isInteger(value)
        ? count.toFixed(1)
        : Math.floor(count)}
      {suffix}
    </span>
  )
}
