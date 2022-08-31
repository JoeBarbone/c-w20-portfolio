import React from "react";
import profilePic from "../../images/joe_small.png";


function About() {

    return (
        
        <section className="about">

            <h3 id="about">About me</h3>
            
            <div>
                <img src={profilePic} className="img-fluid img-thumbnail my-3" alt="Website Author Joe Barbone" />
            </div>

            <div>
                <p className="about-me-text">
                    Hello! My name is Joe Barbone. I have been in the IT industry for over 30 years. The first seven years were spent as a software developer. I have created
                    multiple large applications such as job cost systems for machine shops and general contractors, as well as creating an entire software suite for an auto
                    insurance broker.
                </p>

                <p className="about-me-text">
                    Even though I would spend the next 25+ years as a systems administrator, I would frequently dabble in things like FoxPro, Visual FoxPro, Visual Basic, C#
                    and other software development programs. With the understanding that most companies and applications are now on the internet, I have decided to take my skills
                    to the world wide web.
                </p>
            </div>
        
        </section>

    )

}


export default About;