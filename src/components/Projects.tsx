const projects = [
  {
    name: 'Personal Portfolio (This Site)',
    description: 'A modern, professional, website built with Next.js and Tailwind CSS. I’m using tools like Cursor and Claude to deepen my understanding of AI-assisted development and to thoughtfully explore new technology as part of my learning process.',
    link: 'https://github.com/Matthew-Keenan/portfolio',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline font-medium"
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