import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import loadingReducer from './loading.reducer';
import notifyReducer from './notify.reducer';
import registerReducer from './register.reducer';

const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    notifyReducer,
    registerReducer
})

export default rootReducer;