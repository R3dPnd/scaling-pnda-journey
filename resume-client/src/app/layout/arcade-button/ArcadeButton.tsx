import "./ArcadeButton.scss"

interface Props{
    label: string;
    color: string;
    onClick: () => void;
}

export default function ArcadeButton(props: Props) {
    return (
        <div className="arcade-btn-container">
            <div className={getButtonBoxClass(props.color)}>
                <a href="#" className={getButtonClass(props.color)} onClick={props.onClick}></a>
            </div>
            <h3 className="arcade-button-label u-center-text">{props.label}</h3>
        </div>
    )
}

function getButtonClass(color: string): string{
   return `arcade-btn arcade-btn-${color}`;
}

function getButtonBoxClass(color: string): string{
    return `arcade-button-box-${color}`;
}