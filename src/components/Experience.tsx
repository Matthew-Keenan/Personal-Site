const experiences = [
  {
    company: 'Fidelity Investments',
    role: 'Software Engineer',
    period: 'June 2025 - Present',
    description: [
      'Promoted from Associate Software Engineer in recognition of technical contributions and accomplishments',
      'Continuing to contribute to core functionality while taking on greater responsibility in planning and implementation'
    ],
  },
  {
    company: 'Fidelity Investments',
    role: 'Associate Software Engineer',
    period: 'June 2023 - Jun 2025',
    description: [
      'Contributed to the full rewrite of a core UI application from the ground up using Angular + Node.js, resulting in a 689% increase in internal usage and enabling $3.5 billion in customer account funding within the first 3 months',
      'Participated in discussions of re-implementing features of team\’s legacy application in a modern tech stack while also assisting in defining the approach for new UI elements and functionality',
      'Supported migration of existing application to updated UI design system, maintaining core functionality while enhancing UI to match new design specifications',
      'Completed an 18-week front-end development program focused on building modern Angular applications with TypeScript and emphasizing real-world development practices, prior to transitioning to a full-time product team'
    ],
  },
  {
    company: 'Fidelity Investments',
    role: 'Full Stack Developer Intern',
    period: 'June 2022 - August 2022',
    description: [
      'Streamlined third-party API usage in response to updated business requirements, reducing unnecessary requests and contributing to cost savings per call',
      'Improved a Python-based data pipeline by enhancing JSON parsing capabilities, enabling further analytics and more informed internal decision making',
      'Contributed to Agile ceremonies, including sprint planning and backlog refinement, to help improve task prioritization and team productivity'
    ],
  },
  {
    company: 'PTC',
    role: 'Backend Java Developer Intern',
    period: 'June 2021 - August 2021',
    description: [
      'Implemented feature enhancements and bug fixes for a Java-based application',
      'Ensured code reliability through various testing methods, including JUnit unit tests, custom workflows, and manual QA in a local dev environment',
      'Gained practical experience in the full software development lifecycle, working in a large-scale, production codebase with true customer impact',
    ],
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-black">{exp.role}</h3>
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