import React, { useState } from "react";
import { Link } from "react-scroll/modules";

export const MobNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="mob-nav">
			<button className="nav-btn" onClick={toggleMenu}>
				<i className="fas fa-bars"></i>
			</button>
			{isOpen && (
				<div className="mob-nav-div" onClick={toggleMenu}>
					<Link
						className="mob-nav-link"
						to="projects"
						smooth={true}
						duration={2000}
					>
						Projects
					</Link>
					<Link
						className="mob-nav-link"
						to="about"
						smooth={true}
						duration={2000}
					>
						About
					</Link>
					<Link
						className="mob-nav-link"
						to="contact"
						smooth={true}
						duration={2000}
					>
						Contact
					</Link>
					<Link className="mob-nav-link" to="cv" smooth={true} duration={2000}>
						CV
					</Link>
					<div className="mob-social-links">
						<a
							className="mob-nav-link"
							href="https://github.com/DevSteg"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github"></i>
						</a>
						<a
							className="mob-nav-link"
							href="https://www.linkedin.com/in/james-stephens-75b49085/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a
							className="mob-nav-link"
							href="https://twitter.com/DevSteg"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter"></i>
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};
