from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import luxureally_api.routing

application = ProtocolTypeRouter({
    # Empty for now (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
    	URLRouter(
    		luxureally_api.routing.websocket_urlpatterns
    	)
    )
})
