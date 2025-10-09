import React from 'react';
import { Avatar, Github, LinkedIn, Mail } from '../icons';
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
                    <span className="avatar-background" />
                    <span className="avatar-shape" />
                    <Avatar />
                </div>
                <span className="white-line" />
            </div>

            <div className="contact-buttons-container">
                <a className="contact-button" href="mailto:gcasagrande2812@gmail.com">
                    <Mail />
                    <span className="contact-button-background" />
                </a>
                <a
                    className="contact-button"
                    href="https://www.linkedin.com/in/guillaume-casagrande/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn />
                    <span className="contact-button-background" />
                </a>
                <a
                    className="contact-button"
                    href="https://github.com/Tordesillas"
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
