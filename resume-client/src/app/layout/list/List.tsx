import "./List.scss"

interface Props {
    listItems: string[];
}

export default function List(props: Props) {
    return (
        <ul className="list">
            {
                props.listItems.map((item) => {
                    return (
                    <ul className="list-item">
                        {item}
                    </ul>
                )}
            )}
        </ul>
    )
}