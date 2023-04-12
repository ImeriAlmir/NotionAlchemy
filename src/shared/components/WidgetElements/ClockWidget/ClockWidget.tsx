import React, { useEffect, useState } from "react";
import "./ClockWidget.scss";

interface Props {
    theme?: string;
}

const ClockWidget: React.FC<Props> = ({ theme = "dark" }) => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date: Date): string => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const combinedClassNames = `time ${theme}`;

    return (
        <div className="clock">
            <div className={combinedClassNames}>
                <h2>{formatTime(time)}</h2>
            </div>
        </div>
    );
};

export default ClockWidget;
