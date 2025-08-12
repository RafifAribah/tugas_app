"use client"

import { useState } from 'react';

export default function SimpleWebsite() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Todo App",
      description: "Simple task management application",
      tech: "React, Local Storage",
      status: "Completed"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information",
      tech: "Next.js, API Integration",
      status: "In Progress"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio and blog",
      tech: "Next.js, Tailwind CSS",
      status: "Completed"
    }
  ];

  const skills = [
    "JavaScript", "React", "Next.js", "Node.js", 
    "Python", "SQL", "Git", "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-800">
              MyWebsite
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition ${
                    activeSection === section
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Rapip
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Software developer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Hello There!</h3>
                <p className="text-gray-600 mb-4">
                  I'm a passionate full-stack developer with over 3 years of experience 
                  building web applications. I love turning complex problems into simple, 
                  beautiful and intuitive solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or enjoying a good cup of coffee.
                </p>
                <p className="text-gray-600">
                  I believe in writing clean, maintainable code and creating user experiences 
                  that make a difference.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                  <p className="text-gray-600 text-sm">3+ years in web development</p>
                  <p className="text-gray-600 text-sm">5+ projects completed</p>
                  <p className="text-gray-600 text-sm">Always learning something new</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-4">{project.tech}</p>
                  <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition">
                    View Project
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">More projects coming soon...</p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 text-center mb-8">
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">@</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">rapip@example.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">#</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Social</h3>
                  <p className="text-gray-600">@rapip</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-4">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </div>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </div>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert('Message sent! (Demo only)')}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2024 rapip. Built with Next.js.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}