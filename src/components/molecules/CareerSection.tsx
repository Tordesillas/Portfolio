import React from 'react';
import AnimatedImage from '../atoms/AnimatedImage.tsx';
import SectionTitle from '../atoms/SectionTitle.tsx';
import {
    Apple,
    CSS,
    Figma,
    HTML,
    JavaScript,
    JestLogo,
    MongoDB,
    NodeJS,
    PlayStore,
    ReactLogo,
    ReactNative,
    ReduxLogo,
    StorybookLogo,
    TypeScript,
    ViteLogo,
    Vue
} from '../icons';
import './CareerSection.css';

export default function CareerSection(): React.ReactElement {
    const tools = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Redux',
        'Vue',
        'Figma',
        'Storybook',
        'Jest',
        'Vite',
        'React Native',
        'Play Store',
        'App Store',
        'Nodejs',
        'MongoDB'
    ];

    return (
        <section>
            <SectionTitle counter={2} text="Parcours professionnel" right />

            <div className="content-grid">
                <div className="left-column">
                    <AnimatedImage image="island" />
                </div>
                <div className="right-column">
                    <p>
                        <span>2019-2024</span>
                        {'\n'}
                        Lead front-end chez ExactCure :{'\n'}- conception de l’application mobile ExaMed en React Native
                        {'\n'}- conception de l’application web ExaMed Pro en Vue.js 3{'\n'}- maquettage de ces
                        applications avec Balsamiq et Figma{'\n'}- tests utilisateurs (focus groups, tests en conditions
                        réelles){'\n'}- tests automatisés (Jest, Detox, AppCenter){'\n'}- déploiements sur Google Play,
                        App Store, AppGallery{'\n'}- consultant et support sur l’application mobile Med&Moi{'\n'}-
                        recrutement IT
                    </p>
                </div>
            </div>

            <div className="web-tools">
                {tools
                    .map((tool) => ({
                        tool,
                        toolKC: tool.toLowerCase().replace(/\s+/g, '-')
                    }))
                    .map(({ tool, toolKC }) => (
                        <div key={tool} className={`web-tool-${toolKC}`}>
                            <button
                                className="web-tool"
                                style={{ anchorName: `--button-${toolKC}` }}
                                aria-describedby="tooltip"
                            >
                                {toolKC === 'app-store' && <Apple />}
                                {toolKC === 'css' && <CSS />}
                                {toolKC === 'figma' && <Figma />}
                                {toolKC === 'html' && <HTML />}
                                {toolKC === 'javascript' && <JavaScript />}
                                {toolKC === 'jest' && <JestLogo />}
                                {toolKC === 'mongodb' && <MongoDB />}
                                {toolKC === 'nodejs' && <NodeJS />}
                                {toolKC === 'play-store' && <PlayStore />}
                                {toolKC === 'react' && <ReactLogo />}
                                {toolKC === 'react-native' && <ReactNative />}
                                {toolKC === 'redux' && <ReduxLogo />}
                                {toolKC === 'storybook' && <StorybookLogo />}
                                {toolKC === 'typescript' && <TypeScript />}
                                {toolKC === 'vite' && <ViteLogo />}
                                {toolKC === 'vue' && <Vue />}
                            </button>
                            <div
                                className="tool-tooltip"
                                style={{ positionAnchor: `--button-${toolKC}` }}
                                id="tooltip"
                                role="tooltip"
                            >
                                {tool}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
