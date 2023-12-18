import Entry, { Blerb } from "../../../layout/entry/Entry"
import EntryImageViewer from "../../../layout/entry/image/EntryImageViewer"
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
        iconCaption: "scaling-pnd-journy"
    }
    return (
        <>
            <EntryImageViewer images={props.projectDescription.photos}/>
            <Entry blerb={blerb}/>
        </>
    )
}