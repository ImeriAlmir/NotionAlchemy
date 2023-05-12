import React from "react";
import "./CreateWidgetPage.scss";
import clockImage from "../../assets/images/digital_clock.png";
import { Card, WidgetFilter } from "../../shared/components";
import { Header } from "../../shell/components";

let altText = "Clock Image";

const CreateWidgetPage: React.FC = () => {
    return (
        <div className="widgetPage flex center column">
            <Header />
            <WidgetFilter />
            <div className="row flex">
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Clock" widgetDescription="Digital in 24h format" widgetCategory="Clock" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Pomodoro" widgetDescription="Pomodoro Timer" widgetCategory="Timers" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Motivation Quotes" widgetDescription="Random Motivation Quotes" widgetCategory="Quotes" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Spotify" widgetDescription="Manage your spotify via Notion" widgetCategory="Music" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Calendar" widgetDescription="Manage your appointments" widgetCategory="Weather" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Weather" widgetDescription="Have a look at your weather" widgetCategory="Calendar" />
                <Card imageUrl={clockImage} imageAltText={altText} widgetName="Lorem Ipsum" widgetDescription="Lorem Ipsum" widgetCategory="Clock" />
            </div>
        </div>
    );
};

export default CreateWidgetPage;
