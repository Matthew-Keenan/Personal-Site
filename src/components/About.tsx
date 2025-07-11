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
                  I come from a computer science background and have spent the last few years growing as a developer
                   - contributing to projects including front-end app modernizations using technologies such as 
                   Angular and Node.js, as well as supporting the migration of existing applications to updated 
                   UI design systems.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                I’ve developed a strong interest in both the engineering and product sides of building software. 
                I care about understanding user needs, asking the right questions, and working across teams to deliver 
                thoughtful solutions. Writing code that makes sense - to me and to other developers - is very important, 
                but I also like stepping back to see the bigger picture and help shape the “why” behind the work.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Outside of work, I enjoy spending time with friends and family, traveling, and following Boston sports.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-black">Education</h4>
                  <p className="text-gray-600">BS in Computer Science</p>
                  <p className="text-sm text-gray-500">Syracuse University</p>
                  <p className="text-xs text-gray-500">College of Engineering and Computer Science</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-black">Location</h4>
                  <p className="text-gray-600">Boston, MA</p>
                  <p className="text-sm text-gray-500">Open to opportunities in NYC or remote</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-black">Interests</h4>
                  <p className="text-gray-600">Angular, Next.js, Node.js, Frontend Development</p>
                  <p className="text-sm text-gray-500">Always open to learning new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About