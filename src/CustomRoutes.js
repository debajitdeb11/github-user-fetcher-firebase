import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { UserContext } from "./context/UserContext";
import "./style.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Config/firebaseConfig";

// init firebase
initializeApp(firebaseConfig);

const CustomRoutes = () => {
	const [user, setUser] = useState(null);

	return (
		<Router>
			<UserContext.Provider value={{ user, setUser }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/error" element={<PageNotFound />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</UserContext.Provider>
		</Router>
	);
};

export default CustomRoutes;
