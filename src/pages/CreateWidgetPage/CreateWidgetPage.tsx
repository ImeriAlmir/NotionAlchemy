import React from "react";
import "./CreateWidgetPage.scss";
import { useParams } from "react-router-dom";

const CreateWidgetPage: React.FC = () => {

    const { widgetName } = useParams();

    return (
        <div className="">
            <h1>{widgetName}</h1>
        </div>
    );
};

export default CreateWidgetPage;
