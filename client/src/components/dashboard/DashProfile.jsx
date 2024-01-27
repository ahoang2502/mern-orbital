import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import toast from "react-hot-toast";

import { app } from "../../firebase";
import { Error } from "../Error";
import {
	updateFailure,
	updateStart,
	updateSuccess,
} from "../../redux/user/userSlice";

export const DashProfile = () => {
	const [imageFile, setImageFile] = useState(null);
	const [imageFileUrl, setImageFileUrl] = useState(null);
	const [imageFileUploadingProgress, setImageFileUploadingProgress] =
		useState(null);
	const [imageFileUploadError, setImageFileUploadError] = useState(null);
	const [imageFileUploading, setImageFileUploading] = useState(false);
	const [updateUserError, setUpdateUserError] = useState(null);

	const [formData, setFormData] = useState({});

	const filePickerRef = useRef();

	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user);

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			setImageFile(e.target.files[0]);
			setImageFileUrl(URL.createObjectURL(file));
		}
	};

	const uploadImage = async () => {
		setImageFileUploading(true);
		setImageFileUploadError(null);

		const storage = getStorage(app);
		const fileName = new Date().getTime() + imageFile.name;
		const storageRef = ref(storage, fileName);

		// Get uploading info
		const uploadTask = uploadBytesResumable(storageRef, imageFile);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setImageFileUploadingProgress(progress.toFixed(0));
			},
			// eslint-disable-next-line no-unused-vars
			(error) => {
				setImageFileUploadError(
					"Could not upload image (File must be less than 2MB). Please try again"
				);

				setImageFileUploadingProgress(null);
				setImageFile(null);
				setImageFileUrl(null);
				setImageFileUploading(false);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
					setImageFileUrl(downloadUrl);
					setFormData({
						...formData,
						profilePicture: downloadUrl,
					});
					setImageFileUploading(false);
				});
			}
		);
	};

	useEffect(() => {
		if (imageFile) {
			uploadImage();
		}
	}, [imageFile]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setUpdateUserError(null);

		if (Object.keys(formData).length === 0) {
			setUpdateUserError("No changes made");
			return;
		}

		if (imageFileUploading) {
			setUpdateUserError("Please wait for image to upload");
			return;
		}

		try {
			dispatch(updateStart());

			const res = await fetch(`/api/user/update/${currentUser._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();

			if (!res.ok) {
				dispatch(updateFailure(data.message));
				setUpdateUserError(data.message);
			} else {
				dispatch(updateSuccess(data));
				toast.success("Profile updated!");
			}
		} catch (error) {
			dispatch(updateFailure(error.message));
			setUpdateUserError(error.message);
		}
	};

	return (
		<div className="max-w-lg mx-auto p-3 w-full ">
			<h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				{/* Profile Image */}
				<input
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					ref={filePickerRef}
					className="hidden"
				/>

				<div
					className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full relative"
					onClick={() => filePickerRef.current.click()}
				>
					<img
						src={imageFileUrl || currentUser.profilePicture}
						alt="profile-picture"
						className={`rounded-full w-full h-full border-8 dark:border-slate-800 border-slate-200 object-cover ${
							imageFileUploadingProgress &&
							imageFileUploadingProgress < 100 &&
							"opacity-60"
						}`}
					/>
					{imageFileUploadingProgress && (
						<CircularProgressbar
							value={imageFileUploadingProgress || 0}
							text={`${imageFileUploadingProgress}%`}
							strokeWidth={5}
							styles={{
								root: {
									width: "100%",
									height: "100%",
									position: "absolute",
									top: 0,
									left: 0,
								},
								path: {
									stroke: `rgba(65, 152, 199, ${
										imageFileUploadingProgress / 100
									})`,
								},
							}}
						/>
					)}
				</div>

				{imageFileUploadError && <Error error={imageFileUploadError} />}

				{/* User Info */}
				<TextInput
					type="text"
					id="username"
					placeholder="username"
					defaultValue={currentUser.username}
					onChange={handleChange}
				/>
				<TextInput
					type="email"
					id="email"
					placeholder="Email"
					defaultValue={currentUser.email}
					onChange={handleChange}
				/>
				<TextInput
					type="password"
					id="password"
					placeholder="Password"
					onChange={handleChange}
				/>

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

			{updateUserError && <Error error={updateUserError} />}
		</div>
	);
};
