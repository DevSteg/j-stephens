import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
	const form = useRef();
	const [status, setStatus] = useState("Submit");

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("Sending...");

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(result) => {
					setStatus("Submit");
					alert("Message Sent");
					console.log(result.text);
				},
				(error) => {
					setStatus("Submit");
					alert("Error sending message, Please try again");
					console.log(error.text);
				}
			);
	};
	return (
		<form ref={form} onSubmit={handleSubmit} className="contact-form">
			<div className="form-div">
				<label htmlFor="name">
					Name <span>*</span>
				</label>
				<input type="text" id="name" name="user_name" required />
			</div>
			<div className="form-div">
				<label htmlFor="email">
					Email <span>*</span>
				</label>
				<input type="email" id="email" name="user_email" required />
			</div>
			<div className="form-div">
				<label htmlFor="contact-num">Contact Number </label>
				<input type="number" id="contact-num" name="user_number" />
			</div>
			<div className="form-div">
				<label htmlFor="message">
					Message <span>*</span>
				</label>
				<textarea id="message" name="message" required />
			</div>
			<button type="submit" className="submit-btn">
				{status}
			</button>
		</form>
	);
};
