import React, { useEffect, useState } from 'react';
import { BlurredPolygon } from '../icons';
import './HeaderBar.css';

export default function HeaderBar(): React.ReactElement {
    const tabs = ['Guillaume', 'Formation', 'Carrière', 'Créations'];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId: number) => {
        const elementId = `section${sectionId}`;
        document.getElementById(elementId)!.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`header-bar ${scrolled ? 'scrolled' : ''}`}>
            {tabs.map((tab, index) => (
                <div key={tab} className="header-button" onClick={() => handleClick(index)}>
                    {tab}
                    <div className="blurred-background">
                        <BlurredPolygon />
                    </div>
                </div>
            ))}
        </header>
    );
}
