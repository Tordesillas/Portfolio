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
    return (
        <>
            <SectionTitle counter={2} text="Parcours professionnel" right />

            <section className="content-grid">
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
            </section>

            <div className="web-tools">
                {[
                    'html',
                    'css',
                    'javascript',
                    'typescript',
                    'react',
                    'redux',
                    'vue',
                    'figma',
                    'storybook',
                    'jest',
                    'vite',
                    'react-native',
                    'play-store',
                    'apple',
                    'nodejs',
                    'mongodb'
                ].map((tool) => (
                    <div key={tool} className={`web-tool web-tool-${tool}`}>
                        {tool === 'apple' && <Apple />}
                        {tool === 'css' && <CSS />}
                        {tool === 'figma' && <Figma />}
                        {tool === 'html' && <HTML />}
                        {tool === 'javascript' && <JavaScript />}
                        {tool === 'jest' && <JestLogo />}
                        {tool === 'mongodb' && <MongoDB />}
                        {tool === 'nodejs' && <NodeJS />}
                        {tool === 'play-store' && <PlayStore />}
                        {tool === 'react' && <ReactLogo />}
                        {tool === 'react-native' && <ReactNative />}
                        {tool === 'redux' && <ReduxLogo />}
                        {tool === 'storybook' && <StorybookLogo />}
                        {tool === 'typescript' && <TypeScript />}
                        {tool === 'vite' && <ViteLogo />}
                        {tool === 'vue' && <Vue />}
                    </div>
                ))}
            </div>
        </>
    );
}
