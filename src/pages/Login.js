import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";
import { useLoginMutation } from "../app/api/authAPI";

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: { username: "", password: "" } });

	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies([]);
	// eslint-disable-next-line no-unused-vars
	const [login, { isLoading }] = useLoginMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async ({ username, password }) => {
		try {
			console.log(username, password);
			const userToken = await login({
				username: username,
				password: password,
			}).unwrap();
			const token = userToken["token"];
			console.log(token);

			dispatch(setCredentials({ username, token }));

			setCookie("username", username, { sameSite: true });
			setCookie("token", token, { sameSite: true });
			reset({ username: "", password: "" });
			navigate("/wall");
		} catch (error) {
			console.log(error.originalStatus);
			console.error(error.message);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label className="" htmlFor="username">
						username
					</label>
					<input
						{...register("username", {
							required: true,
							maxLength: 1000,
						})}
						placeholder="Username..."
						type="text"
						className=""
						name="username"
						id="username"
					/>
				</div>
				<div>
					<label className="" htmlFor="password">
						password
					</label>
					<input
						{...register("password", {
							required: true,
							maxLength: 20000,
						})}
						placeholder="Password..."
						type="password"
						className=""
						name="password"
						id="password"
					/>
				</div>
				<button type="submit">log in</button>
			</form>
			<div>
				<h3>
					don't have an account? <Link to="/register">Sign up</Link>
				</h3>
			</div>
		</>
	);
};

export default Login;
