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
    const imageImporter = Object.entries(imageImporters).find(([path]) =>
        path.includes(`${image}.png`)
    )?.[1] as () => Promise<string>;

    // Load the image
    useEffect(() => {
        if (isInView && imageImporter && !imageSrc) {
            void imageImporter().then((module) => {
                setImageSrc(module);
            });
        }
    }, [isInView, imageImporter, imageSrc]);

    // Detect area visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.5
            }
        );

        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, []);

    return (
        <div ref={imageRef} className={`image-wrapper ${isInView && isLoaded ? 'animate' : ''}`}>
            {imageSrc ? (
                <img src={imageSrc} alt={image} loading="lazy" onLoad={() => setIsLoaded(true)} />
            ) : (
                <span className="image-placeholder" />
            )}
        </div>
    );
}
