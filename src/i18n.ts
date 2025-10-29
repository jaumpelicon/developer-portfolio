import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      'en-US': {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
          },
          hero: {
            greeting: 'Hello, I am',
            name: 'João Carlos Peliçon Ramos',
            title: 'Mobile Developer',
            specialization: 'specialized in',
            tech: 'Flutter | Android | iOS',
            description: 'I build exceptional mobile applications using Flutter, Kotlin, and Swift. Passionate about clean code, scalable architecture, and delivering innovative solutions.',
            button: 'View My Work',
          },
          about: {
            title: 'About Me',
            subtitle: 'Passionate about creating mobile apps that make a difference',
            description1: 'With over 6 years of experience in mobile development, I have had the privilege of working with companies like CI&T, Compass UOL, and Jera Software, delivering scalable and high-quality applications. My journey began with Computer Science at UFMS and evolved into a passion for creating seamless and high-performance mobile applications.',
            description2: 'I specialize in Flutter, Kotlin, and Swift, with solid experience in clean architecture, state management with Bloc, integration with REST and GraphQL APIs, and CI/CD. Flexible and adaptable, I have worked with various technologies such as React, Ruby on Rails, Node, Vue.js, I am always ready and love challenges, I get excited about learning new technologies to deliver the most innovative solutions.',
            traits: ['Proactive', 'Collaborative', 'Adaptable', 'Resilient'],
            features: [
              {
                title: 'Clean Architecture',
                description: 'Application of MVVM, MVC and Clean Architecture with clean and scalable code.'
              },
              {
                title: 'Innovation',
                description: 'Exploring new mobile technologies and creative solutions for complex challenges.'
              },
              {
                title: 'Teamwork',
                description: 'Effective collaboration in an agile model with a culture of feedback and open dialogue.'
              },
              {
                title: 'Continuous Improvement',
                description: 'Dedicated to continuous learning and constant evolution of skills.'
              }
            ]
          },
          projects: {
            title: 'Featured Projects',
            subtitle: 'Some of my recent projects that demonstrate my skills in mobile development',
            otherProjects: 'Other Projects',
            viewAll: 'View All Projects',
            items: [
              {
                title: 'Rock in Rio',
                description: 'Official app for the world\'s largest music festival. Developed for iOS and Android with Flutter, including a complete lineup, personalized schedule, interactive festival map, show notifications, and social media integration. Over 100k downloads.',
              },
              {
                title: 'The Town',
                description: 'Official application for The Town São Paulo festival. Modern interface with lineup visualization, ticket purchase, personalized show schedule, event map, and accessibility features. Clean Architecture with unit tests.',
              },
              {
                title: 'SESC MS',
                description: 'Application for SESC Mato Grosso do Sul for managing cultural, sports, and educational activities. Includes event schedule, activity registration, digital membership card, and personalized notifications.',
              },
              {
                title: 'HubHouse',
                description: 'Complete mobile real estate platform for buying, selling, and renting properties. Advanced search with filters, virtual tour, real-time chat with realtors, favorite saving, and new property notifications.',
              },
              {
                title: 'Sports Management App',
                description: 'Application for gyms and sports centers with class scheduling, attendance control, personalized training plans, and integration with wearables for activity tracking.',
              },
              {
                title: 'Ticketing System',
                description: 'Platform for selling and validating event tickets. Dynamic QR Code, offline validation, access control, real-time reports, and integration with payment gateways.',
              }
            ]
          },
          skills: {
            title: 'Skills & Technologies',
            subtitle: 'Technologies and tools I use to create high-quality applications',
            techTitle: 'Technologies I work with',
            categories: [
              {
                title: 'Mobile',
              },
              {
                title: 'Backend & Frontend',
              },
              {
                title: 'Architecture & DevOps',
              }
            ]
          },
          contact: {
            title: 'Get in Touch',
            subtitle: 'Always open to new opportunities and challenging projects. Let\'s talk about how we can work together!',
            form: {
              title: 'Send a message',
              firstName: 'First Name',
              firstNamePlaceholder: 'Your first name',
              lastName: 'Last Name',
              lastNamePlaceholder: 'Your last name',
              email: 'Email',
              emailPlaceholder: 'your.email@example.com',
              subject: 'Subject',
              subjectPlaceholder: 'Project discussion',
              message: 'Message',
              messagePlaceholder: 'Tell me about your project...', 
              button: 'Send Message'
            },
            connect: {
              title: 'Let\'s connect',
              description: 'Currently available for freelance projects and full-time opportunities. If you have a project in mind or just want to talk about mobile technology, I would love to hear from you.',
              followMe: 'Follow me'
            },
            footer: '© 2025 João Carlos Peliçon Ramos. Developed with ❤️ using React and Tailwind CSS.'
          }
        }
      },
      'pt-BR': {
        translation: {
          nav: {
            home: 'Início',
            about: 'Sobre',
            skills: 'Habilidades',
            projects: 'Projetos',
            contact: 'Contato'
          },
          hero: {
            greeting: 'Olá, eu sou',
            name: 'João Carlos Peliçon Ramos',
            title: 'Desenvolvedor Mobile',
            specialization: 'especializado em',
            tech: 'Flutter | Android | iOS',
            description: 'Construo aplicativos móveis excepcionais usando Flutter, Kotlin e Swift. Apaixonado por código limpo, arquitetura escalável e entrega de soluções inovadoras.',
            button: 'Veja meu trabalho',
          },
          about: {
            title: 'Sobre Mim',
            subtitle: 'Apaixonado por criar aplicativos mobile que fazem a diferença',
            description1: 'Com mais de 6 anos de experiência em desenvolvimento mobile, tive o privilégio de trabalhar com empresas como CI&T, Compass UOL e Jera Software, entregando aplicativos escaláveis e de alta qualidade. Minha jornada começou com Ciência da Computação na UFMS e evoluiu para uma paixão por criar aplicações móveis seamless e performáticas.',
            description2: 'Sou especialista em Flutter, Kotlin e Swift, com experiência sólida em arquitetura limpa, gerenciamento de estado com Bloc, integração com APIs REST e GraphQL, e CI/CD. Flexível e adaptável, já trabalhei com diversas tecnologias como react, ruby on rails, node, vue.js, estou sempre pronto e adoro desafios, me empolgo em aprender novas tecnologias para entregar as soluções mais inovadoras.',
            traits: ['Proativo', 'Colaborativo', 'Adaptável', 'Resiliente'],
            features: [
              {
                title: 'Clean Architecture',
                description: 'Aplicação de MVVM, MVC e Clean Architecture com código limpo e escalável.'
              },
              {
                title: 'Inovação',
                description: 'Explorando novas tecnologias mobile e soluções criativas para desafios complexos.'
              },
              {
                title: 'Trabalho em Equipe',
                description: 'Colaboração efetiva em modelo ágil com cultura de feedbacks e diálogo aberto.'
              },
              {
                title: 'Melhoria Contínua',
                description: 'Dedicado ao aprendizado contínuo e evolução constante de habilidades.'
              }
            ]
          },
          projects: {
            title: 'Projetos em Destaque',
            subtitle: 'Alguns dos meus projetos recentes que demonstram minhas habilidades em desenvolvimento mobile',
            otherProjects: 'Outros Projetos',
            viewAll: 'Ver Todos os Projetos',
            items: [
              {
                title: 'Rock in Rio',
                description: 'App oficial do maior festival de música do mundo. Desenvolvido para iOS e Android com Flutter, incluindo lineup completo, agenda personalizada, mapa interativo do festival, notificações de shows e integração com redes sociais. Mais de 100k downloads.',
              },
              {
                title: 'The Town',
                description: 'Aplicativo oficial do festival The Town São Paulo. Interface moderna com visualização de lineup, compra de ingressos, agenda de shows personalizada, mapa do evento e recursos de acessibilidade. Arquitetura Clean com testes unitários.',
              },
              {
                title: 'SESC MS',
                description: 'Aplicativo do SESC Mato Grosso do Sul para gestão de atividades culturais, esportivas e educacionais. Inclui agenda de eventos, inscrições em atividades, carteirinha digital e notificações personalizadas.',
              },
              {
                title: 'HubHouse',
                description: 'Plataforma imobiliária mobile completa para compra, venda e aluguel de imóveis. Busca avançada com filtros, tour virtual, chat em tempo real com corretores, salvamento de favoritos e notificações de novos imóveis.',
              },
              {
                title: 'App de Gestão Esportiva',
                description: 'Aplicativo para academias e centros esportivos com agendamento de aulas, controle de frequência, planos de treino personalizados e integração com wearables para tracking de atividades.',
              },
              {
                title: 'Sistema de Ingressos',
                description: 'Plataforma de venda e validação de ingressos para eventos. QR Code dinâmico, validação offline, controle de acesso, relatórios em tempo real e integração com gateways de pagamento.',
              }
            ]
          },
          skills: {
            title: 'Habilidades & Tecnologias',
            subtitle: 'Tecnologias e ferramentas que utilizo para criar aplicações de alta qualidade',
            techTitle: 'Tecnologias com as quais trabalho',
            categories: [
              {
                title: 'Mobile',
              },
              {
                title: 'Backend & Frontend',
              },
              {
                title: 'Arquitetura & DevOps',
              }
            ]
          },
          contact: {
            title: 'Entre em Contato',
            subtitle: 'Sempre aberto a novas oportunidades e projetos desafiadores. Vamos conversar sobre como podemos trabalhar juntos!',
            form: {
              title: 'Envie uma mensagem',
              firstName: 'Nome',
              firstNamePlaceholder: 'Seu nome',
              lastName: 'Sobrenome',
              lastNamePlaceholder: 'Seu sobrenome',
              email: 'Email',
              emailPlaceholder: 'seu.email@exemplo.com',
              subject: 'Assunto',
              subjectPlaceholder: 'Discussão de projeto',
              message: 'Mensagem',
              messagePlaceholder: 'Conte-me sobre seu projeto...', 
              button: 'Enviar Mensagem'
            },
            connect: {
              title: 'Vamos nos conectar',
              description: 'Atualmente disponível para projetos freelance e oportunidades full-time. Se você tem um projeto em mente ou quer apenas conversar sobre tecnologia mobile, adoraria ouvir de você.',
              followMe: 'Me siga'
            },
            footer: '© 2025 João Carlos Peliçon Ramos. Desenvolvido com ❤️ usando React e Tailwind CSS.'
          }
        }
      }
    }
  });

export default i18n;