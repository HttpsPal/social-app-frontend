import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleUserStatus } from "../features/LoggedIn";

const navLink = [
	{ title: "home", url: "/" },
	{ title: "login", url: "/login" },
	{ title: "wall", url: "/wall" },
	{ title: "Your Wall", url: "/yourwall" },
];

const Navigation = () => {
	// const dispatch = useDispatch();

	return (
		<header className="z-50 w-full h-20 m:h-36 bg-cyan-400 ">
			<nav className="flex justify-between items-center h-full py-1.5">
				<Link to="/">
					<button className="ml-8">HOME</button>
				</Link>
				<ul className="flex">
					{navLink.map(({ title, url }, i) => (
						<Link to={url} key={i}>
							<li className="inline-block text-left uppercase text-md py-1 px-2">
								{title}
							</li>
						</Link>
					))}
				</ul>
				<div className="mr-12"></div>
			</nav>
		</header>
	);
};

export default Navigation;
