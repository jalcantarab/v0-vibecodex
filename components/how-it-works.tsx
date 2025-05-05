"use client"

import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { gradients } from "@/lib/design-system"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  isActive: boolean
  isLast: boolean
  colorClass: string
  onClick: () => void
  expanded: boolean
  index: number
}

const ProcessStep = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  isActive,
  isLast,
  colorClass,
  onClick,
  expanded,
  index,
}: ProcessStepProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-col items-center relative", isActive ? "z-10" : "z-0")}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      variants={variants}
    >
      {/* Step number */}
      <motion.div
        className={cn("flex h-16 w-16 items-center justify-center rounded-full shadow-lg text-white", colorClass)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl font-bold">{number}</span>
      </motion.div>

      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5">
          <div className={cn("h-full bg-gradient-to-r from-current to-transparent", colorClass, "opacity-20")}></div>
        </div>
      )}

      {/* Content */}
      <div className="mt-4 text-center max-w-xs">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>

      {/* Interactive image card */}
      <motion.div
        className="rounded-lg border bg-card p-3 shadow-sm overflow-hidden cursor-pointer w-full max-w-xs"
        onClick={onClick}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        animate={{ height: expanded ? "auto" : "12rem" }}
      >
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="rounded-md w-full h-auto object-cover" />

        {expanded && (
          <motion.div
            className="mt-3 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-3 bg-muted/50 rounded-md">
              <h4 className="font-medium mb-1">Pro Tip:</h4>
              {number === 1 && (
                <p>
                  Use our requirements template to structure your ideas before starting. Even a simple list of features
                  helps!
                </p>
              )}
              {number === 2 && (
                <p>
                  Our guided prompts are optimized for different AI tools. Choose the one that matches your preferred
                  platform.
                </p>
              )}
              {number === 3 && (
                <p>
                  All projects can be deployed directly to Vercel, GitHub Pages, or exported as a standalone codebase.
                </p>
              )}
            </div>
          </motion.div>
        )}

        <div className="flex justify-center mt-2">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  const toggleStep = (stepIndex: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepIndex]: !prev[stepIndex],
    }))
  }

  const steps = [
    {
      number: 1,
      title: "A sketch on paper",
      description: "Start with your idea, no matter how rough. Even a simple sketch or description is enough to begin.",
      imageSrc: "/step1-ideation-sketch.png",
      imageAlt: "Sketch to idea concept",
      colorClass: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    },
    {
      number: 2,
      title: "A prompt in an AI tool",
      description: "Use our guided prompts with your favorite AI tools to transform your idea into code.",
      imageSrc: "/step2-ai-prompt.png",
      imageAlt: "AI prompt interface",
      colorClass: "bg-gradient-to-r from-violet-500 to-violet-400",
    },
    {
      number: 3,
      title: "The resulting application",
      description: "Get a working application you can use, share, and continue to build upon.",
      imageSrc: "/step3-final-app.png",
      imageAlt: "Resulting application",
      colorClass: "bg-gradient-to-r from-violet-600 to-violet-500",
    },
  ]

  const scrollToSection = () => {
    if (sectionRef.current) {
      const yOffset = -100 // Adjust this value as needed
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section id="how-it-works" ref={sectionRef} className="w-full py-12 md:py-24 relative">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How it works
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From idea to implementation in three simple steps
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              isActive={activeStep === step.number}
              isLast={index === steps.length - 1}
              onClick={() => toggleStep(step.number)}
              expanded={!!expandedSteps[step.number]}
              index={index}
            />
          ))}
        </div>

        {/* Action prompt */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-center max-w-2xl mb-6">
            Ready to transform your idea into reality? Start building your project now with our guided process.
          </p>
          <Button size="lg" className={cn(gradients.primary, "text-white")} onClick={scrollToSection}>
            Start Creating
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
