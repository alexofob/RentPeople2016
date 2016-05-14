import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { enableBatching } from 'redux-batched-actions';

const logger = createLogger();

const Store = createStore(enableBatching(rootReducer), {}, compose(
    applyMiddleware(ReduxThunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default Store;
