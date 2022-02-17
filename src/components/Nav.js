import React from "react";
import "../styles/_nav.scss";
import { Link } from "react-scroll";

export const Nav = () => {
	return (
		<div>
			<Link
				to="main-content"
				className="skip-to-main"
				smooth={true}
				duration={500}
			>
				Skip to Main
			</Link>
			<nav className="sidenav">
				<div className="nav-list">
					<Link
						className="nav-link"
						to="projects"
						smooth={true}
						duration={2000}
					>
						Projects
					</Link>
					<Link className="nav-link" to="about" smooth={true} duration={2000}>
						About
					</Link>
					<Link className="nav-link" to="contact" smooth={true} duration={2000}>
						Contact
					</Link>
				</div>
				<div className="social-links"></div>
			</nav>
		</div>
	);
};
