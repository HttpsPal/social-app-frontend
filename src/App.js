import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import { setCredentials } from "./features/authSlice";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wall from "./pages/Wall";
// import YourWall from "./pages/YourWall";

import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies([]);
	const dispatch = useDispatch();

	if (cookies["token"] && cookies["username"]) {
		dispatch(
			setCredentials({ username: cookies["username"], token: cookies["token"] })
		);
	}

	return (
		<Router>
			<Routes>
				<Route path="/" element={<PublicRoutes />}>
					<Route index element={<Home />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Route>

				<Route element={<ProtectedRoutes />}>
					<Route path="/wall" element={<Wall />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default withCookies(App);
