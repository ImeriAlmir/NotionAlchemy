import React from "react";
import "./CreateWidgetPage.scss";
import { WidgetForm } from "../../shared/components";

const CreateWidgetPage: React.FC = () => {
    return (
        <div className="flex center">
            <div className="container">
                <h1>create your custom widgets</h1>
                <WidgetForm></WidgetForm>
            </div>
        </div>
    );
};

export default CreateWidgetPage;
