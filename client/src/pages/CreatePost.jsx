import { FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CreatePost = () => {
	return (
		<div className="p-3 max-w-3xl mx-auto min-h-screen">
			<h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>

			<form className="flex flex-col gap-4">
				<div className="flex flex-col gap-4 sm:flex-row justify-between">
					<TextInput
						type="text"
						placeholder="Title"
						required
						id="title"
						className="flex-1"
					/>

					<Select>
						<option value="uncategorized">Select a category</option>
						<option value="javascript">Javascript</option>
						<option value="react">React</option>
						<option value="nextjs">Next.js</option>
					</Select>
				</div>

				<div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
					<FileInput type="file" accept="image/*" />
					<button
						type="button"
						className="text-sm font-medium bg-stone-800 hover:bg-stone-800/90 text-white dark:bg-slate-400 dark:hover:bg-slate-400/80 dark:text-slate-900 py-2.5 rounded-md p-3"
					>
						Upload image
					</button>
				</div>

				<ReactQuill
					them="snow"
					placeholder="Write something here..."
					className="h-64 mb-12"
					required
				/>

				<button
					className="text-sm font-medium bg-lime-500 hover:bg-stone-500/90 text-black dark:bg-slate-400 dark:hover:bg-slate-400/80 dark:text-slate-900 py-2.5 rounded-md p-3"
					type="submit"
				>
					Publish
				</button>
			</form>
		</div>
	);
};
