import axios from 'axios';

export const fetchRepo = async (repos_url) => {
	try {
		const { data } = await axios.get(`${repos_url}`);
		return data;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const fetchUser = async (user_id) => {
	try {
		const { data } = await axios.get(`https://api.github.com/users/${user_id}`);
		return data;
	} catch (e) {
		console.log(e.message);
		return null;
	}
};
