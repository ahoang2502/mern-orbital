import { useSelector } from "react-redux";
import { TextInput } from "flowbite-react";
import { IoLogOutOutline } from "react-icons/io5";

export const DashProfile = () => {
	const { currentUser } = useSelector((state) => state.user);

	return (
		<div className="max-w-lg mx-auto p-3 w-full ">
			<h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>

			<form className="flex flex-col gap-4">
				<div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
					<img
						src={currentUser.profilePicture}
						alt="profile-picture"
						className="rounded-full w-full h-full border-8 dark:border-slate-800 border-stone-300 object-cover"
					/>
				</div>

				<TextInput
					type="text"
					id="username"
					placeholder="username"
					defaultValue={currentUser.username}
				/>
				<TextInput
					type="email"
					id="email"
					placeholder="Email"
					defaultValue={currentUser.email}
				/>
				<TextInput type="password" id="password" placeholder="Password" />

				<button
					type="submit"
					className="text-sm font-semibold bg-stone-800 hover:bg-stone-800/90 text-white dark:bg-slate-400 dark:hover:bg-slate-400/80 dark:text-slate-900 py-2.5 rounded-md "
				>
					Update
				</button>
			</form>

			<div className=" text-rose-500 text-sm mt-5 flex justify-between">
				<span className="cursor-pointer underline">Delete Account</span>
				<span className="cursor-pointer flex gap-1 items-center underline">
					Logout <IoLogOutOutline className="h-5 w-5" />
				</span>
			</div>
		</div>
	);
};
