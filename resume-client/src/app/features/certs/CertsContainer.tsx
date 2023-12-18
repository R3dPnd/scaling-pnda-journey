import Card, { CardStyle } from "../../layout/card/Card"
import { getCerts } from "./Certs"
import CertsCardBack from "./CertsCard/CertsCardBack"
import CertsCardFront from "./CertsCard/CertsCardFront"

import "./Certs.scss"
import HeadingHighlight from "../../layout/typography/HeadingHightlight"

export default function CertsContainer() {
    return (
        <div className="certifications-container">
            <section className="u-center-text">
                <h2 className="certification-section-title">Certificates</h2>

                <h3 className="certification-section-title">Programming</h3>
                <div className="certification-card-container flex-row-container ">
                    <div className="certification-card flex-item">
                        <Card style={CardStyle.diamonds} front={<CertsCardFront cert={getCerts()[0]} />} back={<CertsCardBack />}></Card>
                    </div>

                </div>
            </section>
        </div>
    )
}