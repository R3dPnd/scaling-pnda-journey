import "./Typography.scss"

interface Props {
    children: any;
}

export default function HeadingHighlight(props: Props) {
    return (
        <h4 className="heading-highlight">
            <span className="heading-span-red">
                {props.children}
            </span>
        </h4>
    )
}