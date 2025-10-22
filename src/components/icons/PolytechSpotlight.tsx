import React from 'react';

export default function PolytechSpotlight(): React.ReactElement {
    return (
        <svg width="180" height="180" fill="none" viewBox="-2 -2 204 204">
            <circle cx="100" cy="100" r="100" stroke="#00ADEF" strokeDasharray="2 50.5" strokeWidth="2" />
            <path
                fill="#00ADEF"
                d="M102.376 48.056A52.376 52.376 0 0 0 51.04 90.088h21.424a31.624 31.624 0 1 1 .04 20.8H51.088v26.4c0 22.504 19.472 21.184 19.472 21.184V142a52.368 52.368 0 1 0 31.816-93.944"
            />
            <circle cx="100" cy="100" r="90" fill="url(#polyRadial)" />
            <defs>
                <radialGradient
                    id="polyRadial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(90 0 100)scale(90)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#40C5DB" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#226975" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}
