'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useTranslation } from 'react-i18next'

export function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.items.0.title'),
      description: t('projects.items.0.description'),
      image: 'https://images.unsplash.com/photo-1683368392119-96f38e599cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY29uY2VydCUyMGZlc3RpdmFsJTIwc3RhZ2V8ZW58MXx8fHwxNzYxNzYwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'Bloc', 'Firebase', 'Google Maps', 'Push Notifications'],
      github: 'https://github.com/jaumpelicon/',
      live: 'https://apps.apple.com/br/app/rock-in-rio/id',
      featured: true
    },
    {
      title: t('projects.items.1.title'),
      description: t('projects.items.1.description'),
      image: 'https://images.unsplash.com/photo-1611810293387-c8afe03cd7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBsaWdodHN8ZW58MXx8fHwxNzYxNzI1OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'Clean Architecture', 'Bloc', 'GraphQL', 'Atomic Design'],
      github: 'https://github.com/jaumpelicon/',
      live: 'https://apps.apple.com/br/app/the-town/id',
      featured: true
    },
    {
      title: t('projects.items.2.title'),
      description: t('projects.items.2.description'),
      image: 'https://images.unsplash.com/photo-1597226133863-eaf2f4308546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGNlbnRlciUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzYxNzYwNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'Firebase', 'REST API', 'GetIt', 'GoRouter'],
      github: 'https://github.com/jaumpelicon/',
      live: '#',
      featured: false
    },
    {
      title: t('projects.items.3.title'),
      description: t('projects.items.3.description'),
      image: 'https://images.unsplash.com/photo-1738713988509-355796e88d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBob3VzZXxlbnwxfHx8fDE3NjE3NjA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'MVVM', 'Firebase', 'Google Maps', 'WebSocket'],
      github: 'https://github.com/jaumpelicon/',
      live: '#',
      featured: false
    },
    {
      title: t('projects.items.4.title'),
      description: t('projects.items.4.description'),
      image: 'https://images.unsplash.com/photo-1601106711560-ffeb65211600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc2MTc2MDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Kotlin', 'MVVM', 'Room', 'Retrofit', 'Coroutines'],
      github: 'https://github.com/jaumpelicon/',
      live: '#',
      featured: false
    },
    {
      title: t('projects.items.5.title'),
      description: t('projects.items.5.description'),
      image: 'https://images.unsplash.com/photo-1652018440238-1aeb20a803a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHRpY2tldHMlMjBtb2JpbGV8ZW58MXx8fHwxNzYxNjk5MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Flutter', 'Bloc', 'QR Code', 'Dio', 'Local Storage'],
      github: 'https://github.com/jaumpelicon/',
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">{t('projects.otherProjects')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
            onClick={() => window.open('https://github.com/jaumpelicon/', '_blank')}
          >
            {t('projects.viewAll')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}