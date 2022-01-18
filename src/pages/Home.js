/* eslint-disable no-unused-vars */
import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";
import { UserContext } from "../context/UserContext";
import { fetchUser, fetchRepo } from "../helper/apicalls";

const Home = () => {
	const context = useContext(UserContext);

	const [query, setQuery] = useState("");

	const [user, setUser] = useState(null);
	// const [repos, setRepos] = useState([]);

	// handle query
	const handleQuery = async () => {
		let user = undefined;
		try {
			user = await fetchUser(query);
			// console.log(user);
			setUser(user);
			// setQuery("");
			// const gitRepos = await fetchRepo(user.repos_url);
			// setRepos(gitRepos);
		} catch (e) {
			console.log(e);
		}
	};

	if (!context.user?.uid) {
		return <Navigate to="/signin" replace />;
	} else
		return (
			<Container>
				<Header />
				<SearchBar
					onSearch={() => handleQuery()}
					setQuery={setQuery}
					query={query}
				/>
				{user ? <UserCard user={user} /> : <></>}
				<Footer />
			</Container>
		);
};

export default Home;
