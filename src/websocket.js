import { NotificationManager } from 'react-notifications';

class WebSocketService {
	static instance = null;
	static notification = '';
	callbacks = {};
	static getInstance() {
		if (!WebSocketService.instance) {
			WebSocketService.instance = new WebSocketService();
		}
		return WebSocketService.instance;
	}

	constructor() {
		this.socketRef = null;
		this.permission = null;
	}

	connect() {
		const path = 'ws://127.0.0.1:8000/ws/orders/updates/';
		this.socketRef = new WebSocket(path);
		this.socketRef.onopen = () => {
			console.log('WebSocket opened');
			this.socketRef.send(JSON.stringify({
				message: 'This is a request'
			}));
		}

		this.socketRef.onmessage = event => {
			const data = JSON.parse(event.data);
			if (data.id !== undefined) {
				let audio = new Audio('just-saying.mp3')
				NotificationManager.info("New Order: " + data.price + 'DHS');
				audio.play();
			}
		}

		this.socketRef.onerror = e => {
			console.log(e.message);
		}

		this.socketRef.onclose = () => {
			console.log('WebSocket closed');
			this.connect();
		};

	}


};

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;