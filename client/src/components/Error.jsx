import { IoWarning } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
export const Error = ({ error }) => {
	return (
		<div className="mt-5 flex items-center gap-2 p-2 bg-rose-50 border border-rose-200 rounded-sm">
			<IoWarning className="text-rose-500" />
			<p className="text-rose-500 text-sm font-medium">{error}</p>
		</div>
	);
};
