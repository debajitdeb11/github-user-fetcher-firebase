import axios from "axios";

export const fetchRepo = async (repos_url) => {

		const { data } = await axios.get(`${repos_url}`)
		return data;

};

export const fetchUser = async (user_id) => {

		const { data } = await axios.get(`https://api.github.com/users/${user_id}`);
		return data;

};
