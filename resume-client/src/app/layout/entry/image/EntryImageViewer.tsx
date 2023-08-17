import { useState } from "react";
import EntryImage from "./EntryImage"

import "./EntryImage.scss"
import { EntryImageEntity } from "./EntryImageEntity";

interface Props {
    images: EntryImageEntity[]
}

export default function EntryImageViewer(this: any, props: Props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    let currentImage = props.images[currentImageIndex];

    const changePicture = (i:number) =>{
        setCurrentImageIndex((currentImageIndex + i)%(props.images.length));
        console.log(currentImageIndex); 
    }

    return (
        <>
            <div className="entry-image-container">
                <div className="entry-image-arrow-container">
                    <button className="btn entry-image-arrow entry-image-arrow-left" onClick={() => changePicture(-1)}>
                        &#x2794;
                    </button>
                    <button className="btn entry-image-arrow entry-image-arrow-right" onClick={() => changePicture(1)}>
                        &#x2794;
                    </button>
                </div>
                <EntryImage entryImage={currentImage}/>
            </div>
        </>
    )
}