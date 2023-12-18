import "./Coin.scss"

interface Props{
    children: any;
    onClick?: () => void
}

export default function Coin(props: Props) {
    return (
        <div className="coin" onClick={props.onClick}>
            {props.children}
        </div>
    ) 
}