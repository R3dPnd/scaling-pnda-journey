import FloatTest from "../../layout/grid/test/FloatTest"
import "./home.scss"

export default function Home() {
    return (
        <>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Text...
                    </h2>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Heading
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, praesentium? Fugiat eius ab suscipit dicta maiores quo aliquam at, quos eum! Fuga, odio. Tenetur illum incidunt autem quo repellat maxime.
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Heading 2
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, praesentium? Fugiat eius ab suscipit dicta maiores quo aliquam at, quos eum! Fuga, odio. Tenetur illum incidunt autem quo repellat maxime.
                            </p>

                            <a href="#" className="btn-text">Learn more &rarr;</a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="row composition">
                                <img src={require('../../../img/coin-microsoft.png')} alt="microsoft-coin" className="composition__photo composition__photo--p0 col-1-of-4" />
                                <img src={require('../../../img/coin-chase.png')} alt="chase-coin" className="composition__photo composition__photo--p1 col-1-of-4" />
                                <img src={require('../../../img/coin-infosys.png')} alt="infosys-coin" className="composition__photo composition__photo--p2 col-1-of-4" />
                                <img src={require('../../../img/coin-revature.png')} alt="revature-coin" className="composition__photo composition__photo--p3 col-1-of-4" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}