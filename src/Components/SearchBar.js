/* eslint-disable react/prop-types */
import { Button, Box, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ onSearch, query, setQuery }) => {
	const handleChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	return (
		<Box
			display="grid"
			gridAutoFlow="column"
			justifyContent="center"
			component="form"
		>
			<TextField
				onChange={handleChange}
				id="user-search"
				label="Search User"
				variant="outlined"
				placeholder="Search User"
				type="text"
				size="medium"
				value={query}
			/>
			<Button
				type="btn"
				color="secondary"
				variant="contained"
				size="large"
				onClick={(e) => {
					e.preventDefault();
					onSearch();
					setQuery("");
				}}
			>
				Search
			</Button>
		</Box>
	);
};

export default SearchBar;
