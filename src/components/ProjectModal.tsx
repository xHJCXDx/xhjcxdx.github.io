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
    <div className="fixed inset-0 bg-black/75 flex justify-center z-50 p-4 overflow-y-auto py-20" onClick={onClose}>
      <div className="bg-white dark:bg-black dark:from-green-900/80 dark:to-blue-900/30 border border-green-600/50 dark:border-green-500/50 p-8 rounded-lg max-w-3xl w-full relative text-gray-900 dark:text-white font-mono h-min shadow-xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{project.title}</h2>

        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
            {project.longDescription || project.description}
          </p>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl text-green-600 dark:text-green-400 mb-4">{texts.PROJECT_MODAL_TEXTS.screenshots}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto rounded-md border-2 border-green-600/30 dark:border-green-500/30" />
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl text-green-600 dark:text-green-400 mb-2">{texts.PROJECT_MODAL_TEXTS.technologies}</h3>
          <p className="text-blue-600 dark:text-blue-400">{project.tech}</p>
        </div>

        {(project.liveDemoUrl || project.githubUrl) && (
          <div className="flex space-x-4 mt-8">
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 border border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-400/10 transition-all text-center">
                {texts.PROJECT_MODAL_TEXTS.liveDemo}
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-400/10 transition-all text-center flex justify-center items-center gap-2">
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
