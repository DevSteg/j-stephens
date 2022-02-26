import React from "react";
import "../styles/_landing.scss";

export const Landing = () => {
	return (
		<section>
			<article className="green-roll" id="home">
				<div className="greet-div">
					<h1 className="hi-title">Hi,</h1>
					<h2 className="intro-title">I'm James Stephens</h2>
					<h4 className="tag-name">
						<span>@</span>DevSteg
					</h4>
					<h3 className="info-title">A Web Developer</h3>
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
