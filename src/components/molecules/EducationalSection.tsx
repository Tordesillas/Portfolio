import React from 'react';
import AnimatedImage from '../atoms/AnimatedImage.tsx';
import SectionTitle from '../atoms/SectionTitle.tsx';
import { Polytech } from '../icons';
import './EducationalSection.css';

export default function EducationalSection(): React.ReactElement {
    return (
        <>
            <SectionTitle counter={1} text="Être formé puis former" />

            <section className="content-grid">
                <div className="left-column">
                    <AnimatedImage image="diploma" />
                </div>
                <div className="right-column">
                    <p>
                        <span>2014-2016</span>
                        {'\n'}
                        École préparatoire Polytech’Nice-Sophia.{'\n'}
                        {'\n'}
                        <span>2016-2019</span>
                        {'\n'}
                        École d’ingénieur Polytech’Nice-Sophia.{'\n'}
                        Diplôme en Sciences informatiques, spécialité “IHM” (major de la filière en dernière année).
                    </p>
                    <div className="logo-wrapper">
                        <Polytech />
                    </div>
                    <p>
                        <span>2020-...</span>
                        {'\n'}
                        Encadrant de projets à Polytech’Nice-Sophia.{'\n'}
                        Sensibilisation des étudiants à la conception orientée utilisateur.
                    </p>
                </div>
            </section>
        </>
    );
}
