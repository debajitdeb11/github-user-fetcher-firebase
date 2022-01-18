/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import {
	TextField,
	Box,
	Typography,
	Button,
	Container,
	Snackbar,
	Alert,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Header from "../Components/Header";
import { UserContext } from "../context/UserContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Signup = () => {
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

	const handleSignUp = () => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed In
				const user = userCredential.user;
				context.setUser({
					email: user.email,
					uid: user.uid,
				});
				// console.log(userCredential);

				setMessage("Redirecting to /");
				setSnackbarType("success");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// console.log(errorMessage);
				setMessage(errorMessage);
				setSnackbarType("error");
			})
			.finally(() => {
				setDisplaySnackBar(true);
			});
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
					<AccountCircleRoundedIcon
						color="secondary"
						sx={{
							height: "64px",
							width: "64px",
							margin: "5px",
						}}
					/>

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

					<Typography
						variant="h4"
						component="h1"
						sx={{
							color: "#6867AC",
						}}
					>
						Sign up
					</Typography>

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
						aria-label="signup"
						onClick={() => handleSignUp()}
					>
						Sign up
					</Button>
				</Box>
				<Footer />
			</Container>
		);
};

export default Signup;
