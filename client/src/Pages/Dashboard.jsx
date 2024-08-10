import React from "react";
import { Navigate } from "react-router";

function Dashboard() {
	const userInStorage = JSON.parse(localStorage.getItem("user"));
	if (!userInStorage) return <Navigate to="/signin" />;
	return (
		<div className="text-white font-semibold bg-slate-700 min-h-[calc(100vh-50px)] place-content-center">
			<h1 className="text-2xl text-center">
				This Dashboard is protected from unauthenticated user
			</h1>
		</div>
	);
}

export default Dashboard;
