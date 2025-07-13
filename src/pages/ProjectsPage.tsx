import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, Calendar, User, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsBg from '../assets/projects-bg.jpg';

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, inventory management, and real-time notifications.',
      image: projectsBg,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
      date: '2024',
      client: 'TechCorp Solutions',
      category: 'Web Dev'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, time tracking, and advanced reporting capabilities.',
      image: projectsBg,
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Prisma', 'Tailwind'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2024',
      client: 'Startup Inc',
      category: 'Web Dev'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'An AI-powered content creation platform that helps users generate high-quality articles, social media posts, marketing copy, and automated content scheduling.',
      image: projectsBg,
      technologies: ['React', 'Python', 'OpenAI API', 'FastAPI', 'Redis', 'AWS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2023',
      client: 'Content Agency',
      category: 'AI/ML'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with detailed forecasts, interactive maps, personalized weather alerts, historical data analysis, and location-based recommendations.',
      image: projectsBg,
      technologies: ['Vue.js', 'Express.js', 'Weather API', 'Chart.js', 'Mapbox', 'PWA'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2023',
      client: 'WeatherTech',
      category: 'Web Dev'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media management with real-time data visualization, automated reporting, sentiment analysis, and competitor tracking.',
      image: projectsBg,
      technologies: ['React', 'D3.js', 'Node.js', 'Redis', 'Python', 'Machine Learning'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2023',
      client: 'Social Media Co',
      category: 'AI/ML'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness application with workout tracking, progress visualization, social features, nutrition planning, and personal trainer integration.',
      image: projectsBg,
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2022',
      client: 'FitnessPro',
      category: 'Apps'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      description: 'A modern real estate platform with property listings, virtual tours, mortgage calculator, agent directory, and advanced search functionality.',
      image: projectsBg,
      technologies: ['Next.js', 'Sanity CMS', 'TypeScript', 'MapBox', 'Vercel', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2022',
      client: 'RealEstate Pro',
      category: 'Web Dev'
    },
    {
      id: 8,
      title: 'Learning Management System',
      description: 'An educational platform with course creation, student progress tracking, interactive quizzes, video streaming, and certification management.',
      image: projectsBg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Video.js', 'Socket.io', 'AWS S3'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2022',
      client: 'EduTech Solutions',
      category: 'Web Dev'
    },
    {
      id: 9,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, budget tracking, and financial insights.',
      image: projectsBg,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Plaid API', 'Biometric Auth'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2023',
      client: 'FinTech Bank',
      category: 'Apps'
    },
    {
      id: 10,
      title: 'Smart Home Dashboard',
      description: 'IoT dashboard for controlling smart home devices with voice commands, automation rules, energy monitoring, and security features.',
      image: projectsBg,
      technologies: ['Flutter', 'IoT', 'Google Assistant', 'AWS IoT', 'Machine Learning'],
      github: 'https://github.com',
      live: 'https://demo.com',
      date: '2023',
      client: 'SmartHome Inc',
      category: 'Apps'
    }
  ];

  const categories = ['All', 'Web Dev', 'AI/ML', 'Apps'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container-max">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 mb-8 group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={20} />
            </motion.div>
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-fancy font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my work, featuring innovative solutions built with modern technologies. 
              Each project represents a unique challenge solved with creativity and technical expertise.
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'glass hover:bg-primary/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <section className="section-padding" ref={ref}>
        <div className="container-max">
          <div className="grid gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    layout: { duration: 0.3 }
                  }}
                  className="glass rounded-xl overflow-hidden hover-lift hover-glow"
                >
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-8 p-8`}>
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-lg group"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                    
                    {/* Overlay with links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-background/90 flex items-center justify-center space-x-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 glass rounded-full hover:bg-primary/20 transition-all duration-300"
                      >
                        <Github size={24} className="text-foreground" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 glass rounded-full hover:bg-primary/20 transition-all duration-300"
                      >
                        <ExternalLink size={24} className="text-foreground" />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User size={16} />
                          <span>{project.client}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-fancy font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 btn-secondary"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 btn-primary"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16 p-8 glass rounded-xl"
          >
            <h3 className="text-2xl font-fancy font-bold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Let's discuss how we can create something amazing together.
            </p>
            <Link
              to="/#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;