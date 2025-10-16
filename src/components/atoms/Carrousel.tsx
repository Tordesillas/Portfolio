import React, { useEffect, useState } from 'react';
import ScreenshotImage from './ScreenshotImage.tsx';
import { Computer, LeftChevron, Navigator, Phone, RightChevron } from '../icons';
import { Project } from '../../models';
import './Carrousel.css';

interface Props {
    project?: Project;
    isMobile?: boolean;
    ref?: React.Ref<HTMLDivElement>;
}

export default function Carrousel({ project, isMobile, ref }: Props): React.ReactElement {
    const [imageName, setImageName] = useState('');
    const [imageCounter, setImageCounter] = useState(1);

    useEffect(() => {
        if (!project) return;
        if (!imageName.includes(project.name)) {
            setImageCounter(1);
        }
    }, [project]);

    useEffect(() => {
        if (!project) return;
        setImageName(`${project.imgPath}${imageCounter}`);
    }, [imageCounter, project]);

    function nextImage() {
        if (!project) return;
        const max = project.imgQuantity;
        setImageCounter((imageCounter % max) + 1);
    }

    function prevImage() {
        if (!project) return;
        const max = project.imgQuantity;
        setImageCounter(((imageCounter + max - 2) % max) + 1);
    }

    return (
        <div className={`carrousel ${isMobile ? 'mob' : ''}`} ref={ref}>
            {isMobile ? (
                <Phone />
            ) : (
                <>
                    <Computer />
                    <div className="navigator-background">
                        <Navigator />
                    </div>
                </>
            )}

            <div className={`image-mask ${isMobile ? 'mob' : 'web'}`}>
                <ScreenshotImage image={imageName} />
            </div>

            <div
                className={`chevron-wrapper prev ${isMobile ? 'mob' : 'web'} ${project ? '' : 'hidden'}`}
                onClick={prevImage}
            >
                <LeftChevron />
            </div>
            <div
                className={`chevron-wrapper next ${isMobile ? 'mob' : 'web'} ${project ? '' : 'hidden'}`}
                onClick={nextImage}
            >
                <RightChevron />
            </div>
        </div>
    );
}
