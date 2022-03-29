import React from "react";
import "../styles/_nav.scss";
import { Link } from "react-scroll/modules";

export const DeskNav = () => {
	return (
		<nav className="sidenav">
			<div className="nav-list">
				<Link className="nav-link" to="home" smooth={true} duration={2000}>
					<img
						src={process.env.PUBLIC_URL + "/img/logo.png"}
						alt="Logo"
						className="logo-img"
					/>
				</Link>
				<Link className="nav-link" to="projects" smooth={true} duration={2000}>
					Projects
				</Link>
				<Link className="nav-link" to="about" smooth={true} duration={2000}>
					About
				</Link>
				<Link className="nav-link" to="contact" smooth={true} duration={2000}>
					Contact
				</Link>
				<Link className="nav-link" to="cv" smooth={true} duration={2000}>
					CV
				</Link>
			</div>
			<div className="social-links">
				<a
					className="nav-link"
					href="https://github.com/DevSteg"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					className="nav-link"
					href="https://www.linkedin.com/in/james-stephens-75b49085/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
				<a
					className="nav-link"
					href="https://twitter.com/DevSteg"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-twitter"></i>
				</a>
			</div>
		</nav>
	);
};
