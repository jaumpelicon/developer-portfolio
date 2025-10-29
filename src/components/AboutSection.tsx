'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'Aplicação de MVVM, MVC e Clean Architecture com código limpo e escalável.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Explorando novas tecnologias mobile e soluções criativas para desafios complexos.'
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva em modelo ágil com cultura de feedbacks e diálogo aberto.'
    },
    {
      icon: Coffee,
      title: 'Melhoria Contínua',
      description: 'Dedicado ao aprendizado contínuo e evolução constante de habilidades.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              Apaixonado por criar aplicativos mobile que fazem a diferença
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Com mais de 3 anos de experiência em desenvolvimento mobile, tive o privilégio de trabalhar 
              com empresas como CI&T, Compass UOL e Jera Software, entregando aplicativos escaláveis e de 
              alta qualidade. Minha jornada começou com Ciência da Computação na UFMS e evoluiu para uma 
              paixão por criar aplicações móveis seamless e performáticas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Sou especialista em Flutter, Kotlin e Swift, com experiência sólida em arquitetura limpa, 
              gerenciamento de estado com Bloc, integração com APIs REST e GraphQL, e CI/CD. Flexível e 
              adaptável, adoro desafios e me empolgo em aprender novas tecnologias para entregar as soluções 
              mais inovadoras. Também possuo experiência em backend com Ruby on Rails, Node.js e Spring Boot.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Proativo', 'Colaborativo', 'Adaptável', 'Resiliente'].map((trait, index) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}