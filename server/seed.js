const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Skill = require('./models/Skill');
const Project = require('./models/Project');
const Admin = require('./models/Admin');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

const skills = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 95, order: 1 },
  { name: 'Next.js', category: 'frontend', proficiency: 90, order: 2 },
  { name: 'JavaScript', category: 'frontend', proficiency: 95, order: 3 },
  { name: 'TypeScript', category: 'frontend', proficiency: 85, order: 4 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, order: 5 },
  { name: 'Redux', category: 'frontend', proficiency: 85, order: 6 },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 90, order: 1 },
  { name: 'Express', category: 'backend', proficiency: 90, order: 2 },
  { name: 'REST APIs', category: 'backend', proficiency: 95, order: 3 },
  { name: 'GraphQL', category: 'backend', proficiency: 75, order: 4 },

  // Database
  { name: 'MongoDB', category: 'database', proficiency: 85, order: 1 },
  { name: 'PostgreSQL', category: 'database', proficiency: 80, order: 2 },
  { name: 'Redis', category: 'database', proficiency: 75, order: 3 },

  // Tools
  { name: 'Git', category: 'tools', proficiency: 90, order: 1 },
  { name: 'Docker', category: 'tools', proficiency: 75, order: 2 },
  { name: 'VS Code', category: 'tools', proficiency: 95, order: 3 },
  { name: 'HTML5', category: 'tools', proficiency: 95, order: 4 },
  { name: 'CSS3', category: 'tools', proficiency: 90, order: 5 },
];

const projects = [
  // Add your own projects through the Admin Dashboard at /admin/login
  // No dummy data - this portfolio is ready for your original content
];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('🗑️  Clearing existing data...');
    await Skill.deleteMany({});
    await Project.deleteMany({});
    await Admin.deleteMany({});

    console.log('🌱 Creating admin user...');
    await Admin.create({
      username: 'admin',
      email: 'admin@portfolio.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('✅ Admin user created');
    console.log('📧 Email: admin@portfolio.com');
    console.log('🔑 Password: admin123');

    console.log('🌱 Seeding skills...');
    await Skill.insertMany(skills);
    console.log(`✅ ${skills.length} skills created`);

    console.log('🌱 Seeding projects...');
    await Project.insertMany(projects);
    console.log(`✅ ${projects.length} projects created`);

    console.log('\n✅ Database seeded successfully!');
    console.log('🚀 Login at: http://localhost:5173/admin/login');
    console.log('📧 Email: admin@portfolio.com');
    console.log('🔑 Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seedDatabase();
