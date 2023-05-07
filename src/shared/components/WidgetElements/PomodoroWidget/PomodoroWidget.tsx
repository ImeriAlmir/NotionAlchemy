import React, { useState, useEffect } from "react";
import "./PomodoroWidget.scss";

interface PomodoroWidgetProps {
    widgetTheme?: string;
    widgetType?: string;
    duration?: number;
}

const PomodoroWidget: React.FC<PomodoroWidgetProps> = ({ duration = 50, widgetTheme = "dark" }) => {
    const [timeRemaining, setTimeRemaining] = useState(duration * 60);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (timerRunning && timeRemaining > 0) {
            intervalId = setInterval(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [timerRunning, timeRemaining]);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const startTimer = () => {
        setTimerRunning(true);
    };

    const stopTimer = () => {
        setTimerRunning(false);
    };

    const resetTimer = () => {
        setTimeRemaining(duration * 60);
        setTimerRunning(false);
    };

    const handleDurationChange = (duration: number) => {
        setTimeRemaining(duration * 60);
        setTimerRunning(false);
    };

    const combinedClassNames = `pomodoro-timer ${widgetTheme}`;

    return (
        <div className={combinedClassNames}>
            <div className="time-display">
                <h2>
                    {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
                </h2>
            </div>
            <div className="controls">
                {!timerRunning && (
                    <>
                        <button className="duration-button" onClick={() => handleDurationChange(30)}>
                            30
                        </button>
                        <button className="duration-button" onClick={() => handleDurationChange(50)}>
                            50
                        </button>
                        <button className="duration-button" onClick={() => handleDurationChange(90)}>
                            90
                        </button>
                    </>
                )}
                {!timerRunning && (
                    <button className="start-button" onClick={startTimer}>
                        Start
                    </button>
                )}
                {timerRunning && (
                    <button className="stop-button" onClick={stopTimer}>
                        Stop
                    </button>
                )}
                <button className="reset-button" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default PomodoroWidget;
