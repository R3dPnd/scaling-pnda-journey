import './Header.scss'

export default function Header(){
    return (
        <div className="header">
            <div className="logo-box">
                <img src={require('../../../img/bg-red-pnd.png')} alt="Logo" className="logo"/>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main u-center-text">Preston Harms</span>
                    <span className="heading-primary-sub u-center-text">Software Developer</span>
                </h1>
            </div>
        </div>
    )
}