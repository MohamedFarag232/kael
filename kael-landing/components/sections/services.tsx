"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Facebook, Search, Target, Layout, Palette } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Facebook,
      title: "Meta Advertising",
      description: "Facebook & Instagram campaigns that convert. Creative, targeting, and optimization.",
    },
    {
      icon: Search,
      title: "Google Ads",
      description: "Search, Display, and YouTube campaigns. Capture intent at every stage.",
    },
    {
      icon: Target,
      title: "Performance Strategy",
      description: "Data-driven strategies that align with your business goals and KPIs.",
    },
    {
      icon: Layout,
      title: "Funnels",
      description: "High-converting landing pages and funnels that turn traffic into customers.",
    },
    {
      icon: Palette,
      title: "Creative Strategy",
      description: "Ad creatives that stop the scroll and drive action. Video, static, and UGC.",
    },
  ]

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything you need to scale your paid acquisition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
