import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
      <div className="container-padding mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Hi, I'm <span className="text-gray-800">Matt</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Software Engineer & Problem Solver
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            I am a product-minded software engineer who is passionate about providing meaningful solutions and a positive user experience. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Matthew-Keenan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-keenan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:matthewk1313@gmail.com"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about">
              <ArrowDown size={24} className="text-black mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero