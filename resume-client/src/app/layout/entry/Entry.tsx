import "./Entry.scss"
import EntryImage from "./image/EntryImage"
import EntryImageViewer from "./image/EntryImageViewer";

export interface Blerb {
    header: string;
    subHeading: string;
    story: string;
    icon: string;
    iconCaption: string
}

interface Props {
    blerb: Blerb;
}

export default function Entry(props: Props) {
    return (
        <section className="section-stories">
            <div className="u-center-text">
                <h2 className="heading-secondary">
                    {props.blerb.header}
                </h2>
                <h3 className="heading-tertiary">
                    {props.blerb.subHeading}
                </h3>
            </div>
            <div className="row">
                <div className="entry">
                    <figure className="entry-shape">
                        <img src={props.blerb.icon}  alt="Story Icon" className="entry-icon" />
                        <figcaption className="entry-icon-caption" >{props.blerb.iconCaption}</figcaption>
                    </figure>
                    <div className="entry-text">
                        <h3 className="heading-tertiary u-margin-bottom-small">

                        </h3>
                        <p>
                            {props.blerb.story}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}