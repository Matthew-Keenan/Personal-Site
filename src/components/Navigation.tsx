'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  function handleNavigationClick(e: React.MouseEvent<HTMLAnchorElement>, section: string){
    e.preventDefault();
    const id = section.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container-padding mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-black">Matt Keenan</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => { handleNavigationClick(e, item.href)}}
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={e => { handleNavigationClick(e, item.href); setIsOpen(false) }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation