import { WorkHistory } from "../../interface/WorkHistory"
import ArcadeScreen from "../../layout/arcade-screen/ArcadeScreen";
import List from "../../layout/list/List";

import './work-history.scss';

interface Props{
    workHistory: WorkHistory| undefined;
}

export default function WorkHistoryConsole(props: Props) {
    if(!props.workHistory){
        return <ArcadeScreen>Please Select a Coin</ArcadeScreen>;
    }
    return(
        <ArcadeScreen>
            <h2 className="u-center-text">{props.workHistory.company}</h2>
            <h3 className="u-center-text">{props.workHistory.title}</h3>
            <h3 className="u-center-text">Achievements</h3>

            <List listItems={props.workHistory.achievements}/>
        </ArcadeScreen>
    )
}