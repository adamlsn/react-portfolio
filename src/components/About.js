import React from "react";

function About(){
    return (
        <section className="color-primary d-flex flex-column align-items-center">
            <h2 className="my-3">About Me</h2>
            <img src={require("../assets/large/portrait.jpg").default} className="my-3 resize" alt="Portrait"></img>
            <p className="my-3">
            Hi! My name is Adam Olson. I live in the greater Milwaukee area with my fianceé, two cats, and
                    a bunch of frying pans. Classically, I'm a chef. I've been working in the food industry for the past 6 years,
                    and have had a passion for cooking all the same since I was younger than I can remember.
                    A couple hobbies include collecting records, raw steel chef knives, and vintage Doc Martens.
                    In addition to that, I've always had a great interest in all things technology.
                    Whenever and wherever possible I've been playing with hardware. It all started with
                    collecting and futzing with audio equipment. Customizing earphone drivers, running cables
                    all over the house, and wiring car stereos. Eventually over time that snowballed into
                    building my own desktop computer a handful of years ago, and that led me down a path of intruige
                    with what makes computers tick. Out of high school, I interned with a small software company that
                    built programs for health insurance companies, specifially in the SQL department. Thinking
                    back on my enjoyment of that process (years later) lead me to apply to the UW Extended campus Full Stack
                    program. Now I'm learning the basics of HTML and CSS, which is really quite a challenge! Hopefully
                    I can learn and grow well alongside the content in the future.
            </p>
        </section>
    )
}

export default About;