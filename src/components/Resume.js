import pdf from '../assets/files/resume.pdf'

function Resume(){

    return(
        <section className="d-flex flex-column align-items-center color-primary my-4">
            <a href={pdf} download="Adam Olson's Resume.pdf" className="mb-4 color-primary"><h2><strong>Download My Full Resume</strong></h2></a>
            <div className="my-2">
                <h3>Front-End Skills</h3>
                <ul>
                    <li>React</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                </ul>
                
                <h3>Back-End Skills</h3>
                <ul>
                    <li>Node Packages</li>
                    <li>Express</li>
                    <li>API Data Handling</li>
                    <li>MongoDB</li>
                    <li>MySql</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                </ul>

                <h3>Education</h3>
                <ul>
                    <li>UW Online Extended Campus Full Stack Bootcamp</li>
                    <li>UW Milwaukee, Washington County: Communications</li>
                    <li>Intern at Skygen <i>formerly WonderBox Technolgies</i> : IT Department</li>
                </ul>

                <h3>Employment</h3>
                <ul>
                    <li className="pb-1">Out & Out Eatery and Catering, 2015-present</li>
                    <ul>
                        <li>Chef</li>
                        <li>Shift Supervisor</li>
                        <li>ServSafe Certified Manager</li>
                        <li>In House Tech Support</li>
                    </ul>
                    <li className="pb-1">Duluth Trading Company</li>
                    <ul>
                        <li>Sales Associate</li>
                    </ul>
                </ul>
            </div>
        </section>
    );
}

export default Resume;