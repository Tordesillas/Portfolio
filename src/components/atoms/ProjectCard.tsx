import React from 'react';
import { World } from '../icons';
import { Project } from '../../models';
import './ProjectCard.css';

interface Props {
    project: Project;
    onIconClicked: () => void;
}

export default function ProjectCard({ project, onIconClicked }: Props): React.ReactElement {
    const { name, date, img, link, des } = project;

    return (
        <div className="project-card">
            <img src={img} alt={`${name} logo`} onClick={onIconClicked} />

            <div className="project-card-content">
                <h3>
                    {name}
                    {'\n'}({date})
                </h3>
                <p className="project-description">{des}</p>
            </div>

            {link && (
                <a
                    className="project-link"
                    href={link}
                    title={`Se rendre sur la page du projet ${name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <World />
                </a>
            )}
        </div>
    );
}
