import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer Award 2023',
      description: 'Recognized for outstanding performance and innovative solutions at TechCorp',
      year: '2023',
      category: 'Professional'
    },
    {
      icon: Award,
      title: 'Open Source Contributor',
      description: 'Contributed to 50+ open source projects with 10K+ GitHub stars',
      year: '2022-2024',
      category: 'Community'
    },
    {
      icon: Star,
      title: 'Top 1% Developer on StackOverflow',
      description: 'Achieved top 1% ranking with 25K+ reputation points',
      year: '2023',
      category: 'Community'
    },
    {
      icon: Target,
      title: 'Certified Solutions Architect',
      description: 'AWS Solutions Architect Professional certification',
      year: '2023',
      category: 'Certification'
    },
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      description: 'First place in Global AI Hackathon with innovative ML solution',
      year: '2022',
      category: 'Competition'
    },
    {
      icon: Award,
      title: 'Tech Speaker',
      description: 'Delivered 15+ talks at international conferences and meetups',
      year: '2021-2024',
      category: 'Speaking'
    }
  ];

  const categories = ['All', 'Professional', 'Community', 'Certification', 'Competition', 'Speaking'];

  return (
    <section id="achievements" className="section-padding bg-muted/10" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-fancy font-bold mb-6">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition and milestones that mark my journey in the tech industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover-lift hover-glow group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon 
                    size={24} 
                    className="text-primary" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="font-fancy text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass rounded-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-fancy font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-fancy font-bold text-primary mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-fancy font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Conference Talks</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-fancy font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;