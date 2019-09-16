import React from 'react';
import './../../assets/css/home.css';
import './../../assets/css/project-card.css'
import Projects from './../pages/projects.js'
import Headshot from './../../assets/img/headshot.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Resume from './../../assets/external/Resume.pdf'
import commonData from './../../data/links.json'



function Homepage() {
  return (
    <div>
        <div className="home-section" id="snapshot">
        <div id="snapshotHolder">
        <div id="snapshotImage"><img src={Headshot} alt="" /></div>
        <div id="snpashotText">
            <h1>Jeremy Rivera.</h1>
            <div id="snapshot-information"><h2>Developer.</h2>
            <a href={commonData.linkedin}><FontAwesomeIcon className="faIcon" icon={faLinkedin}/></a>
            <a href={commonData.github}><FontAwesomeIcon className="faIcon" icon={faGithub}/></a>
            <a href={commonData.facebook}><FontAwesomeIcon className="faIcon" icon={faFacebook}/></a>
            <a href={commonData.instagram}><FontAwesomeIcon className="faIcon" icon={faInstagram}/></a>
            </div>
            <div id="snapshot-resume"><a href={Resume}>View Resume</a></div>
        </div>
        </div>
        </div>
    	<div className="home-section" id="about">
    		<h2>About Me</h2>
    		<p>
             Born in 1997, I grew up in Greenwich, CT as the youngest of three
    		 to my two parents. Attending the New York University Tandon School of
    		 Engineering, I am majoring in Computer Science with a double minor in
    		 Game Engineering and Integrated Digital Media. My focus of interest
    		 in these areas revolves around Software, Game, and Front-End Web
    		 Development. My passion for computer science first began in eighth
    		 grade when I was introduced to HTML and CSS. Since then, I have
    		 aimed to solidify and cultivate my interest and skill set by attending
    		 summer camps and high school courses revolving around web and game
    		 development. During my free time I enjoy dancing, playing video games
             with my friends and doing volunteer work. As I often get asked about my
             favorite movies, games and music; here is a quick rundown of some of my
             top picks:
             </p>

             <ul>
                <li>Games: Overcooked 2 and Final Fantasy XIV</li>
                <li>Movies/TV: The Get Down and The Office</li>
                <li>Music Artist: H.E.R. and Daft Punk</li>
            </ul>
    	</div>
    	<div className="home-section" id="education">
    		<h2>Education</h2>
            <ul>
            <li>New York University - Tandon School of Engineering (2015-2019)</li>
            <li>Bachelor of Science in Computer Science</li>
            <li>Minor in Integrated Digital Media</li>
            </ul>
    	</div>
    	<div className="home-section" id="skills">
    		<h2>Skills</h2>
            <div className="home-row">
                <div className="home-column">
                Front-End/Presentation
                <ul>
                    <li>React/Vue</li>
                    <li>Flutter</li>
                    <li>HTML/CSS</li>
                    <li>InDesign</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                </ul>

                </div>

                <div className="home-column">
                Middleware/Back-End
                <ul>
                    <li>Node.JS</li>
                    <li>Firebase</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
                </div>

                <div className="home-column">
                Everyday Life
                <ul>
                    <li>Cooking/Baking</li>
                    <li>Rock Climbing</li>
                    <li>Surfing/Snowboarding</li>
                    <li>Binge Reading</li>
                    <li>Dancing</li>
                </ul>
                </div>
            </div>
    	</div>
    	<div className="home-section" id="projects">
    		<h2>Projects</h2>
            <Projects />
    	</div>
    </div>
  );
}

export default Homepage;