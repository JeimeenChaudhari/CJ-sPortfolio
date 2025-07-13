import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsBg from '../assets/projects-bg.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: projectsBg,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: projectsBg,
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content creation platform that helps users generate high-quality articles, social media posts, and marketing copy.',
      image: projectsBg,
      technologies: ['React', 'Python', 'OpenAI API', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with detailed forecasts, interactive maps, and personalized weather alerts.',
      image: projectsBg,
      technologies: ['Vue.js', 'Express.js', 'Weather API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media management with real-time data visualization and reporting.',
      image: projectsBg,
      technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness application with workout tracking, progress visualization, and social features.',
      image: projectsBg,
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass rounded-xl overflow-hidden hover-lift hover-glow ${
                project.featured ? 'md:grid-cols-2' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-8 p-8`}>
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/80 flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300"
                    >
                      <Github size={24} className="text-foreground" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300"
                    >
                      <ExternalLink size={24} className="text-foreground" />
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
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
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 btn-secondary"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;