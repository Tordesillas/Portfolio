import React, { useState } from 'react';
import PhoneCarrousel from '../atoms/PhoneCarrousel.tsx';
import SectionTitle from '../atoms/SectionTitle.tsx';
import CALogo from '../../assets/images/ca.png';
import ComputerCarrousel from '../atoms/ComputerCarrousel.tsx';
import CCExpertLogo from '../../assets/images/ccexpert.png';
import CrewExpanseLogo from '../../assets/images/crewexpanse.png';
import ExaMedLogo from '../../assets/images/examed.png';
import LudasLogo from '../../assets/images/ludas.png';
import './ProjectsSection.css';

interface Project {
    name: string;
    date: string;
    img: string;
    des: string;
}

export default function ProjectsSection(): React.ReactElement {
    const mobileProjects: Project[] = [
        {
            name: 'ExaMed',
            date: '2019-2023',
            img: ExaMedLogo,
            des: "Simulateur du Jumeau numérique d'un patient pour personnaliser au mieux sa prise de médicaments."
        },
        {
            name: 'CCExpert',
            date: '2017-2023',
            img: CCExpertLogo,
            des: 'Application compagnon pour les joueurs du jeu mobile Castle Clash sous Android avec plus de 35k téléchargements sur le Play Store.'
        },
        {
            name: 'CrewExpanse',
            date: '2022-2023',
            img: CrewExpanseLogo,
            des: 'Application compagnon du jeu de société The Crew, développée en React Native.'
        },
        { name: '?', date: '2023-...', img: CALogo, des: '?' }
    ];

    const webProjects: Project[] = [
        {
            name: 'ExaMed Pro v2',
            date: '2022-2024',
            img: ExaMedLogo,
            des: "Simulateur du Jumeau numérique d'un patient pour personnaliser au mieux sa prise de médicaments, destiné aux professionnels de santé."
        },
        {
            name: 'Ludas',
            date: '2019-2023',
            img: LudasLogo,
            des: 'Jeu vidéo reproduisant les règles du jeu de société Ludo.'
        }
    ];

    const [selectedMobileProject, setSelectedMobileProject] = useState<string>('');
    const [selectedWebProject, setSelectedWebProject] = useState<string>('');

    return (
        <>
            <SectionTitle counter={3} text="Mes projets" />

            <section>
                <div className="phone-projects-container">
                    <PhoneCarrousel project={selectedMobileProject} />

                    <div className="phone-projects">
                        {mobileProjects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                {...project}
                                onIconClicked={() => setSelectedMobileProject(project.name)}
                            />
                        ))}
                    </div>
                </div>

                <div className="web-projects-container">
                    <ComputerCarrousel project={selectedWebProject} />

                    <div className="web-projects">
                        {webProjects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                {...project}
                                onIconClicked={() => setSelectedWebProject(project.name)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

interface ProjectCardProps extends Project {
    onIconClicked: () => void;
}

export function ProjectCard({ name, date, img, des, onIconClicked }: ProjectCardProps): React.ReactElement {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <img src={img} alt={`${name} logo`} onClick={onIconClicked} />
                <h3>
                    {name}
                    {'\n'}({date})
                </h3>
            </div>

            <p className="project-description">{des}</p>
        </div>
    );
}
