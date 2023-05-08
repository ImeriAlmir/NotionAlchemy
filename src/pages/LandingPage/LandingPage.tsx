import React from 'react';
import './LandingPage.scss';
import { QuoteWidget } from '../../shared/components';

const LandingPage: React.FC = () => {
    return (
        <div>
            <div className="content-container flex">
                <div className="left-container flex column center">
                    <div className="title-container text-center">
                        <h1 className="title">Notion<br />Alchemy</h1>
                    </div>
                    <div className="slogan-container text-center">
                        <h4 className="slogan">Elevate your Notion experience</h4>
                    </div>

                </div>
                <div className="right-container flex column center">
                    <div className="widget-container flex column center">
                        <QuoteWidget />
                        <button className="button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;