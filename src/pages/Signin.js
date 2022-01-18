/* eslint-disable no-unused-vars */
import {
	TextField,
	Box,
	Typography,
	Button,
	Container,
	Snackbar,
	Alert,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import LockIcon from "@mui/icons-material/Lock";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../Components/Footer";

const Signin = () => {
	const context = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displaySnackBar, setDisplaySnackBar] = useState(false);
	const [message, setMessage] = useState("");
	const [snackbarType, setSnackbarType] = useState("success");

	const handleChange = (e) => {
		const { id, value } = e.target;

		if (id === "email") {
			setEmail(value);
		} else {
			setPassword(value);
		}

		// console.log("Email: " + email);
		// console.log("Password: " + password);
	};

	const handleSignin = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed In

				const { uid, email } = userCredential.user;
				context.setUser({
					email: email,
					uid: uid,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				setMessage(errorMessage);
				setSnackbarType("error");
			})
			.finally(() => {
				setDisplaySnackBar(true);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSignin();
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setDisplaySnackBar(false);
	};

	if (context.user?.uid) {
		return <Navigate to="/" replace={true} />;
	} else
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

					<Snackbar
						anchorOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						open={displaySnackBar}
						autoHideDuration={3000}
						onClose={handleClose}
					>
						<Alert
							onClose={handleClose}
							severity={snackbarType}
							sx={{ width: "100%" }}
						>
							{message}
						</Alert>
					</Snackbar>

					<TextField
						id="email"
						label="email"
						variant="outlined"
						required
						type="text"
						color="secondary"
						onChange={handleChange}
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
						onChange={handleChange}
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
						onClick={(e) => handleSubmit(e)}
					>
						Sign in
					</Button>
				</Box>
				<Footer />
			</Container>
		);
};

export default Signin;
