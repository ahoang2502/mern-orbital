import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Blogs } from "./pages/Blogs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/blogs" element={<Blogs />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
};

export default App;
