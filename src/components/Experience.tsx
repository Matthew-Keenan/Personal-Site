const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Frontend Developer',
    period: '2022 - Present',
    description: [
      'Developed and maintained scalable web applications using React and Next.js.',
      'Collaborated with designers to create responsive, user-friendly interfaces.',
      'Optimized application performance and accessibility.',
    ],
  },
  {
    company: 'Innovatech Labs',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Built RESTful APIs with Node.js and Express.',
      'Integrated third-party services and APIs.',
      'Worked closely with cross-functional teams to deliver projects on time.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-primary-700">{exp.role}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800">{exp.company}</span>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience