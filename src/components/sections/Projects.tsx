import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { PROJECTS, PROJECTS_TEXTS } from '@/constants/data';
import { ProjectModal } from '@/components/ProjectModal'; // Corrected, direct import
import type { Project } from '@/types';

export const Projects: React.FC = () => {
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
                <h2 className="text-4xl font-mono font-bold text-white mb-12 text-center border-b border-cyan-400 pb-4">
                    {PROJECTS_TEXTS.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="border border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-cyan-900/10 p-6 hover:border-cyan-400/70 transition-all duration-300 group flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className={`px-2 py-1 text-xs font-mono ${
                                    project.status === 'FILLED' 
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                                }`}>
                                    {project.status}
                                </div>
                            </div>
                            
                            <div className="text-sm font-mono text-cyan-400 mb-4">
                                {project.tech}
                            </div>
                            
                            <p className="text-gray-300 text-sm font-mono leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>
                            
                            <div className="flex space-x-3 mt-auto">
                                <button onClick={() => openModal(project)} className="flex-1 py-2 border border-purple-400 text-purple-400 font-mono text-sm hover:bg-purple-400/10 transition-all text-center">
                                    {PROJECTS_TEXTS.seeProject}
                                </button>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all">
                                    <Github size={16} />
                                </a>
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