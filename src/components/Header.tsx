import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: isHomePage ? '#home' : '/', isRoute: !isHomePage },
    { name: 'About', href: isHomePage ? '#about' : '/#about', isRoute: !isHomePage },
    { name: 'Skills', href: isHomePage ? '#skills' : '/#skills', isRoute: !isHomePage },
    { name: 'Projects', href: '/projects', isRoute: true },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', isRoute: !isHomePage },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      // Let React Router handle route navigation
      setIsMenuOpen(false);
    } else {
      // Handle smooth scroll for hash links
      const element = document.querySelector(item.href.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container-max flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-gradient">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.button>
            )
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass md:hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    whileHover={{ x: 10 }}
                    className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </motion.button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;