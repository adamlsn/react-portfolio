function Project({project}){

    const {name, url, github} = project;

    return (

        <div className="card card-format col-12 col-md-5 my-4">
            <img src={require(`../assets/large/${name.replace(/ /g, '')}.png`).default} className='card-img-top card-image' alt={name}/>
            <div className="card-body background-primary d-flex flex-column justify-content-center align-items-center">
                <a href={url} target="_blank"><h3>{name}</h3></a>
                <a href={github} target="_blank"><h3>GitHub</h3></a>
            </div>
        </div>
    );
}

export default Project;