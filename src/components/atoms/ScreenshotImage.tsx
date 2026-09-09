import React, { useEffect, useRef, useState } from 'react';
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

    const imageImporter = image ? imageImporters[`${image}.png`] : null;

    useEffect(() => {
        let cancelled = false;

        if (!image) {
            setNextSrc(null);
            return;
        }

        if (imageCache.has(image)) {
            setNextSrc(imageCache.get(image)!);
        } else if (imageImporter) {
            void imageImporter().then((module) => {
                imageCache.set(image, module);
                if (!cancelled) {
                    setNextSrc(module);
                }
            });
        }

        return () => {
            cancelled = true;
        };
    }, [image, imageImporter]);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const swapToNext = () => {
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

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="screenshot-wrapper">
            <img src={currentSrc || undefined} alt={currentSrc ? image : ''} className="screenshot" />
            <img
                src={nextSrc || undefined}
                alt=""
                aria-hidden="true"
                className={`screenshot next ${isTransitioning ? 'fade-in' : ''}`}
                onLoad={swapToNext}
            />
        </div>
    );
}
