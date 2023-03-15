import List from "../../../layout/list/List"
import HeadingHighlight from "../../../layout/typography/HeadingHightlight"
import { Cert } from "../Certs"

import "./CertSide.scss"

interface Props {
    cert: Cert
}

export default function CertsCardFront(props: Props) {
    return (
        <>
            <div className="row">
                {/* <h4
                    className="col-1-of-2 card-front-heading">
                    {props.cert.name}
                </h4> */}
                <h4>
                    {props.cert.name}
                </h4>
                <a href={props.cert.link}>
                    <img
                        src={props.cert.badge}
                        alt={props.cert.name}
                        className="card-front-icon col-1-of-2" />
                </a>
            </div>
            <div className="row">
                <h4>
                    {props.cert.date}
                </h4>
                <p>
                    {props.cert.description}
                </p>
            </div>

        </>
    )
}