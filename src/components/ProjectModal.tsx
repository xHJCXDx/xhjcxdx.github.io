import React from 'react';
import { X, Github } from 'lucide-react';
import type { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { texts } = useLanguage();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-off-black overflow-y-auto" onClick={onClose}>
      <div className="max-w-2xl mx-auto px-6 py-20" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="fixed top-6 right-6 text-muted-wc hover:text-charcoal dark:hover:text-warm-gray transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="font-serif text-4xl font-normal text-charcoal dark:text-warm-gray mb-6">
          {project.title}
        </h2>

        <p className="text-charcoal dark:text-warm-gray leading-relaxed mb-8" style={{ whiteSpace: 'pre-line' }}>
          {project.longDescription || project.description}
        </p>

        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto border border-gray-200 dark:border-gray-800"
                />
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-muted-wc mb-2">
            {texts.PROJECT_MODAL_TEXTS.technologies}
          </h3>
          <p className="text-charcoal dark:text-warm-gray">{project.tech}</p>
        </div>

        {(project.liveDemoUrl || project.githubUrl) && (
          <div className="flex gap-6 mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent border-b border-accent hover:opacity-70 transition-opacity"
              >
                {texts.PROJECT_MODAL_TEXTS.liveDemo}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent border-b border-accent hover:opacity-70 transition-opacity flex items-center gap-2"
              >
                <Github size={16} />
                <span>{texts.PROJECT_MODAL_TEXTS.viewCode}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
