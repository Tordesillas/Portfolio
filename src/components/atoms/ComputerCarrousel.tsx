import React, { useEffect, useState } from 'react';
import ScreenshotImage from './ScreenshotImage.tsx';
import { Computer, LeftChevron, RightChevron } from '../icons';
import './ComputerCarrousel.css';

interface Props {
    project: string;
}

export default function ComputerCarrousel({ project }: Props): React.ReactElement {
    const projectScreenshots: Record<string, any> = {
        'ExaMed Pro v2': {
            path: 'examedpro',
            size: 6
        },
        Ludas: {
            path: 'ludas',
            size: 1
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
        <div className="computer-container">
            <Computer />

            <div className="screenshot-image-mask">
                <ScreenshotImage image={imageName} />
            </div>

            <div className="computer-chevron-wrapper prev" onClick={prevImage}>
                <LeftChevron />
            </div>
            <div className="computer-chevron-wrapper next" onClick={nextImage}>
                <RightChevron />
            </div>
        </div>
    );
}
