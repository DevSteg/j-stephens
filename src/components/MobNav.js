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
				<i class="fas fa-bars"></i>
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
						<Link className="mob-nav-link">
							<i class="fab fa-github"></i>
						</Link>
						<Link className="mob-nav-link">
							<i class="fab fa-linkedin-in"></i>
						</Link>
						<Link className="mob-nav-link">
							<i class="fab fa-twitter"></i>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};
