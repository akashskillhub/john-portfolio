import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiEdit, FiTrash2, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} from '@/features/api/projectsApi';
import { logout } from '@/features/auth/authSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: projectsData } = useGetProjectsQuery({});
  const [createProject] = useCreateProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    category: 'fullstack',
    githubUrl: '',
    liveUrl: '',
  });

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map((t) => t.trim()),
    };

    try {
      if (editingProject) {
        await updateProject({ id: editingProject._id, ...projectData }).unwrap();
        toast.success('Project updated successfully!');
      } else {
        await createProject(projectData).unwrap();
        toast.success('Project created successfully!');
      }
      setIsModalOpen(false);
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        image: '',
        technologies: '',
        category: 'fullstack',
        githubUrl: '',
        liveUrl: '',
      });
    } catch (error) {
      toast.error(error?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(', '),
      category: project.category,
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id).unwrap();
        toast.success('Project deleted successfully!');
      } catch (error) {
        toast.error(error?.data?.message || 'Delete failed');
      }
    }
  };

  const projects = projectsData?.data || [];

  return (
    <div className="min-h-screen bg-secondary/20 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio projects</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <FiLogOut className="mr-2" />
            Logout
          </Button>
        </div>

        <div className="mb-6">
          <Button onClick={() => setIsModalOpen(true)}>
            <FiPlus className="mr-2" />
            Add New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project._id}>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(project)}>
                    <FiEdit className="mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(project._id)}
                  >
                    <FiTrash2 className="mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <Input
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Technologies (comma-separated)
                    </label>
                    <Input
                      name="technologies"
                      value={formData.technologies}
                      onChange={handleChange}
                      placeholder="React, Node.js, MongoDB"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option value="fullstack">Full Stack</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="mobile">Mobile</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">GitHub URL</label>
                    <Input
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Live URL</label>
                    <Input
                      name="liveUrl"
                      value={formData.liveUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button type="submit" className="flex-1">
                      {editingProject ? 'Update' : 'Create'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsModalOpen(false);
                        setEditingProject(null);
                        setFormData({
                          title: '',
                          description: '',
                          image: '',
                          technologies: '',
                          category: 'fullstack',
                          githubUrl: '',
                          liveUrl: '',
                        });
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
