import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { QuoteWidget, ClockWidget, PomodoroWidget } from "./shared/components";
import { CreateWidgetPage, AllWidgetsPage, UserPage, LoadWidgetByIdPage, LandingPage } from "./pages";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="" element={<LandingPage />}></Route>
                    <Route path="/all" element={<AllWidgetsPage />}></Route>
                    <Route path="/user" element={<UserPage />}></Route>
                    <Route path="/clock" element={<ClockWidget widgetTheme="light" />}></Route>
                    <Route path="/pomodoro" element={<PomodoroWidget />}></Route>
                    <Route path="/quotes" element={<QuoteWidget />}></Route>
                    <Route path="/create" element={<CreateWidgetPage />}></Route>
                    <Route path="/widgets/:widgetId" element={<LoadWidgetByIdPage />}></Route>
                </Routes>
            </Router>
        </div >
    );
};

export default App;
