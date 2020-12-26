import React from "react";
import "./App.scss";

import TopBar from "./components/TopBar";
import DashboardArea from "./components/DashboardArea";

export default function App() {
    return (
        <React.Fragment>
            <TopBar/>
            <DashboardArea/>
        </React.Fragment>
    );
}
