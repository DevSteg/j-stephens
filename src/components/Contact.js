import React from "react";
import "../styles/_contact.scss";
import { ContactForm } from "./ContactForm";

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
					<a
						className="contact-link"
						href="https://github.com/DevSteg"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-github"></i>
					</a>
					<a
						className="contact-link"
						href="https://www.linkedin.com/in/james-stephens-75b49085/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin-in"></i>
					</a>
					<a
						className="contact-link"
						href="https://twitter.com/DevSteg"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-twitter"></i>
					</a>
				</div>
			</aside>
		</section>
	);
};
