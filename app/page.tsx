"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Code, Database, Globe, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  { name: 'Frontend', icon: Globe, description: 'React, Next.js, Vue.js, TypeScript' },
  { name: 'Backend', icon: Database, description: 'Node.js, Python, PostgreSQL, MongoDB' },
  { name: 'Mobile', icon: Smartphone, description: 'React Native, Flutter' },
  { name: 'DevOps', icon: Code, description: 'Docker, AWS, CI/CD, Git' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-portfolio-yellow/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-portfolio-yellow via-portfolio-orange to-portfolio-yellow bg-clip-text text-transparent">
                Développeur Web
              </span>
              <br />
              <span className="text-foreground">Fullstack</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionné par la création d'expériences web exceptionnelles avec des technologies modernes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/projets">
              <Button size="lg" className="bg-portfolio-yellow hover:bg-portfolio-orange text-portfolio-black font-semibold">
                Voir mes projets
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black">
                Me contacter
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-portfolio-yellow" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              À propos de moi
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              Développeur fullstack avec 5+ années d'expérience, je crée des applications web 
              performantes et intuitives. Spécialisé dans l'écosystème JavaScript moderne et 
              passionné par les nouvelles technologies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div key={skill.name} variants={fadeInUp}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-portfolio-yellow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-portfolio-yellow to-portfolio-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-portfolio-black" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-portfolio-yellow/10 via-portfolio-orange/10 to-portfolio-yellow/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de vos idées et créons ensemble quelque chose d'extraordinaire
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-portfolio-orange hover:bg-portfolio-yellow text-portfolio-black font-semibold">
                Démarrons un projet
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}