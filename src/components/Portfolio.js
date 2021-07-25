import {useState} from "react";
import Project from "./Project";

function Portfolio(){

    const [projects] = useState([
        {name: "portrait", url: "https://review-crafts.herokuapp.com/", imgSrc: "../assets/large/portrait.jpg", github: "https://github.com/adamlsn"},
    ])

    return (
        <section className="d-flex flex-column align-items-center color-secondary p-4 mb-4">
            <h2 className="my-3">Portfolio</h2>
            <div className="container d-flex justify-content-evenly flex-wrap">
                {projects.map(project => (
                    <Project project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;