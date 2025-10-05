import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { useGetProjectsQuery } from '@/features/api/projectsApi';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { data, isLoading, isError } = useGetProjectsQuery({
    category: selectedCategory === 'all' ? undefined : selectedCategory,
  });

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'mobile', label: 'Mobile' },
  ];

  const defaultProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with MERN stack, featuring user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      _id: '2',
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with beautiful charts and data visualization using React and Chart.js.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      _id: '3',
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, authorization, and CRUD operations. Built with Node.js and MongoDB.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      githubUrl: 'https://github.com',
    },
    {
      _id: '4',
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, built with React and integrated with weather APIs.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500',
      technologies: ['React', 'API Integration', 'CSS3'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      _id: '5',
      title: 'Blog Platform',
      description: 'Full-stack blog platform with rich text editor, comments, likes, and user profiles. Built with Next.js and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      _id: '6',
      title: 'Real-time Chat App',
      description: 'Real-time chat application with Socket.io, supporting group chats, direct messages, and file sharing.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  const projects = isLoading || isError ? defaultProjects : data?.data || defaultProjects;
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <FiFilter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      {project.category}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <FiGithub className="mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full">
                          <FiExternalLink className="mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
