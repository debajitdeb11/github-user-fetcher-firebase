/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Grid,
	Link,
} from "@mui/material";

import { fetchRepo } from "../helper/apicalls";

const RepoCard = ({ repo_url }) => {
	const [repos, setRepos] = useState([]);

	useEffect(async () => {
		const repo = await fetchRepo(repo_url);
		setRepos(repo);
	}, [repo_url]);

	return (
		<Grid container rowSpacing={1} columnSpacing={1} mt={2}>
			{repos &&
				repos.map((item) => {
					const { id, name, description, language, html_url, fork } = item;

					if (!fork) {
						return (
							<Grid key={id} item>
								<Box
									display="grid"
									sx={{
										maxWidth: 350,
										minHeight: 200,
										maxHeight: 200,
										minWidth: 350,
									}}
								>
									<Card
										sx={{
											bgcolor: "#eeeeee",
										}}
										variant="outlined"
									>
										<React.Fragment>
											<CardContent>
												<Typography
													sx={{ fontSize: 14 }}
													color="text.secondary"
													gutterBottom
												>
													Word of the Day
												</Typography>
												<Typography variant="h5" component="div">
													{name}
												</Typography>
												<Typography sx={{ mb: 1.5 }} color="text.secondary">
													{language}
												</Typography>
												<Typography variant="body2">
													{description
														? description.length > 10
															? description.slice(0, 30)
															: description
														: ""}
												</Typography>
											</CardContent>
											<CardActions>
												<Link
													href={html_url ? html_url : "#"}
													underline="none"
													color="black"
												>
													Learn More
												</Link>
											</CardActions>
										</React.Fragment>
									</Card>
								</Box>
							</Grid>
						);
					}
				})}
		</Grid>
	);
};

export default RepoCard;
