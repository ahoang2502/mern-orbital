import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import {
	signInStart,
	signInSuccess,
	signInFailure,
} from "../redux/user/userSlice";

export const SignIn = () => {
	const [formData, setFormData] = useState({});
	const dispatch = useDispatch();
	const { loading: isLoading, error: errorMessage } = useSelector(
		(state) => state.user
	);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.email || !formData.password)
			return dispatch(signInFailure("Please fill out all the fields"));

		try {
			dispatch(signInStart());

			const res = await fetch("/api/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (data.success === false) {
				dispatch(signInFailure(data.message));
			}

			if (res.ok) {
				dispatch(signInSuccess(data));
				navigate("/");
			}
		} catch (error) {
			dispatch(signInFailure(error.message));
		}
	};

	return (
		<div className="min-h-screen mt-20 ">
			<div className="flex p-3 max-w-lg mx-auto flex-col  md:items-center gap-5">
				{/* Left-side */}
				<div className="w-full">
					<Link to="/" className="font-bold dark:text-white text-4xl">
						{/* <img src="../assets/logo.svg" /> */}
						Orbital
					</Link>

					<p className="text-sm mt-5 ">
						This is a demo project. You can sign in with your email and password
						or with Google.
					</p>
				</div>

				{/* Right-side */}
				<div className="w-full">
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<div className="flex flex-col gap-1">
							<label
								htmlFor="email"
								className="text-zinc-500 text-xs font-medium"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="Enter your email address..."
								className="rounded-[0.2rem] border border-zinc-300 text-sm ring-pink-300 shadow-sm"
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label
								htmlFor="password"
								className="text-zinc-500 text-xs font-medium"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								placeholder="*********"
								className="rounded-[0.2rem] border border-zinc-300 text-sm ring-pink-300 shadow-sm"
								onChange={handleChange}
							/>
						</div>

						<button
							type="submit"
							className="bg-black dark:bg-zinc-100 text-zinc-100 dark:text-black py-2 rounded-[0.2rem] text-sm font-medium hover:bg-black/80 dark:hover:bg-zinc-100/80 flex justify-center items-center"
							disabled={isLoading}
						>
							{isLoading ? (
								<AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
							) : (
								"Sign In"
							)}
						</button>
					</form>

					<div className="flex gap-2 text-sm mt-5">
						<span className="text-zinc-500">
							Don&apos;t have an account yet?
						</span>
						<Link to="/sign-up" className="underline">
							Sign Up
						</Link>
					</div>

					{errorMessage && (
						<div className="mt-5 flex items-center gap-2 p-2 bg-rose-50 border border-rose-200 rounded-sm">
							<IoWarning className="text-rose-500" />
							<p className="text-rose-500 text-sm font-medium">
								{errorMessage}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
