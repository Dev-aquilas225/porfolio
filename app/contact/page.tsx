"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'christoinaquilas@gmail.com',
    link: 'mailto:christoinaquilas@gmail.com'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '0768571247',
    link: 'tel:0768571247'
  },
  {
    icon: MapPin,
    title: 'Localisation',
    content: 'Abidjan, abobo dépôt 9',
    link: '#'
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
      staggerChildren: 0.1
    }
  }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Échec de l\'envoi du message')
      }

      const data = await response.json()
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer plus tard.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-portfolio-yellow to-portfolio-orange rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-portfolio-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-portfolio-yellow to-portfolio-orange bg-clip-text text-transparent">
              Me Contacter
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une idée ? Un projet ? Discutons ensemble de vos ambitions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-bold mb-6"
            >
              Restons en contact
            </motion.h2>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border hover:border-portfolio-yellow">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-portfolio-yellow to-portfolio-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-portfolio-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-portfolio-yellow transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            <motion.div variants={fadeInUp} className="pt-6">
              <Card className="bg-gradient-to-br from-portfolio-yellow/10 to-portfolio-orange/10 border-portfolio-yellow/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Disponibilité</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Je suis actuellement disponible pour de nouveaux projets et collaborations.
                  </p>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Disponible maintenant
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="border-border hover:border-portfolio-yellow transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-border focus:border-portfolio-yellow"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-border focus:border-portfolio-yellow"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-border focus:border-portfolio-yellow"
                        placeholder="Sujet de votre message"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-border focus:border-portfolio-yellow resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-portfolio-yellow hover:bg-portfolio-orange text-portfolio-black font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-portfolio-black border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-portfolio-yellow/5 via-portfolio-orange/5 to-portfolio-yellow/5 border-portfolio-yellow/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div>
                  <h3 className="font-semibold mb-2">Quel est votre délai de réponse ?</h3>
                  <p className="text-muted-foreground text-sm">
                    Je réponds généralement sous 24h les jours ouvrés.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proposez-vous des devis gratuits ?</h3>
                  <p className="text-muted-foreground text-sm">
                    Oui, tous mes devis sont gratuits et sans engagement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Travaillez-vous en équipe ?</h3>
                  <p className="text-muted-foreground text-sm">
                    Je travaille seul ou en équipe selon les besoins du projet.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Acceptez-vous les petits budgets ?</h3>
                  <p className="text-muted-foreground text-sm">
                    Je m'adapte à tous types de projets, contactez-moi !
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}