import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Users, Download, FileText } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful interfaces with attention to detail and user experience.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and smooth user interactions.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams and stakeholders.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/20" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-fancy font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Jony, a Computer Engineering student focused on AI/ML. I build smart, strategic solutions backed by strong logic,
             a gamer’s mindset, and a love for solving complex problems. Always learning, always building — with code and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-fancy font-bold text-foreground">
              Crafting Digital Experiences
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When I’m not writing code or building something cool, you’ll find me thinking like a gamer — strategizing, breaking down problems, and leveling up in real life. I love solving complex challenges with a mix of creativity and logic. Whether it's leading a team or exploring a new idea, I bring energy, overthinking (the good kind), and focus to everything I do.


            </p>
            <p className="text-muted-foreground leading-relaxed">
              I’m currently learning and growing every day, building projects that combine clean design with intelligent systems — all with the goal of becoming a skilled AI/ML Engineer..
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Work Together
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume.pdf"
                download="Resume.pdf"
                className="btn-secondary flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 glass rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FileText size={24} className="text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Resume Highlights</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Experience:</strong> AI/ML Course by Google
                </div>
                <div>
                  <strong className="text-foreground">Education:</strong> B.E. in Computer Engineering
                </div>
                <div>
                  <strong className="text-foreground">Specialization:</strong> N8n, AI/ML
                </div>
                <div>
                  <strong className="text-foreground">Languages:</strong> Java, Python, c 
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="p-6 glass rounded-xl hover-lift hover-glow group"
              >
                <feature.icon 
                  size={32} 
                  className="text-primary mb-4 group-hover:text-accent transition-colors duration-300" 
                />
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;