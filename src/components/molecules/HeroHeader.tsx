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
                    <span className="avatar-shape" />
                </div>
                <span className="white-line" />
            </div>

            <div className="contact-buttons-container">
                <a className="contact-button" href="mailto:gcasagrande2812@gmail.com" title="Envoyer un mail">
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
                <div className="job-impact-rotated">
                    <p>Ingénieur en informatique, spécialisé en UX/UI - Lead front-end développeur</p>
                </div>
            </div>
        </section>
    );
}
