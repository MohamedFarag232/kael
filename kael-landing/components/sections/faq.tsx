"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial improvements within the first 30 days. Significant results typically materialize within 60-90 days as we optimize and scale your campaigns.",
    },
    {
      question: "What's your minimum ad spend requirement?",
      answer: "We work with businesses spending $5,000+ monthly on ads. For lower budgets, we recommend focusing on organic growth first before investing in paid acquisition.",
    },
    {
      question: "Do you work with e-commerce or lead generation?",
      answer: "We specialize in both. Our team has deep experience in e-commerce (DTC, Shopify, Amazon) and lead generation (B2B SaaS, professional services, local businesses).",
    },
    {
      question: "What makes KAEL different from other agencies?",
      answer: "We don't just run ads. We build complete acquisition systems. From strategy to creative to funnels to analytics, we handle everything needed to scale profitably.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, we work on month-to-month contracts. We believe our results should earn your continued business, not lock you into long-term commitments.",
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-muted" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-muted">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
