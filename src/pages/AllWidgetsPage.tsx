import React from "react";
import { ClockWidget, PomodoroWidget, QuoteWidget } from "../shared/components";

const AllWidgetsPage: React.FC = () => {
    return (
        <div>
            <ClockWidget theme="dark"></ClockWidget>
            <PomodoroWidget></PomodoroWidget>
            <QuoteWidget></QuoteWidget>
        </div>
    );
};

export default AllWidgetsPage;
