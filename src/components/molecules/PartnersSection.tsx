import React from 'react';
import SectionTitle from '../atoms/SectionTitle.tsx';
import {
    AnticipationSante,
    Biotrial,
    CHU,
    CIUS,
    CNES,
    ExactCure,
    KYomed,
    Polytech,
    Sparkle,
    UPSA,
    Vidal
} from '../icons';
import Aubaud from '../../assets/images/aubaud.png';
import Benito from '../../assets/images/benito.png';
import Dayan from '../../assets/images/dayan.png';
import Dery from '../../assets/images/dery.png';
import Dragee from '../../assets/images/dragee.png';
import Salomon from '../../assets/images/salomon.png';
import './PartnersSection.css';

export default function PartnersSection(): React.ReactElement {
    const people = [
        {
            name: 'Anne-Marie Pinna-Dery',
            status: 'Maître de conférences à Polytech',
            img: Dery,
            job: <Polytech />
        },
        {
            name: 'Frédéric Dayan',
            status: 'Directeur scientifique à Biotrial',
            img: Dayan,
            job: <Biotrial />
        },
        {
            name: 'Sylvain Bénito',
            status: 'Directeur scientifique à ExactCure',
            img: Benito,
            job: <ExactCure />
        },
        {
            name: 'Manuella Aubaud',
            status: 'Chef de projet au CIUS',
            img: Aubaud,
            job: <CIUS />
        },
        {
            name: 'Marc Salomon',
            status: 'Cardiologue, conseiller en e-santé',
            img: Salomon,
            job: <AnticipationSante />
        },
        {
            name: 'Marion Dragée',
            status: "Spécialiste de l'expérience patient",
            img: Dragee,
            job: <KYomed />
        }
    ];

    const companies = [<Sparkle />, <CHU />, <CNES />, <Vidal />, <UPSA />];

    return (
        <section>
            <SectionTitle counter={4} text="Collaborations et confiance" right />

            <div className="partners-container">
                <div className="people-container">
                    {people.map(({ name, status, img, job }, index) => (
                        <div className="people" key={index}>
                            <img src={img} alt={`${name} photo`} className="people-photo" />

                            <div className="people-info">
                                <div className="people-text">
                                    <h3>{name}</h3>
                                    <p>{status}</p>
                                </div>
                                <div className="people-company">{job}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="companies-container">
                    {companies.map((company, index) => (
                        <div className="company-wrapper" key={index}>
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
