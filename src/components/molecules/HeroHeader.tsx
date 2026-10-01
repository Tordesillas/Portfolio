import React from 'react';
import { Github, LinkedIn, Mail } from '../icons';
import Me from '../../assets/images/me.png';
import './HeroHeader.css';

export default function HeroHeader(): React.ReactElement {
    return (
        <section id="section0" className="hero-header">
            <h1>
                Guillaume{'\n'}
                Casagrande
            </h1>
            <span className="ellipse-background" />

            <div className="avatar-container">
                <span className="blue-line" />
                <div className="avatar-wrapper">
                    <div className="avatar-background">
                        <img src={Me} alt="Avatar" className="avatar" />
                    </div>

                    <svg className="oblong" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                            <linearGradient id="oblong-grad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0" stopColor="var(--blue-light)" />
                                <stop offset="1" stopColor="var(--white)" />
                            </linearGradient>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            rx="105"
                            fill="none"
                            stroke="url(#oblong-grad)"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                </div>
                <span className="white-line" />
            </div>

            <div className="contact-buttons-container">
                <a className="contact-button" href="mailto:gcasagrande.ux@gmail.com" title="Envoyer un mail">
                    <Mail />
                    <span className="contact-button-background" />
                </a>
                <a
                    className="contact-button"
                    href="https://www.linkedin.com/in/guillaume-casagrande/"
                    title="Se rendre sur le profil LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn />
                    <span className="contact-button-background" />
                </a>
                <a
                    className="contact-button"
                    href="https://github.com/Tordesillas"
                    title="Se rendre sur le profil Github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github />
                    <span className="contact-button-background" />
                </a>
            </div>

            <div className="job-impact-container">
                <div className="job-impact">
                    <p>Ingénieur en informatique, spécialisé en UX/UI - Lead front-end développeur</p>
                </div>
                <div className="job-impact-rotated" aria-hidden="true" role="presentation">
                    <p>Ingénieur en informatique, spécialisé en UX/UI - Lead front-end développeur</p>
                </div>
            </div>
        </section>
    );
}
