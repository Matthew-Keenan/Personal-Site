const skills = [
  'Angular',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Agile',
  'Node.js',
  'Nest.js',
  'GraphQL',
  'Next.js',
  'Tailwind CSS',
  'Git & GitHub',
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-white rounded-lg shadow p-4 text-center font-medium text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills