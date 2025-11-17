import React, { useId } from 'react';

export default function BlurredPolygon(): React.ReactElement {
    const id = useId();

    return (
        <svg width="105" height="60" viewBox="0 0 105 60" fill="none" role="presentation">
            <g opacity="0.8" filter={`url(#${id})`}>
                <path d="M52.5 23L79.7798 44.75H25.2202L52.5 23Z" fill="#40C5DB" />
            </g>
            <defs>
                <filter id={id} x="0.2202" y="-2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_20_5" />
                </filter>
            </defs>
        </svg>
    );
}
