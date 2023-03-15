import "./EntryImage.scss"

export interface Image {
    image: string;
    caption: string;
}

interface Props {
    entryImage: Image;
}
export default function EntryImage(props:Props) {
    return (
        <figure className="entry-image">
            <img src={props.entryImage.image} alt="entrty image" className="entry-image" />
            <figcaption className="entry-image-caption" >{props.entryImage.caption}</figcaption>
        </figure>
    )
}