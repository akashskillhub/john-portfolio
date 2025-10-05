import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiLayers,
  FiZap
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const Home = () => {
  const features = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Crafting pixel-perfect, responsive user interfaces with React, Next.js, TypeScript, and Tailwind CSS. Focus on performance, accessibility, and modern design principles.',
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      description: 'Building scalable RESTful APIs and microservices with Node.js, Express, and GraphQL. Expertise in authentication, authorization, and server-side optimization.',
    },
    {
      icon: FiDatabase,
      title: 'Database Architecture',
      description: 'Designing and implementing efficient database solutions with MongoDB, PostgreSQL, and Redis. Skilled in data modeling, optimization, and migration strategies.',
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Creating mobile-first, fully responsive applications that deliver exceptional user experiences across all devices and screen sizes.',
    },
    {
      icon: FiLayers,
      title: 'Full-Stack Integration',
      description: 'Seamlessly connecting frontend and backend systems with clean architecture, state management, and efficient data flow patterns.',
    },
    {
      icon: FiZap,
      title: 'Performance Optimization',
      description: 'Implementing best practices for code splitting, lazy loading, caching strategies, and monitoring to ensure lightning-fast applications.',
    },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                👋 Welcome to my portfolio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Hi, I'm{' '}
                <span className="text-primary">John Doe</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Full-Stack Developer specializing in MERN Stack
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8"
              >
                I build modern, scalable web applications with cutting-edge technologies.
                Passionate about clean code, user experience, and solving complex problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/projects">
                  <Button size="lg" className="group">
                    View My Work
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10"></div>

                {/* Profile Image */}
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=faces"
                  alt="John Doe - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg">
                    <p className="text-sm md:text-base font-semibold">Full-Stack Developer</p>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl z-0"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl z-0"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="text-primary">Do</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I specialize in building high-performance, scalable web applications from concept to deployment.
              With expertise across the full stack, I transform ideas into powerful digital solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Start a Conversation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
