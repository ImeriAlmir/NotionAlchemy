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
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Clock" widgetDescription="Digital in 24h format" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Pomodoro" widgetDescription="Pomodoro Timer" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Motivation Quotes" widgetDescription="Random Motivation Quotes" />
            </div>
            <div className="row flex">
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Spotify" widgetDescription="Manage your spotify via Notion" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Calendar" widgetDescription="Manage your appointments" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Weather" widgetDescription="Have a look at your weather" />
            </div>
            <div className="row flex">
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Lorem Ipsum" widgetDescription="Lorem Ipsum" />
            </div>
        </div>
    );
};

export default CreateWidgetPage;
