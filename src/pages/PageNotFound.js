import { Button, Container } from "@mui/material";
import React from "react";
import error from "../assets/error.png";
import Footer from "../Components/Footer";

const PageNotFound = () => {
	return (
		<Container
			fixed
			sx={{
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				alignContent: "center",
			}}
		>
			<img src={error} />

			<Button
				variant="contained"
				color="info"
				href="/"
				sx={{
					mt: 0,
					mb: 2,
				}}
			>
				Go Back
			</Button>

			<Footer />
		</Container>
	);
};

export default PageNotFound;
