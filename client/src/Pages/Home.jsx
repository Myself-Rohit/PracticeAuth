import React from "react";

function Home() {
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className=" flex justify-center items-center h-[calc(100vh-50px)] bg-slate-700 ">
			<div className="text-center text-white font-semibold ">
				<h1 className="font-bold text-3xl">
					Hello {(user && user.firstname) || "user"}
				</h1>
				<p>Welcome to Home Page</p>
			</div>
		</div>
	);
}

export default Home;
