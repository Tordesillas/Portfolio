import React, { useEffect, useState } from 'react';
import ScreenshotImage from './ScreenshotImage.tsx';
import { LeftChevron, Phone, RightChevron } from '../icons';
import './PhoneCarrousel.css';

interface Props {
    project: string;
}

export default function PhoneCarrousel({ project }: Props): React.ReactElement {
    const projectScreenshots: Record<string, any> = {
        ExaMed: {
            path: 'examed',
            size: 5
        },
        CCExpert: {
            path: 'ccexpert',
            size: 5
        },
        CrewExpanse: {
            path: 'crewexpanse',
            size: 4
        },
        '?': {
            path: 'ca',
            size: 0
        }
    };

    const [imageName, setImageName] = useState('');
    const [imageCounter, setImageCounter] = useState(1);

    useEffect(() => {
        if (!imageName.includes(project)) {
            setImageCounter(1);
        }
    }, [project]);

    useEffect(() => {
        if (project) {
            setImageName(`${projectScreenshots[project].path}${imageCounter}`);
        }
    }, [imageCounter, project]);

    function nextImage() {
        const max = projectScreenshots[project].size;
        setImageCounter((imageCounter % max) + 1);
    }

    function prevImage() {
        const max = projectScreenshots[project].size;
        setImageCounter(((imageCounter + max - 2) % max) + 1);
    }

    return (
        <div className="phone-container">
            <Phone />

            <div className="image-mask">
                <ScreenshotImage image={imageName} />
            </div>

            <div className="chevron-wrapper prev" onClick={prevImage}>
                <LeftChevron />
            </div>
            <div className="chevron-wrapper next" onClick={nextImage}>
                <RightChevron />
            </div>
        </div>
    );
}
