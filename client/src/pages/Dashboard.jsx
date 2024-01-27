import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { DashSidebar } from "../components/dashboard/DashSidebar";
import { DashProfile } from "../components/dashboard/DashProfile";

export const Dashboard = () => {
	const location = useLocation();

	const [tab, setTab] = useState("profile");

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const tabFromUrl = urlParams.get("tab");

		if (tabFromUrl) setTab(tabFromUrl);
	}, [location]);

	return (
		<div className="min-h-screen flex flex-col md:flex-row ">
			<div className="md:w-56">
				{/* Sidebar */}
				<DashSidebar />
			</div>

			{/* Profile */}
			{tab === "profile" && <DashProfile />}
		</div>
	);
};
