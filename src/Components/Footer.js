import { Container, Link, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
	return (
		<Container
			sx={{
				textAlign: "center",
				mt: "20px",
				p: 5,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
			}}
		>
			<Typography variant="body2" color="text.secondary">
				{"Copyright © "}
				<Link color="inherit" href="mailto:debajitdeb11@gmail.com">
					<strong>Debajit Deb</strong>
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
			<FavoriteIcon color="warning" />
		</Container>
	);
};

export default Footer;
