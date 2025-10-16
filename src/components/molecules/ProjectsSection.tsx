import React, { useRef, useState } from 'react';
import Carrousel from '../atoms/Carrousel.tsx';
import ProjectCard from '../atoms/ProjectCard.tsx';
import SectionTitle from '../atoms/SectionTitle.tsx';
import CALogo from '../../assets/images/ca.png';
import CCExpertLogo from '../../assets/images/ccexpert.png';
import CrewExpanseLogo from '../../assets/images/crewexpanse.png';
import ExaMedLogo from '../../assets/images/examed.png';
import LudasLogo from '../../assets/images/ludas.png';
import { Project } from '../../models';
import './ProjectsSection.css';

export default function ProjectsSection(): React.ReactElement {
    const mobileProjects: Project[] = [
        {
            name: 'ExaMed',
            date: '2019-2023',
            img: ExaMedLogo,
            imgPath: 'examed',
            imgQuantity: 5,
            des: "Simulateur du Jumeau numérique d'un patient pour personnaliser au mieux sa prise de médicaments."
        },
        {
            name: 'CCExpert',
            date: '2017-2023',
            img: CCExpertLogo,
            imgPath: 'ccexpert',
            imgQuantity: 5,
            link: 'https://play.google.com/store/apps/details?id=fr.tordesillas.ccexpert',
            des: 'Application compagnon pour les joueurs du jeu mobile Castle Clash sous Android avec plus de 35k téléchargements sur le Play Store.'
        },
        {
            name: 'CrewExpanse',
            date: '2022-2023',
            img: CrewExpanseLogo,
            imgPath: 'crewexpanse',
            imgQuantity: 4,
            link: 'https://play.google.com/store/apps/details?id=fr.tordesillas.crewexpanse',
            des: 'Application compagnon du jeu de société The Crew, développée en React Native.'
        },
        {
            name: '?',
            date: '2023-...',
            img: CALogo,
            imgPath: 'ca',
            imgQuantity: 2,
            des: 'En cours...'
        }
    ];

    const webProjects: Project[] = [
        {
            name: 'ExaMed Pro v2',
            date: '2022-2024',
            img: ExaMedLogo,
            imgPath: 'examedpro',
            imgQuantity: 6,
            des: "Simulateur du Jumeau numérique d'un patient pour personnaliser au mieux sa prise de médicaments, destiné aux professionnels de santé."
        },
        {
            name: 'Ludas',
            date: '2019-2023',
            img: LudasLogo,
            imgPath: 'ludas',
            imgQuantity: 2,
            link: 'https://tordesillas.github.io/Ludas/',
            des: 'Jeu vidéo reproduisant les règles du jeu de société Ludo.'
        }
    ];

    const [selectedMobileProject, setSelectedMobileProject] = useState<Project | undefined>();
    const [selectedWebProject, setSelectedWebProject] = useState<Project | undefined>();

    const phoneCarrouselRef = useRef<HTMLDivElement>(null);
    const webCarrouselRef = useRef<HTMLDivElement>(null);

    const selectProject = (project: Project, isMobile?: boolean) => {
        const carrouselRef = isMobile ? phoneCarrouselRef.current : webCarrouselRef.current;
        if (carrouselRef) {
            carrouselRef.classList.add('chevron-fade-in');

            setTimeout(() => {
                carrouselRef.classList.remove('chevron-fade-in');
            }, 1400);
        }

        if (isMobile) {
            setSelectedMobileProject(project);
        } else {
            setSelectedWebProject(project);
        }
    };

    return (
        <>
            <SectionTitle counter={3} text="Mes projets" />

            <section>
                <div className="phone-projects-container">
                    <Carrousel ref={phoneCarrouselRef} project={selectedMobileProject} isMobile />

                    <div className="phone-projects">
                        {mobileProjects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                onIconClicked={() => selectProject(project, true)}
                            />
                        ))}
                    </div>
                </div>

                <div className="web-projects-container">
                    <Carrousel ref={webCarrouselRef} project={selectedWebProject} />

                    <div className="web-projects">
                        {webProjects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                                onIconClicked={() => selectProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
