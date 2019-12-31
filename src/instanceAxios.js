import axios from 'axios';

const instance = axios.create({
	headers: {
		Accept: 'application/json, text/plain, */*',
        "Content-Type": "application/x-www-form-urlencoded"
	},
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken',
});

export default instance;