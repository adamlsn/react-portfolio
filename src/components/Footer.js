import React from "react";

function Footer(){
    return(
        <footer className="d-flex container justify-content-evenly background-primary">
            <h2>
                <a className="svg-img" href="https://github.com/adamlsn" target="_blank" rel="noreferrer">
                    <i class="fab fa-github"></i>
                </a>
            </h2>
            <h2>
                <a className="svg-img" href="https://www.linkedin.com/in/adam-olson-0292171b/" target="_blank" rel="noreferrer">
                    <i src="../assets/small/linkedin.svg" class="fab fa-linkedin"></i>
                </a>
            </h2>
        </footer>
    )
}

export default Footer;