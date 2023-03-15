import EntryImage, { Image } from "./EntryImage"

import "./EntryImage.scss"

interface Props {
    images: Image[]
}

export default function EntryImageViewer(props: Props) {

    return (
        <>
            {/* {props.images.map((img) => {
                return(
                        <EntryImage entryImage={img}/>
                )
            })
        } */}
            <figure className="story-shape">
                <img src={require('../../../img/coin-microsoft.png')} alt="Story Icon" className="story-icon" />
            </figure>
        </>
    )
}