import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
	const path = useLocation().pathname;

  

	return (
		<Navbar className="border-b-2">
			<Link
				to="/"
				className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
			>
				{/* <img src="../assets/logo.svg" /> */}
				Orbital
			</Link>

			<form>
				<TextInput
					type="text"
					placeholder="Search..."
					rightIcon={AiOutlineSearch}
					className="hidden lg:inline "
				/>
			</form>

			<button className="p-2 rounded-full border border-zinc-300 hidden sm:flex items-center justify-center hover:bg-zinc-100">
				<AiOutlineSearch size={13} />
			</button>

			<div className="flex gap-2 md:order-2 items-center">
				<button className="p-2 rounded-full border border-zinc-300 hidden sm:flex items-center justify-center hover:bg-zinc-100">
					<FaMoon size={13} color="#1e293b" />
				</button>

				<Link to="/sign-in">
					<Button
						className="bg-black text-white p-0 hover:bg-black/80"
						color=""
					>
						Login
					</Button>
				</Link>

				<Navbar.Toggle />
			</div>

			<Navbar.Collapse>
				<Navbar.Link active={path === "/"} as={"div"}>
					<Link
						to="/"
						className="focus:font-semibold focus:text-black focus:bg-zinc-100 hover:font-semibold hover:text-black  py-1.5 px-2 rounded-lg"
					>
						Home
					</Link>
				</Navbar.Link>

				<Navbar.Link active={path === "/about"} as={"div"}>
					<Link
						to="/about"
						className="focus:font-semibold focus:text-black focus:bg-zinc-100 hover:font-semibold hover:text-black  py-1.5 px-2 rounded-lg"
					>
						About
					</Link>
				</Navbar.Link>

				<Navbar.Link active={path === "/blogs"} as={"div"}>
					<Link
						to="/blogs"
						className="focus:font-semibold focus:text-black focus:bg-zinc-100 hover:font-semibold hover:text-black  py-1.5 px-2 rounded-lg"
					>
						Blogs
					</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};
