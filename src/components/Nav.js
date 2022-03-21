import React from "react";
import { Link } from "react-scroll";
import { DeskNav } from "./DeskNav";
import { MobNav } from "./MobNav";
import { useScreenWidth } from "./useScreenWidth";

export const Nav = () => {
	let whatNav = "";
	if (useScreenWidth() < 1200) {
		whatNav = <MobNav />;
	} else {
		whatNav = <DeskNav />;
	}

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
