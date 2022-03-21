import React from "react";

export const MobImg = ({ data, projectIndex }) => {
	const imgArray = data[projectIndex].img;

	return (
		<aside className="project-aside">
			<div>
				<img
					className="mob-img"
					src={process.env.PUBLIC_URL + imgArray[0]}
					alt={data[projectIndex].name}
				/>
			</div>
		</aside>
	);
};
