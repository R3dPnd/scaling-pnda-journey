import "./Button.scss"

interface Props{
    link:string;
}

export default function Button(props: Props){
    return (
        <div className="button-box">
            <a href={props.link} className="btn btn-white btn-animated">Click Me</a>
        </div>
    )
}