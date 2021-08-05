import {useState} from "react";
import Project from "./Project";

function Portfolio(){

    const [projects] = useState([
        {name: "Busted Brackets", url: "https://limitless-wildwood-05739.herokuapp.com/", github: "https://github.com/adamlsn/busted-brackets"},
        {name: "Craft Reviews", url: "https://review-crafts.herokuapp.com/", github: "https://github.com/mspierings96/Craft-Reviews"},
        {name: "Songs & Spirits", url: "https://adamlsn.github.io/songsAndSpirits/", github: "https://github.com/adamlsn/songsAndSpirits"},
        {name: "Employee Tracker", url: "https://github.com/adamlsn/employee-tracker", github: "https://github.com/adamlsn/employee-tracker"},
        {name: "Note Taker", url: "https://guarded-shore-32271.herokuapp.com/", github: "https://github.com/adamlsn/note-taker"},
        {name: "Password Generator", url: "https://adamlsn.github.io/password-gen/", github: "https://github.com/adamlsn/password-gen"}
    ])

    return (
        <section className="d-flex flex-column align-items-center color-primary p-4 mb-4">
            <h2 className="my-3">Portfolio</h2>
            <div className="container d-flex justify-content-evenly flex-wrap color-dark">
                {projects.map(project => (
                    <Project project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;