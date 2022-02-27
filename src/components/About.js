import React from "react";
import "../styles/_about.scss";

export const About = () => {
	return (
		<section>
			<article className="green-roll">
				<h1 className="sect-title" id="about">
					About Me
				</h1>
				<div className="about-div"></div>
			</article>
			<aside>
				<div className="skills-div">
					<div className="three-skill-div">
						<div class="skill">
							<i class="fab fa-html5"></i>
							<h4>HTML5</h4>
						</div>
						<div class="skill">
							<i class="fab fa-css3"></i>
							<h4>CSS3</h4>
						</div>
						<div class="skill">
							<i class="fab fa-sass"></i>
							<h4>Sass</h4>
						</div>
					</div>
					<div className="three-skill-div">
						<div class="skill">
							<i class="fab fa-js"></i>
							<h4>JavaScript</h4>
						</div>
						<div class="skill">
							<i class="fab fa-react"></i>
							<h4>React</h4>
						</div>
						<div class="skill">
							<i class="fab fa-node"></i>
							<h4>Node.js</h4>
						</div>
					</div>
					<div className="three-skill-div">
						<div class="skill">
							<i class="fab fa-python"></i>
							<h4>Python</h4>
						</div>
						<div class="skill">
							<i class="fab fa-git"></i>
							<h4>Git</h4>
						</div>
						<div class="skill">
							<i class="fab fa-bootstrap"></i>
							<h4>Bootstrap</h4>
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
};
