import React, { useState } from 'react';
import { Github, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectModal } from '@/components/ProjectModal';
import type { Project } from '@/types';

export const Projects: React.FC = () => {
  const { texts } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Sort projects by date descending (newest first)
  const sortedProjects = [...texts.PROJECTS].sort((a, b) => {
    return (b.date || "").localeCompare(a.date || "");
  });

  return (
    <section className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-mono font-bold text-gray-900 dark:text-white mb-16 text-center border-b border-blue-400 pb-4">
          {texts.PROJECTS_TEXTS.title}
        </h2>

        {/* Central Line - Hidden on small screens, visible on md+ */}
        <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-0.5 bg-blue-400/30 hidden md:block transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {sortedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10 transform -translate-x-1/2 hidden md:block"></div>

                {/* Date (Desktop) - Opposite side of card */}
                <div className={`hidden md:block w-5/12 text-center ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-flex items-center justify-center space-x-2 bg-blue-900/20 px-4 py-2 rounded-full border border-blue-500/30">
                    <Calendar size={16} className="text-blue-400" />
                    <span className="font-mono text-blue-400 font-bold">{project.date}</span>
                  </div>
                </div>

                {/* Project Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  {/* Mobile Date & Line */}
                  <div className="md:hidden flex items-center mb-4 space-x-4">
                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                     <span className="font-mono text-blue-400 font-bold">{project.date}</span>
                  </div>
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-blue-400/30 md:hidden"></div>

                  <div className="border border-green-600/50 dark:border-green-500/50 bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-green-900/20 dark:to-blue-900/10 p-6 hover:border-blue-400/70 transition-all duration-300 group flex flex-col relative z-0">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-mono font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className={`px-2 py-1 text-xs font-mono whitespace-nowrap ${project.status === 'FILLED' || project.status === 'COMPLETADO'
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 border border-green-600/50 dark:border-green-500/50'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 border border-yellow-600/50 dark:border-yellow-500/50'
                        }`}>
                        {project.status}
                      </div>
                    </div>

                    <div className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-4">
                      {project.tech}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm font-mono leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex space-x-3 mt-auto">
                      <button onClick={() => openModal(project)} className="flex-1 py-2 border border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 font-mono text-sm hover:bg-green-400/10 transition-all text-center">
                        {texts.PROJECTS_TEXTS.seeProject}
                      </button>
                      {project.liveDemoUrl && (
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-400/10 transition-all">
                          <Globe size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-400/10 transition-all">
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};