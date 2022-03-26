import React from "react";
import "../styles/_contact.scss";
import { ContactForm } from "./ContactForm";
import { Link } from "react-scroll/modules";

export const Contact = () => {
	return (
		<section>
			<article className="green-roll mob-color">
				<h1 className="sect-title" id="contact">
					Contact
				</h1>
				<ContactForm />
			</article>
			<aside className="contact-aside">
				<h2>Connect with me on Social media</h2>
				<div className="contact-social">
					<Link
						className="contact-link"
						href="https://github.com/DevSteg"
						target="_blank"
					>
						<i className="fab fa-github"></i>
					</Link>
					<Link className="contact-link">
						<i className="fab fa-linkedin-in"></i>
					</Link>
					<Link className="contact-link">
						<i className="fab fa-twitter"></i>
					</Link>
				</div>
			</aside>
		</section>
	);
};
