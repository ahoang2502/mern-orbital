import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Blogs } from "./pages/Blogs";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/blogs" element={<Blogs />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
