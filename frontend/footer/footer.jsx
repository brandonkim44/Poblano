import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="portfolio-container">
                    <h1 onClick={() => window.open("https://www.brandonkim.dev/", "_blank")}>Brandon's Portfolio</h1>
                    <span>Check out my website to get to know me and see my other projects!</span>
                </div>

                <div className="tech-stack-container">
                    <h1>Poblano Tech Stack</h1>
                    <div className="tech-stack-items">
                        <span>JavaScript</span>
                        <span>React/Redux</span>
                        <span>HTML5/CSS3</span>
                        <span>Ruby/Ruby on Rails</span>
                        <span>PostgreSQL</span>
                    </div>
                </div>

                <div className="connect-container">
                    <h4 className="connect-icons-title">CONNECT WITH ME</h4>
                    <div className="connect-icons">
                        <a href="https://www.linkedin.com/in/brandon-kim-0a7391114/">
                            <img className="linkedin-icon" src={window.linkedIcon} alt="linked-in-icon" />
                        </a>
                        <a href="https://github.com/brandonkim44/">
                            <img className="github-icon" src={window.githubIcon} alt="github-in-icon" />
                        </a>
                    </div>
                </div>

                <div>
                    <span className="copyright-message">&#169; 2020 Poblano Mexican Grill</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;