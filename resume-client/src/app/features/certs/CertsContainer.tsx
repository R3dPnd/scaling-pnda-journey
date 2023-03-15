import Card, { CardStyle } from "../../layout/card/Card"
import { getCerts } from "./Certs"
import CertsCardBack from "./CertsCard/CertsCardBack"
import CertsCardFront from "./CertsCard/CertsCardFront"

import "./Certs.scss"

export default function CertsContainer() {
    return (
        <>

            <section className="section-certs u-center-text">
                <div className="row">
                    <div className="col-1-of-4">
                        <Card style={CardStyle.diamonds} front={<CertsCardFront cert={getCerts()[0]} />} back={<CertsCardBack />}></Card>
                    </div>
                    <div className="col-1-of-4">
                        <Card style={CardStyle.spades} front={<CertsCardFront cert={getCerts()[0]}/>}  back={<CertsCardBack />}></Card>
                    </div>
                    <div className="col-1-of-4">
                        <Card style={CardStyle.clubs} front={<CertsCardFront cert={getCerts()[0]}/>} back={<CertsCardBack />}></Card>
                    </div>
                    <div className="col-1-of-4">
                        <Card style={CardStyle.hearts} front={<CertsCardFront cert={getCerts()[0]}/>}  back={<CertsCardBack />}></Card>
                    </div>
                </div>
            </section>
        </>
    )
}