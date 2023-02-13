import ArcadeButton from "../arcade-button/ArcadeButton";

import "./LeftNav.scss"

export default function LeftNav() {
    return(
        <div className="left-nav">
            <ArcadeButton label="About" color="red" onClick={() => {console.log("click")}}/>
            <ArcadeButton label="Work History" color="blue" onClick={() => {console.log("click")}}/>
            <ArcadeButton label="Education" color="green" onClick={() => {console.log("click")}}/>
            {/* <ArcadeButton label="Projects" color="yellow" onClick={() => {console.log("click")}}/>
            <ArcadeButton label="Blog" color="cyan" onClick={() => {console.log("click")}}/> */}
        </div>
    );
}