import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";

export const GoogleButton = () => {
	const auth = getAuth(app);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleGoogleClick = async () => {
		const provider = new GoogleAuthProvider();

		provider.setCustomParameters({ prompt: "select_account" });

		try {
			const resultsFromGoogle = await signInWithPopup(auth, provider);

			const res = await fetch("/api/auth/google", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: resultsFromGoogle.user.displayName,
					email: resultsFromGoogle.user.email,
					googlePhotoUrl: resultsFromGoogle.user.photoURL,
				}),
			});
			const data = await res.json();

			if (res.ok) {
				dispatch(signInSuccess(data));
				navigate("/");
			}
		} catch (error) {
			console.log("[GOOGLE_AUTH]", error);
		}
	};

	return (
		<button
			className="bg-white dark:bg-zinc-100 text-black py-1.5 rounded-[0.2rem] text-sm font-medium hover:bg-zinc-100/80 dark:hover:bg-zinc-100/80 flex justify-center items-center border border-zinc-300 shadow-sm"
			type="button"
			onClick={handleGoogleClick}
		>
			<FcGoogle className="h-5 w-5 mr-2" />
			Continue with Google
		</button>
	);
};
