import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: 'AI/ML Skills',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Machine Learning (in progress)', level: 90 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'pandas', level: 92 },
        { name: 'NumPy', level:89  },
        { name: 'ChatGPT / AI APIs (for projects and experimentation)', level: 85 }
      ]
    },
    {
      title: 'WebDev Skills',
      skills: [
        { name: 'Html5', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Java Script', level: 75 },
        { name: 'Type Script', level: 70 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'Vite', level: 82 },
        { name: 'Responsive UI Design', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'N8N', level: 78 },
        { name: 'Vercel', level: 75 },
        { name: 'Figma', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Critical Thinking', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Decision Making', level: 99 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-xl hover-lift"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Vs Code','Python', 'Numpy', 'Scikit-learn','Pytorch','TensorFlow', 'Seaborn', 'Tailwind', 'MongoDB',
              'N8n', 'Git & GitHub', 'Vercel', 'Figma', 'AWS', 'Docker','Jupyter Notebooks','OpenAI GPT Models','Gemini',
              'Canva','Perplexity','Google Colab', 'Wondershare Filmora', 'Hostinger' , 'Hugging Face'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 glass rounded-lg text-center hover-glow"
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;