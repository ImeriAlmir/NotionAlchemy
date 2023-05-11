import React from "react";
import "./CreateWidgetPage.scss";
import clockImage from "../../assets/images/digital_clock.png";
import { Card } from "../../shared/components";
import { Header } from "../../shell/components";

let altText = "Clock Image";

const CreateWidgetPage: React.FC = () => {
    return (
        <div className="widgetPage flex center column">
            <Header />
            <div className="row flex">
                <Card imageUrl={clockImage} imageAltText={altText} />
                <Card imageUrl={clockImage} imageAltText={altText} />
                <Card imageUrl={clockImage} imageAltText={altText} />
            </div>
            <div className="row flex">
                <Card imageUrl={clockImage} imageAltText={altText} />
                <Card imageUrl={clockImage} imageAltText={altText} />
                <Card imageUrl={clockImage} imageAltText={altText} />
            </div>
            <div className="row flex">
                <Card imageUrl={clockImage} imageAltText={altText} />
            </div>
        </div>
    );
};

export default CreateWidgetPage;
