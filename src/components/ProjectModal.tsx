import React from 'react';
import { X, Github } from 'lucide-react';
import type { Project } from '@/types';
import { PROJECT_MODAL_TEXTS } from '@/constants/data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center z-50 p-4 overflow-y-auto py-20" onClick={onClose}>
      <div className="bg-gradient-to-br from-purple-900/80 to-cyan-900/30 border border-purple-500/50 p-8 rounded-lg max-w-3xl w-full relative text-white font-mono h-min" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">{project.title}</h2>
        
        <div className="mb-6">
          <p className="text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
            {project.longDescription || project.description}
          </p>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl text-purple-400 mb-4">{PROJECT_MODAL_TEXTS.screenshots}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-auto rounded-md border-2 border-purple-500/30" />
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
            <h3 className="text-xl text-purple-400 mb-2">{PROJECT_MODAL_TEXTS.technologies}</h3>
            <p className="text-cyan-400">{project.tech}</p>
        </div>

        <div className="flex space-x-4 mt-8">
          {project.liveDemoUrl && (
            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all text-center">
              {PROJECT_MODAL_TEXTS.liveDemo}
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all text-center flex justify-center items-center gap-2">
            <Github size={16} />
            <span>{PROJECT_MODAL_TEXTS.viewCode}</span>
          </a>
        </div>
      </div>
    </div>
  );
};