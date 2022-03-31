import React from "react";
import "../styles/_about.scss";

export const About = () => {
	return (
		<section>
			<article className="green-roll mob-color">
				<h1 className="sect-title" id="about">
					About Me
				</h1>
				<div className="about-div">
					<p className="intro-para">
						Developer with experience in HTML5, CSS/SASS, JavaScript (ES5, ES6),
						ReactJS, MongoDB, SQL, Python, Django, Git and Github. I am
						currently learning NodeJS and ExpressJS, I have developed numerous
						projects throughout the full software lifecycle. <br />
					</p>
					<h3 className="about-tag-line">Let me bring your ideas to life!</h3>
				</div>
			</article>
			<aside className="skills-aside">
				<div className="skills-div">
					<div className="three-skill-div">
						<div className="skill">
							<i className="fab fa-html5"></i>
							<h4>HTML5</h4>
						</div>
						<div className="skill">
							<i className="fab fa-css3"></i>
							<h4>CSS3</h4>
						</div>
						<div className="skill">
							<i className="fab fa-sass"></i>
							<h4>Sass</h4>
						</div>
					</div>
					<div className="three-skill-div">
						<div className="skill">
							<i className="fab fa-js"></i>
							<h4>JavaScript</h4>
						</div>
						<div className="skill">
							<i className="fab fa-react"></i>
							<h4>React</h4>
						</div>
						<div className="skill">
							<i className="fab fa-node"></i>
							<h4>Node.js</h4>
						</div>
					</div>
					<div className="three-skill-div">
						<div className="skill">
							<i className="fab fa-python"></i>
							<h4>Python</h4>
						</div>
						<div className="skill">
							<i className="fab fa-git"></i>
							<h4>Git</h4>
						</div>
						<div className="skill">
							<i className="fab fa-bootstrap"></i>
							<h4>Bootstrap</h4>
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
};
