import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsBg from '../assets/projects-bg.jpg';
import Typing_Speed_Test from '../assets/Typing_Speed_Test.jpg';
import BatteryBms from '../assets/Battery-Bms.jpg';
import BAtteryFlow from '../assets/Battery-Flow.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Typing Speed Test',
      description: 'A fast, interactive typing speed tester built with React. It measures your typing speed in Words Per Minute (WPM), tracks accuracy, mistakes, and shows detailed results after completion. Perfect for improving typing skills with real-time feedback and a modern UI.',
      image: Typing_Speed_Test,
      technologies: ['React', 'Vite', 'JavaScript', 'gh-pages'],
      github: 'https://github.com/JeimeenChaudhari/Typing_speed_test',
      live: 'https://jeimeenchaudhari.github.io/Typing_speed_test/',
      featured: true
    },
    {
      title: 'ExpenseFlow (Under Construction)',
      description: 'ExpenseFlow is a smart and seamless expense tracking app that helps you manage, analyze, and optimize your finances effortlessly.',
      image: projectsBg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Recharts', 'Vite'],
      github: 'https://github.com',
      live: 'https://expense-flow-enwt.vercel.app/'
    },
    {
      title: 'Battery_BMS_Dashboard',
      description: 'A comprehensive dashboard for monitoring and managing battery management systems (BMS) in electric vehicles, providing real-time data visualization and analytics.',
      image: BatteryBms,
      technologies: ['Streamlit', 'Python', 'Pandas', 'DashBoard'],
      github: 'https://github.com/JeimeenChaudhari/BMS_dashboard',
      live: 'https://bms-dashboardflow.streamlit.app/'
    },
    {
      title: 'Cell System',
      description: 'An advanced battery cell management system designed to optimize performance, enhance safety, and extend the lifespan of battery cells through intelligent monitoring and control mechanisms.',
      image: projectsBg,
      technologies: ['Streamlit', 'Python', 'Pandas', 'Plotly'],
      github: 'https://github.com/JeimeenChaudhari/CellSystem',
      live: 'https://cellsystem.streamlit.app/'
    },
    {
      title: 'Fraud-detction Straemlit Machine Learning',
      description: 'Made Project Of Unified Mentor For Internship,A Streamlit app that utilizes machine learning algorithms to detect fraudulent activities in financial transactions, providing users with real-time analysis and insights.',
      image: projectsBg,
      technologies: ['Streamlit', 'Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Machine Learning'],
      github: 'https://github.com/JeimeenChaudhari/fraud_detection-UMP1',
      live: 'https://fraud-detection-ump1.streamlit.app/'
    },
    {
      title: 'Heart Disease Predictio Sttreamlit App',
      description: 'Made Project Of Unified Mentor For Internship,A Streamlit app that utilizes machine learning algorithms to detect fraudulent activities in financial transactions, providing users with real-time analysis and insights.',
      image: projectsBg,
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Lung Cancer Prediction Streamlit App',
      description: 'Made Project Of Unified Mentor For Internship,A Streamlit app that utilizes machine learning algorithms to detect fraudulent activities in financial transactions, providing users with real-time analysis and insights.',
      image: projectsBg,
      technologies: ['Streamlit', 'Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Machine Learning'],
      github: 'https://github.com/JeimeenChaudhari/fraud_detection-UMP1',
      live: 'https://fraud-detection-ump1.streamlit.app/'
    },
    {
      title: 'Mobile Phone Price Prediction Streamlit App',
      description: 'Made Project Of Unified Mentor FFor Internship,A Streamlit app that utilizes machine learning algorithms to detect fraudulent activities in financial transactions, providing users with real-time analysis and insights.',
      image: projectsBg,
      technologies: ['Streamlit', 'Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Machine Learning'],
      github: 'https://github.com/JeimeenChaudhari/fraud_detection-UMP1',
      live: 'https://fraud-detection-ump1.streamlit.app/'
    },

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
              className={`glass rounded-xl overflow-hidden hover-lift hover-glow ${project.featured ? 'md:grid-cols-2' : ''
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