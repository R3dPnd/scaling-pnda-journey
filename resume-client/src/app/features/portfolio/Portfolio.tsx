import Project from "./Project/Project"

export default function Portfolio() {
    let projects = [
        {    
            title: "Professional Website",
            subTitle: "React Base Portfolio",
            description: "I created this website to showcase my skills and highlight my technical ability. It's based around an arcade theme. The appliction is written with react and custome scss components.",
            link: "",
            gitLink: "https://github.com/R3dPnd/scaling-pnda-journey",
            photos: [
                {image: require('../../../img/coin-microsoft.png'), caption: "microsoft"}, 
                {image: require('../../../img/coin-infosys.png'), caption: "infosys"}, 
                {image: require('../../../img/coin-chase.png'), caption: "chase"}, 
            ],
            skills: ["React", "Sass"],
        }
    ]
    return(
        <div className="Portfolio">
            {
                projects.map((project) => {
                    return(
                        <Project projectDescription={project}/>
                    )
                })
            }
        </div>
    )
}