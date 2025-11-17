import React, { useId } from 'react';
import './SectionTitle.css';

interface Props {
    text: string;
    counter: number;
    right?: boolean;
}

export default function SectionTitle({ text, counter, right }: Props): React.ReactElement {
    const gradId = useId();

    return (
        <div id={`section${counter}`} className="section-title">
            <p className="title-background" aria-hidden="true" role="presentation">
                {text}
            </p>

            <div className="main-title-wrapper">
                <h2 style={{ textAlign: right ? 'right' : 'left', textUnderlineOffset: `${right ? 3.5 : 4.5}px` }}>
                    <span>0{counter}.</span> {text}
                </h2>
                <span className="overflowed-line" style={{ gridColumn: right ? 3 : 1 }} />

                <svg
                    width="60"
                    height="120"
                    viewBox={`${right ? -100 : 0} 0 100 200`}
                    style={{
                        left: right ? undefined : 0,
                        right: right ? 0 : undefined
                    }}
                    role="presentation"
                >
                    <circle cx="0" cy="100" r="100" fill={`url(#${gradId})`} />
                    <defs>
                        <radialGradient id={gradId} cx="0" cy="100" r="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="var(--blue-light)" stopOpacity="0.5" />
                            <stop offset="0.08" stopColor="var(--blue-light)" stopOpacity="0.35" />
                            <stop offset="0.3" stopColor="var(--blue-light)" stopOpacity="0.2" />
                            <stop offset="1" stopColor="var(--blue)" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
