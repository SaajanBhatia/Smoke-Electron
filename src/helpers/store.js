import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducer/rootReducer';

const middleware = applyMiddleware( ReduxThunk );
const store = createStore( reducer, middleware );

export default store;