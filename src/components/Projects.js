import React, { useEffect, useState } from "react";
import "../styles/_projects.scss";
import data from "./data.json";
import { ProjectImgs } from "./ProjectImgs";

export const Projects = () => {
	const [projectIndex, setProjectIndex] = useState(0);
	const handleBackClick = () => {
		setProjectIndex((prev) => {
			return prev !== 0 ? prev - 1 : 0;
		});
	};
	const handleForwardClick = () => {
		setProjectIndex((prev) => {
			return prev === data.length - 1 ? 0 : prev + 1;
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setProjectIndex((prev) => {
				return prev === data.length - 1 ? 0 : prev + 1;
			});
		}, 3500);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="green-full">
			<div className="slide-back" onClick={handleBackClick}>
				<i class="fas fa-caret-left"></i>
			</div>
			<article className="green-roll">
				<h1 className="sect-title" id="projects">
					Projects
				</h1>
				<div className="project-div">
					<h2 className="pro-title">
						<span className="project-id">{data[projectIndex].id} - </span>
						{data[projectIndex].name}
					</h2>
					<p className="pro-para">{data[projectIndex].about}</p>
					<div>
						<a
							href={data[projectIndex].source}
							className="link-btn"
							target="_blank"
							rel="noreferrer"
						>
							Source Code
						</a>
						<a
							href={data[projectIndex].live}
							className="link-btn web-link"
							target="_blank"
							rel="noreferrer"
						>
							Live Site
						</a>
					</div>
				</div>
			</article>
			<ProjectImgs data={data} projectIndex={projectIndex} />
			<div className="slide-forward" onClick={handleForwardClick}>
				<i class="fas fa-caret-right"></i>
			</div>
		</section>
	);
};