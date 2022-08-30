import React from "react";


function Resume() {

    return (

        <section className="resume">

            <h3>Resume</h3>

            
            
            <div className="m-3">
                Download/view my resume <a href="https://joebarbone.github.io/challenge-w2-portfolio/docs/Resume_Barbone-Joseph_Current.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-download mx-2"></i></a>
            </div>

            <div className="m-3">
                {/* <p> */}
                    Front-end Proficiencies
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                {/* </p> */}

                {/* <p> */}
                    Back-end Proficiencies
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                {/* </p> */}
            </div>
            
            
        
        </section>

        

    )

}


export default Resume;