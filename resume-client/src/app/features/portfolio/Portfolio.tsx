import Project from "./Project/Project"

export default function Portfolio() {
    let projects = [
        {    
            title: "Professional Website",
            subTitle: "React Base Portfolio",
            description: "I created this website to shocase my skills and highlight my technical ability.",
            link: "",
            photos: [],
        }
    ]
    return(
        <>
            {
                projects.map((project) => {
                    return(
                        <Project projectDescription={project}/>
                    )
                })
            }
        </>
    )
}