import React, { useContext, useState } from "react";
import { WidgetServiceContext } from "../../contexts/Contexts";
import { Widget } from "../../models/Widget";

const WidgetForm: React.FC = () => {
    const widgetService = useContext(WidgetServiceContext);

    const [widget, setWidget] = useState<Widget>({ widgetType: "", widgetTheme: "" });

    const [widgetId, setWidgetId] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let widgetElem = (await widgetService?.createWidget(widget)) as string;
        setWidgetId(widgetElem);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setWidget((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="widgetType">WidgetType</label>
                    <input type="text" name="widgetType" id="widgetType" value={widget.widgetType} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="widgetTheme">WidgetTheme</label>
                    <input type="text" name="widgetTheme" id="widgetTheme" value={widget.widgetTheme} onChange={handleInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>
                Widget URL: {window.location.origin}/widgets/{widgetId}
            </p>
        </div>
    );
};

export default WidgetForm;
