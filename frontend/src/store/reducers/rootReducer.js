import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';

const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    notifyReducer
})

export default rootReducer;