import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { signoutSuccess } from "../../redux/user/userSlice";

export const DashSidebar = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const [tab, setTab] = useState("profile");

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tabFromUrl = urlParams.get("tab");

		if (tabFromUrl) setTab(tabFromUrl);
	}, [location]);

	const handleSignout = async () => {
		try {
			const res = await fetch("/api/user/signout", {
				method: "POST",
			});
			const data = await res.json();

			if (!res.ok) console.log(data.message);
			else dispatch(signoutSuccess());
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<Sidebar className="w-full md:w-56">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Link to="/dashboard?tab=profile">
						<Sidebar.Item
							active={tab === "profile"}
							icon={HiUser}
							label={"User"}
							labelColor="dark"
							as="div"
						>
							Profile
						</Sidebar.Item>
					</Link>

					<Sidebar.Item
						icon={HiArrowSmRight}
						className="cursor-pointer"
						onClick={handleSignout}
					>
						Logout
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
};
