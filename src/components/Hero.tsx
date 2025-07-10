import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-padding mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-600">Matt</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Software Developer & Problem Solver
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I build elegant, scalable solutions that make a difference. 
            Passionate about clean code, user experience, and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:matt@example.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about">
              <ArrowDown size={24} className="text-primary-600 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero