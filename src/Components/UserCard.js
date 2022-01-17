/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Grid, Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

const UserCard = ({ user }) => {
	const [userData, setUserData] = useState({
		name: "XYZ",
		avatar: "#",
		location: "ABC",
		hireable: false,
		repos_url: "",
	});

	const [repoUrl, setRepoUrl] = useState(null);

	const { avatar_url, name, location, hireable, repos_url } = user;

	useEffect(async () => {
		setUserData({
			...userData,
			name: name,
			avatar: avatar_url,
			hireable: hireable,
			repos_url: repos_url,
			location: location,
		});

		setRepoUrl(repos_url)

	}, [name]);

	return (
		<Grid container columnSpacing={1}>
			<Grid item sm={4} xs="auto">
				<Box display="grid" >
					<Avatar
						src={userData.avatar}
						sx={{
							height: "300px",
							width: "300px",
						}}
					/>

					<Typography
						variant="h2"
						component="h1"
						fontSize={30}
						sx={{ mt: 2, color: "#041C32" }}
					>
						{userData.name}
					</Typography>

					<Typography
						variant="body1"
						component="h1"
						sx={{ mt: 2, color: "#04293A" }}
					>
						Location:
						{userData.location}
					</Typography>

					<Typography
						variant="body1"
						component="h1"
						sx={{ mt: 2, color: "#064663" }}
					>
						Hireable:
						{userData.hireable ? "Yes" : "No"}
					</Typography>
				</Box>
			</Grid>

			<Grid item sm={8} xs="auto">
				<Typography
					variant="h4"
					component="h1"
					sx={{ mt: 2, color: "#325288" }}
				>
					Public Repositories:
				</Typography>
				
				{
					repos_url ? (
				<RepoCard repo_url={repoUrl} />
					) : (<></>)
				}
				
			</Grid>
		</Grid>
	);
};

export default UserCard;
