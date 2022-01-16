import { TextField, Box, Typography, Button, Container } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import LockIcon from "@mui/icons-material/Lock";

const Signin = () => {
	return (
		<Container>
			<Header />
			<Box
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<LockIcon
					color="secondary"
					sx={{
						height: "64px",
						width: "64px",
						margin: "5px",
					}}
				/>

				<Typography
					variant="h4"
					component="h1"
					sx={{
						color: "#6867AC",
					}}
				>
					Sign in
				</Typography>

				<TextField
					id="email"
					label="email"
					variant="outlined"
					required
					type="text"
					color="secondary"
					sx={{
						marginTop: "0.8rem",
						marginBottom: "0.3rem",
					}}
				/>
				<TextField
					color="secondary"
					id="password"
					label="password"
					variant="outlined"
					type="password"
					sx={{
						marginTop: "0.8rem",
						marginBottom: "0.3rem",
					}}
				/>

				<Button
					sx={{
						marginTop: "1rem",
					}}
					variant="contained"
					color="secondary"
					size="large"
					aria-label="signin"
				>
					Sign in
				</Button>
			</Box>
		</Container>
	);
};

export default Signin;
