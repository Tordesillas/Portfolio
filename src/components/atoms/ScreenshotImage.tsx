import React, { useEffect, useMemo, useRef, useState } from 'react';
import { imageImporters } from '../../services/ImageLoader.ts';
import './ScreenshotImage.css';

interface Props {
    image: string;
}

const imageCache = new Map<string, string>();

export default function ScreenshotImage({ image }: Props): React.ReactElement {
    const [currentSrc, setCurrentSrc] = useState<string | null>(null);
    const [nextSrc, setNextSrc] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const imageImporter = useMemo(() => {
        if (!image) return null;
        return Object.entries(imageImporters).find(([path]) =>
            path.includes(`${image}.png`)
        )?.[1] as () => Promise<string>;
    }, [image]);

    useEffect(() => {
        if (!image) {
            setNextSrc(null);
        } else if (imageCache.has(image)) {
            setNextSrc(imageCache.get(image)!);
        } else if (imageImporter) {
            void imageImporter().then((module) => {
                imageCache.set(image, module);
                setNextSrc(module);
            });
        }
    }, [image, imageImporter]);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleNextImageLoad = () => {
        setIsTransitioning(true);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setCurrentSrc(nextSrc);
            setNextSrc(null);
            setIsTransitioning(false);
            timeoutRef.current = null;
        }, 300);
    };

    return (
        <div className="screenshot-wrapper">
            <img
                src={currentSrc || undefined}
                alt={currentSrc ? image : undefined}
                loading="lazy"
                className="screenshot"
            />
            <img
                src={nextSrc || undefined}
                alt={nextSrc ? image : undefined}
                loading="lazy"
                className={`screenshot next ${isTransitioning ? 'fade-in' : ''}`}
                onLoad={handleNextImageLoad}
            />
        </div>
    );
}
