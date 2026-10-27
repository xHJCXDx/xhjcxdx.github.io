import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectModal } from '@/components/ProjectModal';
import type { Project } from '@/types';

export const Projects: React.FC = () => {
  const { texts } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sortedProjects = [...texts.PROJECTS].sort((a, b) => {
    return (b.date || "").localeCompare(a.date || "");
  });

  return (
    <section className="min-h-screen py-30 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl font-normal text-charcoal dark:text-warm-gray mb-16">
          {texts.PROJECTS_TEXTS.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative border border-gray-200 dark:border-gray-800 aspect-[4/3] flex items-center justify-center text-left overflow-hidden transition-colors duration-300 hover:border-gray-400 dark:hover:border-gray-600"
            >
              {/* Project name centered */}
              <h3 className="font-serif text-2xl text-charcoal dark:text-warm-gray px-6 text-center">
                {project.title}
              </h3>

              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 dark:bg-off-black/95 border-t border-gray-200 dark:border-gray-800 p-6">
                <h4 className="font-serif text-lg text-charcoal dark:text-warm-gray mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-wc line-clamp-2 mb-3">
                  {project.description}
                </p>
                <span className="text-sm text-accent">
                  {texts.PROJECTS_TEXTS.seeProject} &rarr;
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
