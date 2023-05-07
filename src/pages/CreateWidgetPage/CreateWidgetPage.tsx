import React from "react";
import { WidgetForm } from "../../shared/components";
import "./CreateWidgetPage.scss";

const CreateWidgetPage: React.FC = () => {
    return (
        <div className="widgetPage flex center">
            <div className="container">
                <h1>create your custom widgets</h1>
                <WidgetForm></WidgetForm>
            </div>
        </div>
    );
};

export default CreateWidgetPage;
