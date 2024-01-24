import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<div className="min-h-screen mt-10 ">
			<div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
				{/* Left-side */}
				<div className="flex-1">
					<Link to="/" className="font-bold dark:text-white text-4xl">
						{/* <img src="../assets/logo.svg" /> */}
						Orbital
					</Link>

					<p className="text-sm mt-5 ">
						This is a demo project. You can sign up with your email and password
						or with Google
					</p>
				</div>

				{/* Right-side */}
				<div className="flex-1">
					<form className="flex flex-col gap-4">
						<input
							id="username"
							type="text"
							placeholder="Username"
							className="rounded-[0.2rem] border border-zinc-300 text-sm ring-pink-300 shadow-sm"
						/>

						<input
							id="email"
							type="email"
							placeholder="Email"
							className="rounded-[0.2rem] border border-zinc-300 text-sm ring-pink-300 shadow-sm"
						/>

						<input
							id="password"
							type="password"
							placeholder="Password"
							className="rounded-[0.2rem] border border-zinc-300 text-sm ring-pink-300 shadow-sm"
						/>

						<button
							type="submit"
							className="bg-black dark:bg-zinc-100 text-white dark:text-black py-2.5 rounded-[0.2rem] text-sm font-medium hover:bg-black/80 dark:hover:bg-white/80"
						>
							Sign Up
						</button>
					</form>

					<div className="flex gap-2 text-sm mt-5">
						<span className="text-zinc-500">Have an account?</span>
						<Link to="/sign-in" className="underline">
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
