import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import foodReducer from './store/reducers/food';
import cartReducer from './store/reducers/cart';
import userReducer from './store/reducers/user';
import adminReducer from './store/reducers/admin';
import thunk from 'redux-thunk';
import BrowserRouter from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'


const rootReducer = combineReducers({
	food: foodReducer,
	cart: cartReducer,
	user: userReducer,
	admin: adminReducer,
});
const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(persistedReducer, composeEnhancers(
	applyMiddleware(thunk)
));

let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
, document.getElementById('root'));

