import "./Card.scss"

interface Props {
    // children: any;
    front: any;
    back: any;
    style: CardStyle

}

export enum CardStyle {
    hearts,
    spades,
    diamonds,
    clubs
}

export default function Card(props: Props) {
    const style = getStyle(props.style);

    const backClass = `card-side card-side-back ${style}`;

    return (
        <div className="card">
            <div className="card-side card-side-front">
                {props.front}
            </div>
            <div className={backClass}>
                {props.back}
            </div>
        </div>
    )
}

function getStyle(style: CardStyle): string | void {
    switch (style) {
        case (CardStyle.hearts):
            return "card-side-back-hearts";
        case (CardStyle.spades):
            return "card-side-back-spades";
        case (CardStyle.clubs):
            return "card-side-back-clubs";
        case (CardStyle.diamonds):
            return "card-side-back-diamonds";
        default:
            return;
    }
}