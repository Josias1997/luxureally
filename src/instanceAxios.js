import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8000/luxureally/api',
	headers: {
		Accept: 'application/json, text/plain, */*',
        "Content-Type": "application/x-www-form-urlencoded",
	},
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken',
});

export default instance;