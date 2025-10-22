import React from 'react';
import CareerSection from './components/molecules/CareerSection.tsx';
import EducationalSection from './components/molecules/EducationalSection.tsx';
import Footer from './components/molecules/Footer.tsx';
import HeaderBar from './components/molecules/HeaderBar.tsx';
import HeroHeader from './components/molecules/HeroHeader.tsx';
import PartnersSection from './components/molecules/PartnersSection.tsx';
import ProjectsSection from './components/molecules/ProjectsSection.tsx';
import './App.css';

export default function App(): React.ReactElement {
    return (
        <>
            <HeaderBar />

            <main className="main-container">
                <HeroHeader />
                <EducationalSection />
                <CareerSection />
                <ProjectsSection />
                <PartnersSection />
            </main>

            <Footer />
        </>
    );
}
