const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    name: 'Task Manager App',
    description: 'A full-stack task management app with authentication and real-time updates.',
    link: 'https://github.com/yourusername/task-manager',
  },
  {
    name: 'E-commerce Store',
    description: 'A scalable e-commerce platform with Stripe integration and admin dashboard.',
    link: 'https://github.com/yourusername/ecommerce-store',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-700">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline font-medium"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects