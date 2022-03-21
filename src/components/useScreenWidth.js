import { useState, useEffect } from "react";

export const useScreenWidth = () => {
	const [screenwWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

	return screenwWidth;
};
