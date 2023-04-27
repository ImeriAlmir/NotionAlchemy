import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { QuoteWidget, ClockWidget, PomodoroWidget } from "./shared/components";
import { CreateWidgetPage, AllWidgetsPage, UserPage, LoadWidgetByIdPage } from "./pages";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="" Component={AllWidgetsPage}></Route>
                    <Route path="/user" Component={UserPage}></Route>
                    <Route path="/clock" element={<ClockWidget theme="light" />}></Route>
                    <Route path="/pomodoro" Component={PomodoroWidget}></Route>
                    <Route path="/quotes" Component={QuoteWidget}></Route>
                    <Route path="/create" Component={CreateWidgetPage}></Route>
                    <Route path="/widgets/:widgetId" Component={LoadWidgetByIdPage}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
