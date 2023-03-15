import Entry, { Blerb } from "../../../layout/entry/Entry"
import "./Project.scss"
import { ProjectDescription } from "./ProjectDescription"

interface Props{
    projectDescription: ProjectDescription,
}

export default function Project(props: Props) {
    let blerb: Blerb = {
        header: props.projectDescription.title,
        subHeading: props.projectDescription.subTitle,
        story: props.projectDescription.description,
        icon: require('../../../../img/bg-red-pnd.png'),
        iconCaption: "react"
    }
    return (
        <>
            <Entry blerb={blerb}/>
        </>
    )
}