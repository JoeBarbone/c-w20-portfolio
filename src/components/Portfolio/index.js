import React from "react";


function Portfolio() {

    return(

        <section className="portfolio">
        
            <h3>Portfolio</h3>
            

            <div className="work-projects">
                

                <div className="work-secondary-sites">
                    
                    <section className="work-secondary-site">
                        <div>
                        <a href="https://joebarbone.github.io/passgen/" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/passgen.jpg")} alt="password generator screen capture" /></a>
            
                        <div className="work-site-label">
                            <div className="hide-this-section">
                                <p className="site-label-primary">Random Password Generator<a href="https://github.com/JoeBarbone/challenge-w3-password-generator" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2"></i></a></p>
                                <p className="site-label-secondary">HTML/CSS/JavaScript</p>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section className="work-secondary-site">
                        <a href="https://joebarbone.github.io/c-w4-code-quiz/" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/codequiz.jpg")} alt="code quiz screen capture" /></a>
                        <div className="work-site-label">
                            <p className="site-label-primary">Code Quiz<a href="https://github.com/JoeBarbone/c-w4-code-quiz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2"></i></a></p>
                            <p className="site-label-secondary">HTML/CSS/JavaScript</p>
                        </div>
                    </section>

                    <section className="work-secondary-site">
                        <a href="https://joebarbone.github.io/c-w6-weather-app/" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/weather-app.jpg")} alt="weather app screen capture" /></a>
                        <div className="work-site-label">
                            <p className="site-label-primary">Weather App<a href="https://github.com/JoeBarbone/c-w6-weather-app" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2"></i></a></p>
                            <p className="site-label-secondary">HTML/CSS/JavaScript/AJAX</p>
                        </div>
                    </section>

                    <section className="work-secondary-site">
                        <a href="http://JoeBarbone.com" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/joe-barbone.jpg")} alt="joebarbone.com screen capture" /></a>
                        <div className="work-site-label">
                            <p className="site-label-primary">Joe Barbone</p>
                            <p className="site-label-secondary">HTML/CSS</p>
                        </div>
                    </section>

                    <section className="work-secondary-site">
                        <a href="https://interplastsouth.org" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/interplast-south.jpg")} alt="interplastsouth.org screen capture" /></a>
                        <div className="work-site-label">
                            <p className="site-label-primary">Interplast South</p>
                            <p className="site-label-secondary">HTML/CSS/JS/PHP/MySQL</p>
                        </div>
                    </section>

                    <section className="work-secondary-site">
                        <a href="https://taylornicolecreates.com" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/taylor-nicole-creates.jpg")} alt="taylornicolecreates.com screen capture" /></a>
                        <div className="work-site-label">
                            <p className="site-label-primary">Taylor Nicole Creates</p>
                            <p className="site-label-secondary">HTML/CSS/PHP/MySQL</p>
                        </div>
                    </section>

                    <section className="work-secondary-site">
                        <a href="https://mighty-thicket-71293.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="site-img" src={require("../../images/screenshot-desktop-mainmenu.jpg")} alt="mywallet.com screen capture" /></a>
                        <div className="work-site-label">
                            <p className="site-label-primary">My Wallet</p>
                            <p className="site-label-secondary">React/Node/MongoDB/Apollo</p>
                        </div>
                    </section>

                </div>
            </div>

        </section>

    )

}


export default Portfolio;