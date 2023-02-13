import "./Card.scss"

interface Props{
    children: any;

}

export default function Card(props: Props) {
    return (
        <div className="card">
            <div className="card-side card-side-front">
                {props.children}
            </div>
            <div className="card-side card-side-back">
                {props.children}
            </div>
        </div>
    )
}