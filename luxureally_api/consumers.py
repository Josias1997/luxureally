from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync


class OrderConsumer(AsyncWebsocketConsumer):
	async def connect(self):
		await self.channel_layer.group_add(
			'updates',
			self.channel_name,
		)
		await self.accept()


	async def disconnect(self, close_code):
		await self.channel_layer.group_discard(
			'updates',
			self.channel_name
		)


	async def receive(self, text_data):
		text_data_json = json.loads(text_data)
		message = text_data_json['message']

		await self.send(text_data=json.dumps({
			'message': message
		}))


	async def send_message(self, event):
		data = event['data']

		await self.send(text_data=json.dumps(data))
