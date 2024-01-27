import {
	Avatar,
	Button,
	Dropdown,
	DropdownHeader,
	DropdownItem,
	Navbar,
	TextInput,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { toggleTheme } from "../redux/theme/themeSlice";

export const Header = () => {
	const path = useLocation().pathname;

	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);
	const { theme } = useSelector((state) => state.theme);

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

			<button className="p-2 rounded-full border border-zinc-300 hidden sm:flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-slate-700">
				<AiOutlineSearch size={13} />
			</button>

			<div className="flex gap-2 md:order-2 items-center">
				<button
					className="p-2 rounded-full border border-zinc-300 hidden sm:flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-slate-700"
					onClick={() => dispatch(toggleTheme())}
				>
					{theme === "dark" ? (
						<FaSun size={13} color="#f8fafc" />
					) : (
						<FaMoon size={13} color="#1e293b" />
					)}
				</button>

				{currentUser ? (
					<Dropdown
						arrowIcon={false}
						inline
						label={
							<Avatar
								alt="user-avatar"
								img={currentUser.profilePicture}
								rounded
								className="h-8 w-10"
							/>
						}
					>
						<DropdownHeader>
							<span className="block text-sm ">@{currentUser.username}</span>
							<span className="block text-sm font-medium truncate">
								{currentUser.email}
							</span>
						</DropdownHeader>

						<Link to="/dashboard?tab=profile">
							<DropdownItem>Profile</DropdownItem>
						</Link>

						<Dropdown.Divider />

						<DropdownItem>
							<span className="flex justify-between w-full items-center">
								Logout
								<IoLogOutOutline className="h-5 w-5" />
							</span>
						</DropdownItem>
					</Dropdown>
				) : (
					<Link to="/sign-in">
						<Button
							className="bg-black text-white p-0 hover:bg-black/80"
							color=""
						>
							Login
						</Button>
					</Link>
				)}

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
