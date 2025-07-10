const About = () => {
    return (
      <section id="about" className="section-padding bg-white">
        <div className="container-padding mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-black">
                  Who I Am
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate software developer with a love for creating meaningful applications 
                  that solve real-world problems. With a background in both frontend and backend development, 
                  I enjoy building full-stack solutions that are both elegant and efficient.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm always excited to take on new challenges and collaborate with teams to build 
                  innovative solutions that make a positive impact.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-black">Education</h4>
                  <p className="text-gray-600">Bachelor's in Computer Science</p>
                  <p className="text-sm text-gray-500">University of Technology</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-black">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                  <p className="text-sm text-gray-500">Open to remote opportunities</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-black">Interests</h4>
                  <p className="text-gray-600">Open Source, AI/ML, Web3, Clean Code</p>
                  <p className="text-sm text-gray-500">Always learning new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About