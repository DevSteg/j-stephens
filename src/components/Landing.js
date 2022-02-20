import React from "react";
import "../styles/_landing.scss";

export const Landing = () => {
	return (
		<section>
			<article className="green-roll" id="home">
				<div className="greet-div">
					<h1 className="hi-title">Hi,</h1>
					<h2 className="intro-title">I'm James Stephens</h2>
					<h3 className="info-title">A Web Developer</h3>
					<p className="intro-para">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
				</div>
			</article>
			<aside className="landing-aside">
				<img
					src={process.env.PUBLIC_URL + "/img/logo.png"}
					alt="James Stephens"
				/>
			</aside>
		</section>
	);
};
