"use client"

import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const formations = [
  {
    year: '2021 → present',
    title: 'Licence en réseau et génie logiciel',
    school: 'Pigier CI',
    location: 'Abidjan, Plateau',
    description: 'Formation en cours axée sur les réseaux informatiques et le développement de logiciels.',
    skills: ['Networking', 'Software Development', 'Java', 'Linux', 'System Administration']
  },
  {
    year: '2023',
    title: 'BTS en informatique développeur d\'application',
    school: 'Pigier CI',
    location: 'Abidjan, Plateau',
    description: 'Formation technique en développement d\'applications avec un focus sur la programmation.',
    skills: ['JavaScript', 'HTML/CSS', 'Python', 'Database Management', 'App Development']
  },
  {
    year: '2021',
    title: 'Certificat spécialiste en Microsoft Office',
    school: 'Pigier CI',
    location: 'Abidjan, Plateau',
    description: 'Certification professionnelle sur l\'utilisation avancée des outils Microsoft Office.',
    skills: ['Microsoft Word', 'Excel', 'PowerPoint', 'Office Automation', 'Data Analysis']
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function FormationsPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-portfolio-yellow to-portfolio-orange rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-portfolio-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-portfolio-yellow to-portfolio-orange bg-clip-text text-transparent">
              Mes Formations
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un parcours académique orienté vers l'excellence en informatique et le développement logiciel
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-yellow to-portfolio-orange hidden md:block"></div>

          {formations.map((formation, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-portfolio-yellow rounded-full border-4 border-background hidden md:block"></div>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border hover:border-portfolio-yellow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-portfolio-yellow transition-colors">
                      {formation.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0 border-portfolio-yellow text-portfolio-yellow">
                      {formation.year}
                    </Badge>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span className="font-medium">{formation.school}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{formation.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {formation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {formation.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-portfolio-yellow/10 text-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 p-8 rounded-2xl bg-gradient-to-r from-portfolio-yellow/10 via-portfolio-orange/10 to-portfolio-yellow/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Formation continue
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Toujours en quête d'apprentissage, je me forme continuellement aux dernières technologies
            et bonnes pratiques du développement logiciel moderne.
          </p>
        </motion.div>
      </div>
    </div>
  )
}