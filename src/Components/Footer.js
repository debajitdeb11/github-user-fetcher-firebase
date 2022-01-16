import { Container, Link, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
	return (
		<Container
			sx={{
				textAlign: "center",
			}}
		>
			<Typography variant="body2" color="text.secondary">
				{"Copyright © "}
				<Link color="inherit" href="mailto:debajitdeb11@gmail.com">
					Debajit Deb
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
			<FavoriteIcon color="warning" />
		</Container>
	);
};

export default Footer;
