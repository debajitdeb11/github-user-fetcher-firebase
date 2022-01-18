/* eslint-disable no-unused-vars */
import { Box, Button, ButtonGroup, Typography, Grid } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { Link as LL } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
	const context = useContext(UserContext);

	const handleSignout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// console.log("Signout Success");
				context.setUser(null);
			})
			.catch(() => {
				console.log("Something went wrong!");
			});
	};

	return (
		<Grid
			container
			spacing={2}
			sx={{
				display: "flex",
			}}
		>
			<Grid item xs={8}>
				<Typography variant="h4">
					{context.user?.email ? context.user.email : ""}
				</Typography>
			</Grid>

			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row-reverse",
					}}
				>
					<ButtonGroup
						variant="outlined"
						color="secondary"
						aria-label="button group"
					>
						{context.user ? (
							<LL
								to="/"
								style={{
									color: "inherit",
									textDecorationLine: "none",
								}}
							>
								<Button onClick={handleSignout}>Logout</Button>
							</LL>
						) : (
							<Fragment>
								<LL
									to="/signin"
									style={{
										color: "inherit",
										textDecorationLine: "none",
									}}
								>
									<Button>Sign in</Button>
								</LL>

								<LL
									to="/signup"
									style={{
										color: "inherit",
										textDecorationLine: "none",
									}}
								>
									<Button>Sign up</Button>
								</LL>
							</Fragment>
						)}
					</ButtonGroup>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Header;
