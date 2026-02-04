"use client"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  question: string
  answer: ReactNode
  isOpen: boolean
  onToggle: () => void
  id: string
}

export function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="border-b border-zinc-800 pb-4">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded py-1"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <span className="font-medium">{question}</span>
        <motion.span
          className="text-zinc-500 text-xl leading-none select-none"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm text-zinc-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: { question: string; answer: ReactNode }[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
