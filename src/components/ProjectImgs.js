import React from "react";

export const ProjectImgs = ({ data, projectIndex }) => {
	return (
		<aside className="project-aside">
			<div className="img-div">
				<img
					className="desktop-img1"
					src={process.env.PUBLIC_URL + data[projectIndex].img[0]}
					alt={data[projectIndex].name + " Desktop"}
				/>
			</div>
			<div className="img-div">
				<img
					className="tablet-img1"
					src={process.env.PUBLIC_URL + data[projectIndex].img[1]}
					alt={data[projectIndex].name + " Tablet"}
				/>
				<img
					className="tablet-img2"
					src={process.env.PUBLIC_URL + data[projectIndex].img[2]}
					alt={data[projectIndex].name + " Tablet"}
				/>
			</div>
			<div className="img-div">
				<img
					className="mobile-img1"
					src={process.env.PUBLIC_URL + data[projectIndex].img[3]}
					alt={data[projectIndex].name + " Mobile"}
				/>
			</div>
		</aside>
	);
};
