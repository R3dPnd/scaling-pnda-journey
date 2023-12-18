import "./ArcadeScreen.scss"

interface Props {
    children: any;
}

export default function ArcadeScreen(props: Props) {
    return (
        <div className="arcade-cabinet u-center-text">
            <div className="arcade-screen">
                {props.children}
            </div>
        </div>
    )
}