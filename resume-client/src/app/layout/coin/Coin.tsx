import "./Coin.scss"

interface Props{
    children: any;

}

export default function Coin(props: Props) {
    return (
        <div className="coin">
            {props.children}
        </div>
    )
}