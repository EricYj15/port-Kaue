import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Sistema de Gestão', description: 'Aplicação para gerenciamento de tarefas e projetos.' },
  { id: 2, title: 'Aplicativo Mobile', description: 'Desenvolvimento de aplicativo mobile para controle financeiro.' },
];

const ProjectList = () => {
  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Meus Projetos</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="bg-white shadow-lg p-6 rounded-md hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
