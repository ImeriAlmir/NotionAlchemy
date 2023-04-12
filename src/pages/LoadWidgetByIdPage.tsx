import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WidgetServiceContext } from "../shared/contexts/Contexts";
import { ClockWidget } from "../shared/components";
import { Widget } from "../shared/models/Widget";
const LoadWidgetByIdPage: React.FC = () => {
    let { widgetId = "a4PrsXlvQ0XjmM90bKJS" } = useParams();

    const [widget, setWidget]: [Widget | undefined, React.Dispatch<React.SetStateAction<Widget | undefined>>] = useState();
    const widgetService = useContext(WidgetServiceContext);

    useEffect(() => {
        const getWidgetData = async () => {
            const widgetData: void | Widget = await widgetService?.loadWidget(widgetId);
            setWidget(widgetData as Widget);
        };
        getWidgetData();
    }, []);

    return <div>{widget?.widgetType == "clock" && <ClockWidget {...widget} />}</div>;
};

export default LoadWidgetByIdPage;
