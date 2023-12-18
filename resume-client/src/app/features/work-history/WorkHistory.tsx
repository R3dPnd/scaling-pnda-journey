import React from "react";
import { WorkHistory } from "../../interface/WorkHistory";
import ArcadeScreen from "../../layout/arcade-screen/ArcadeScreen";
import CompanyCoinContainer from "./CompanyCoinContainer/CompanyCoinContainer";

import "./work-history.scss"
import WorkHistoryConsole from "./WorkHistoryConsole";

export default function WorkHistoryDisplay() {
    const [workHistory, setWorkHistory] = React.useState<WorkHistory|undefined>();

    return (
    <div className="WorkHistory">
        <CompanyCoinContainer setWorkHistory={(workHistory: WorkHistory) => setWorkHistory(workHistory)}/>
        <WorkHistoryConsole workHistory={workHistory}/>
    </div>)
}