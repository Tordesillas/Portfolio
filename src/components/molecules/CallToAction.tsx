import React, { useRef } from 'react';
import sound from '../../assets/sounds/bubble.ogg';
import './CallToAction.css';

export default function CallToAction(): React.ReactElement {
    const buttonRef = useRef<SVGSVGElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleClick = () => {
        const button = buttonRef.current!;
        const bubblePop = audioRef.current!;

        button.classList.remove('active');
        button.getBBox();
        button.classList.add('active');

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            bubblePop.currentTime = 0;
            bubblePop.play().catch(() => {});
        }
    };

    return (
        <div className="cta-container">
            <div className="cta-text-wrapper">
                <p className="cta-text">Let's work together!</p>
            </div>

            <span className="cta-left-empty" />
            <span className="cta-blue-line" />

            <svg
                ref={buttonRef}
                viewBox="0 0 352 352"
                className="cta-button"
                role="button"
                aria-label="Anime la bulle"
                tabIndex={0}
            >
                <path
                    d="M351 176C351 272.65 272.65 351 176 351C64.5172 345.846 82.0172 297.846 62.5172 273.346C43.0172 248.846 1 244.346 1 176C1 79.3502 68.2994 1.00014 176 1C282.017 0.999864 351 79.3502 351 176Z"
                    fill="var(--blue-very-dark)"
                    stroke="url(#blue_to_white)"
                    strokeWidth="2"
                    className="cta-touchable"
                    onClick={handleClick}
                />
                <mask id="bubble_mask" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="1">
                    <path
                        d="M351 176C351 272.65 272.65 351 176 351C64.5172 345.846 82.0172 297.846 62.5172 273.346C43.0172 248.846 1 244.346 1 176C1 79.3502 68.2994 1.00014 176 1C282.017 0.999864 351 79.3502 351 176Z"
                        fill="var(--black)"
                    />
                </mask>
                <g mask="url(#bubble_mask)" style={{ pointerEvents: 'none' }}>
                    <ellipse
                        cx="280.178"
                        cy="100.081"
                        rx="99"
                        ry="47"
                        transform="rotate(-124.416 280.178 100.081)"
                        fill="url(#white_ellipse)"
                    />
                    <ellipse
                        cx="83.8706"
                        cy="261.331"
                        rx="99"
                        ry="47"
                        transform="rotate(48.5785 83.8706 261.331)"
                        fill="url(#blue_ellipse)"
                    />
                </g>

                <defs>
                    <linearGradient id="blue_to_white" x1="10" y1="342" x2="342" y2="10" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="var(--blue-light)" />
                        <stop offset="1" stopColor="var(--white)" />
                    </linearGradient>
                    <radialGradient
                        id="white_ellipse"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(280.178 116.081) rotate(-90) scale(47.5 100.053)"
                    >
                        <stop offset="0" stopColor="var(--white)" stopOpacity="0.6" />
                        <stop offset="1" stopColor="var(--white)" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                        id="blue_ellipse"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(83.8706 277.331) rotate(-90) scale(47.5 100.053)"
                    >
                        <stop offset="0" stopColor="#40C5DB" />
                        <stop offset="1" stopColor="#226975" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            <span className="cta-white-line-wrapper">
                <span className="cta-white-line" />
            </span>

            <audio ref={audioRef} src={sound} preload="auto" aria-hidden="true" tabIndex={-1} />
        </div>
    );
}
