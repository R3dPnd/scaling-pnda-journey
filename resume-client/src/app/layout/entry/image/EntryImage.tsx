import "./EntryImage.scss"
import { EntryImageEntity } from "./EntryImageEntity";

interface Props {
    entryImage: EntryImageEntity;
}
export default function EntryImage(props:Props) {
    return (
        <figure className="entry-image">
            <img src={props.entryImage.image} alt="entrty image" className="entry-image" />
            <figcaption className="entry-image-caption" >{props.entryImage.caption}</figcaption>
        </figure>
    )
}