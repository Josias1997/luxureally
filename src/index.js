import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import foodReducer from './store/reducers/food';
import cartReducer from './store/reducers/cart';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'


const rootReducer = combineReducers({
	food: foodReducer,
	cart: cartReducer,
})
const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(persistedReducer, compose(
	applyMiddleware(thunk)
));

let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router>
				<App />
			</Router>
		</PersistGate>
	</Provider>
, document.getElementById('root'));

