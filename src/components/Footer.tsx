import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container-max px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">Portfolio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <motion.a
                href="mailto:alex@example.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={16} />
                <span>jeimeen3001@gmail.com</span>
              </motion.a>
              <div className="flex space-x-4 pt-2">
                {[
                  { icon: Github, href: 'https://github.com/JeimeenChaudhari', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/jeimeen-chaudhari-3a680028b/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://www.instagram.com/jeimeen_editzzz/', label: 'Instagram' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass rounded-lg hover:bg-primary/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} className="text-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border"
        >
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Jeimeen Chaudhari</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;