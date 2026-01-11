import React, { useState } from 'react';
import { Github, Globe } from 'lucide-react';
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

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-mono font-bold text-gray-900 dark:text-white mb-12 text-center border-b border-blue-400 pb-4">
          {texts.PROJECTS_TEXTS.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {texts.PROJECTS.map((project, index) => (
            <div key={index} className="border border-green-600/50 dark:border-green-500/50 bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-green-900/20 dark:to-blue-900/10 p-6 hover:border-blue-400/70 transition-all duration-300 group flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-mono font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className={`px-2 py-1 text-xs font-mono ${project.status === 'FILLED' || project.status === 'COMPLETADO'
                  ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 border border-green-600/50 dark:border-green-500/50'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 border border-yellow-600/50 dark:border-yellow-500/50'
                  }`}>
                  {project.status}
                </div>
              </div>

              <div className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-4">
                {project.tech}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm font-mono leading-relaxed mb-6 flex-grow">
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
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};
