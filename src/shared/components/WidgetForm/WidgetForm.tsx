import React, { useContext, useState } from "react";
import { WidgetServiceContext } from "../../contexts/Contexts";
import { Widget } from "../../models/Widget";
import "./WidgetForm.scss";
import { copyToClipBoard } from "../../utilities/Utility";

const WidgetForm: React.FC = () => {
    const widgetService = useContext(WidgetServiceContext);

    const [widget, setWidget] = useState<Widget>({ widgetType: "", widgetTheme: "" });

    const [widgetId, setWidgetId] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let widgetElem = (await widgetService?.createWidget(widget)) as string;
        setWidgetId(widgetElem);
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setWidget((prevState) => ({ ...prevState, widgetType: value }));
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setWidget((prevState) => ({ ...prevState, widgetTheme: value }));
    };

    const handleCopyClick = () => {
        copyToClipBoard("generatedUrl");
    };

    return (
        <div className="widgetForm">
            <form onSubmit={handleSubmit}>
                <div className="flex center">
                    <div className="widgetTypeContainer flex column center">
                        <label className="text-center" htmlFor="widgetType">Widget Type</label>
                        <select name="widgetType" id="widgetType" value={widget.widgetType} onChange={handleTypeChange}>
                            <option value="clock">Clock</option>
                            <option value="pomodoro">Pomodoro</option>
                            <option value="quote">Quote</option>
                        </select>
                    </div>
                    <div className="widgetThemeContainer flex column center">
                        <label className="text-center" htmlFor="widgetTheme">Widget Theme</label>
                        <select name="widgetTheme" id="widgetTheme" value={widget.widgetTheme} onChange={handleThemeChange}>
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                    </div>
                </div>
                <div className="flex center">
                    <button type="submit">create</button>
                </div>
            </form>
            <div className="generatedUrlContainer flex center">
                <button onClick={handleCopyClick}>
                    Copy to clipboard
                </button>
                <p className="text-center" id="generatedUrl">
                    {window.location.origin}/widgets/{widgetId}
                </p>
            </div>
        </div>
    );
};

export default WidgetForm;
