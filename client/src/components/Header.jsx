import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutStart, logOutSuccess } from "../redux/user/userSlice";

function Header() {
	const { currentUser } = useSelector((state) => state.user);
	const [showModel, setShowModel] = useState(false);
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(logOutStart());
		localStorage.clear();
		dispatch(logOutSuccess());
		setShowModel(false);
	};
	return (
		<div className="py-2 gap-4 bg-slate-900 border-b-4 flex items-center justify-center sm:gap-12 h-[50px]">
			<Link to="/">
				<button
					type="button"
					onClick={() => setShowModel(false)}
					className="py-2 rounded-xl text-white hover:underline font-semibold "
				>
					Home
				</button>
			</Link>
			<Link to="/dashboard">
				<button
					type="button"
					onClick={() => setShowModel(false)}
					className="py-2 rounded-xl text-white hover:underline font-semibold "
				>
					Dashboard
				</button>
			</Link>
			{!currentUser && (
				<Link to="/signin" className="whitespace-nowrap">
					<button
						type="button"
						className="bg-gradient-to-r hover:bg-gradient-to-tr from-cyan-500 to-blue-500 py-2 px-7 rounded-xl text-white hover:underline font-semibold "
					>
						Sign In
					</button>
				</Link>
			)}
			{currentUser && (
				<button
					onClick={() => setShowModel(true)}
					type="button"
					className="whitespace-nowrap bg-gradient-to-r hover:bg-gradient-to-tr from-cyan-500 to-blue-500 py-2 px-7 rounded-xl text-white hover:underline font-semibold "
				>
					Log Out
				</button>
			)}
			{showModel && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-60 bg-gray-400 rounded-md font-semibold text-center place-content-center">
					Are You Sure to get Logged Out?
					<div className="flex gap-2 items-center justify-center mt-5">
						<button
							onClick={handleLogOut}
							className="bg-cyan-700 text-white rounded px-2 py-1 text-sm hover:underline"
						>
							Yes, I am Sure
						</button>
						<button
							onClick={() => setShowModel(false)}
							className="bg-gray-500 text-white rounded px-2 py-1 text-sm hover:underline"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Header;
