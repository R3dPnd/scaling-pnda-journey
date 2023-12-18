import "./Button.scss"

interface Props{
    children: any;
    className: string;
}

export default function Button(props: Props){
    let clazz = "btn btn-white btn-animated" + props.className;
    return (
        <div className="button-box">
            <a className={clazz}>{props.children}</a>
        </div>
    )
}