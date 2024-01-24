import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="border border-t-4 border-zinc-900 rounded-t-md px-4 py-3 flex items-center justify-center">
			<div className="w-full max-w-7xl">
				<div className="grid w-full justify-between sm:flex md:grid-cols-1">
					<Link
						to="/"
						className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
					>
						{/* <img src="../assets/logo.svg" /> */}
						Orbital
					</Link>
				</div>

				<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 mt-4 sm:gap-6">
					<div className="space-y-2">
						<h3 className="text-sm font-semibold text-zinc-600">ABOUT</h3>
						<div className="flex flex-col gap-1">
							<Link
								to="/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 text-sm font-medium"
							>
								100 JS Projects
							</Link>
							<Link
								to="/about"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 text-sm font-medium"
							>
								Orbital
							</Link>
						</div>
					</div>

					<div className="space-y-2">
						<h3 className="text-sm font-semibold text-zinc-600">FOLLOW US</h3>
						<div className="flex flex-col gap-1">
							<Link
								to="https://github.com/ahoang2502"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 text-sm font-medium"
							>
								Github
							</Link>
							<Link
								to="https://fishta-oh-portfolio.vercel.app"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 text-sm font-medium"
							>
								Portfolio
							</Link>
						</div>
					</div>

					<div className="space-y-2">
						<h3 className="text-sm font-semibold text-zinc-600">LEGAL</h3>
						<div className="flex flex-col gap-1">
							<Link
								to="/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 text-sm font-medium"
							>
								Privacy & Policy
							</Link>
							<Link
								to="/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 text-sm font-medium"
							>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>

				<div className="w-full bg-zinc-300 h-px my-5" />

				<div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center">
					<p className="text-zinc-500 text-sm font-semibold mb-3 sm:mb-0">
						@ {new Date().getFullYear()} Fishta-oh
					</p>

					<div className="text-zinc-500 flex flex-row gap-x-2 ">
						<FaGithub />
						<FaLinkedin />
						<FaTwitter />
						<FaInstagram />
					</div>
				</div>
			</div>
		</footer>
	);
};
