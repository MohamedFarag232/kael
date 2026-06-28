"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react"

export function Hero() {
  const floatingMetrics = [
    { icon: TrendingUp, label: "Revenue", value: "+250%", delay: 0.2 },
    { icon: Users, label: "Customers", value: "+180%", delay: 0.4 },
    { icon: DollarSign, label: "ROAS", value: "4.8x", delay: 0.6 },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Scale Smarter.
              <br />
              <span className="text-primary glow-text">Grow Profitably.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto">
              We build performance marketing systems that turn ad spend into predictable revenue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="group">
              Book Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Get Free Growth Audit
            </Button>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-3 gap-6">
                {floatingMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: metric.delay }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-3">
                      <metric.icon className="text-primary" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-muted">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Chart mockup */}
              <div className="mt-8 h-32 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
