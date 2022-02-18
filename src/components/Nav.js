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
					<Link className="nav-link" to="home" smooth={true} duration={2000}>
						<img
							src={process.env.PUBLIC_URL + "/img/logo.png"}
							alt="Logo"
							className="logo-img"
						/>
					</Link>
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
					<Link className="nav-link" to="cv" smooth={true} duration={2000}>
						CV
					</Link>
				</div>
				<div className="social-links">
					<Link className="nav-link">
						<i class="fab fa-github"></i>
					</Link>
					<Link className="nav-link">
						<i class="fab fa-linkedin-in"></i>
					</Link>
					<Link className="nav-link">
						<i class="fab fa-twitter"></i>
					</Link>
				</div>
			</nav>
		</div>
	);
};
