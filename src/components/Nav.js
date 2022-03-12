import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { DeskNav } from "./DeskNav";
import { MobNav } from "./MobNav";

export const Nav = () => {
	const [screenwWidth, setScreenWidth] = useState(window.innerWidth);
	let whatNav = "";
	if (screenwWidth < 1200) {
		whatNav = <MobNav />;
	} else {
		whatNav = <DeskNav />;
	}

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);

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
			{whatNav}
		</div>
	);
};
