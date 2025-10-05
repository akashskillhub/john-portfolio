import { motion } from 'framer-motion';
import { useGetSkillsGroupedQuery } from '@/features/api/skillsApi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiSettings } from 'react-icons/fi';

const Skills = () => {
  const { data, isLoading, isError } = useGetSkillsGroupedQuery();

  const iconMap = {
    React: SiReact,
    'Node.js': SiNodedotjs,
    MongoDB: SiMongodb,
    Express: SiExpress,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    Redux: SiRedux,
    'Next.js': SiNextdotjs,
    PostgreSQL: SiPostgresql,
    Redis: SiRedis,
    Docker: SiDocker,
    Git: SiGit,
    'VS Code': FiCode,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    'REST APIs': FiDatabase,
    GraphQL: FiDatabase,
  };

  const defaultSkills = {
    frontend: [
      { name: 'React', icon: 'React', proficiency: 95 },
      { name: 'Next.js', icon: 'Next.js', proficiency: 90 },
      { name: 'JavaScript', icon: 'JavaScript', proficiency: 95 },
      { name: 'TypeScript', icon: 'TypeScript', proficiency: 85 },
      { name: 'Tailwind CSS', icon: 'Tailwind CSS', proficiency: 90 },
      { name: 'Redux', icon: 'Redux', proficiency: 85 },
    ],
    backend: [
      { name: 'Node.js', icon: 'Node.js', proficiency: 90 },
      { name: 'Express', icon: 'Express', proficiency: 90 },
      { name: 'MongoDB', icon: 'MongoDB', proficiency: 85 },
      { name: 'PostgreSQL', icon: 'PostgreSQL', proficiency: 80 },
      { name: 'Redis', icon: 'Redis', proficiency: 75 },
    ],
    tools: [
      { name: 'Git', icon: 'Git', proficiency: 90 },
      { name: 'Docker', icon: 'Docker', proficiency: 75 },
      { name: 'VS Code', icon: 'VS Code', proficiency: 95 },
      { name: 'HTML5', icon: 'HTML5', proficiency: 95 },
      { name: 'CSS3', icon: 'CSS3', proficiency: 90 },
    ],
  };

  const skillsData = isLoading || isError ? defaultSkills : data?.data || defaultSkills;

  // Category order and names
  const categoryOrder = ['frontend', 'backend', 'database', 'tools'];
  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Databases',
    tools: 'Tools & Others',
  };

  // Sort categories by order
  const sortedCategories = Object.entries(skillsData).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a[0]);
    const indexB = categoryOrder.indexOf(b[0]);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  const getCategoryIcon = (category) => {
    const icons = {
      frontend: SiReact,
      backend: SiNodedotjs,
      database: SiMongodb,
      tools: SiGit,
    };
    return icons[category] || SiReact;
  };

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
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {sortedCategories.map(([category, skills], categoryIndex) => {
            const CategoryIcon = getCategoryIcon(category);

            // Ensure skills is always an array
            const skillsList = Array.isArray(skills) ? skills : [];

            if (skillsList.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CategoryIcon className="w-5 h-5 text-primary" />
                      </div>
                      {categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {skillsList.map((skill, index) => {
                        // Use skill name to find icon, fallback to FiCode
                        const SkillIcon = iconMap[skill.name] || FiCode;
                        return (
                          <motion.div
                            key={skill._id || skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <SkillIcon className="w-8 h-8 text-primary" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <div className="relative h-2 bg-background rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.proficiency || 80}%` }}
                                transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground mt-1 text-right">
                              {skill.proficiency || 80}%
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg text-muted-foreground">
                I'm constantly exploring new technologies and improving my skills to stay up-to-date
                with the latest trends in web development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
