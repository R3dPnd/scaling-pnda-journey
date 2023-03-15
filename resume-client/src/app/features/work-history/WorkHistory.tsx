import React from "react";
import ArcadeScreen from "../../layout/arcade-screen/ArcadeScreen";
import CompanyCoinContainer from "./CompanyCoinContainer/CompanyCoinContainer";

import "./work-history.scss"


export default function WorkHistory() {
    const [company, setCompany] = React.useState<string|undefined>();

    console.log(company);

    return (
    <>
        <h3 className="heading-med-gradient">Work History</h3>
        <CompanyCoinContainer setCompany={setCompany}/>
        <ArcadeScreen>

        </ArcadeScreen>
    </>)
}