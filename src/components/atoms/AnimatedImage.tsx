import React, { useEffect, useRef, useState } from 'react';
import { imageImporters } from '../../services/ImageLoader.ts';
import './AnimatedImage.css';

interface Props {
    image: 'diploma' | 'island';
}

export default function AnimatedImage({ image }: Props): React.ReactElement {
    const imageRef = useRef<HTMLImageElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    // Find the correct image importer
    const imageImporter = imageImporters[`${image}.png`];

    // Load the image
    useEffect(() => {
        if (isInView && imageImporter && !imageSrc) {
            void imageImporter().then(setImageSrc);
        }
    }, [isInView, imageImporter, imageSrc]);

    // Detect area visibility
    useEffect(() => {
        const imageElement = imageRef.current;
        if (!imageElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5
            }
        );

        observer.observe(imageElement);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imageRef} className={`image-wrapper ${isInView && isLoaded ? 'animate' : ''}`}>
            {imageSrc && <img src={imageSrc} alt={image} loading="lazy" onLoad={() => setIsLoaded(true)} />}
        </div>
    );
}
