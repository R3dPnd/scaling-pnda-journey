import Card from "../../layout/card/Card"
import "./certs.scss"

export default function CertsContainer() {
    return (
        <>

            <section className="section-certs u-center-text">
                <div className="row">
                    <div className="col-1-of-3">
                        <Card>ol-1-of-3</Card>
                    </div>
                    <div className="col-1-of-3">
                        <Card>ol-1-of-3</Card>
                    </div>
                    <div className="col-1-of-3">
                        <Card>ol-1-of-3</Card>
                    </div>
                </div>
            </section>
        </>
    )
}