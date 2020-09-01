import { combineReducers } from 'redux';
import learning from './LearningReducer';
import courseWare from './courseWareReducer';
import userInfo from './UserInfoReducer'
import login from './LoginReducer'
let mainReducers = combineReducers({
    learning,
    courseWare,
    userInfo,
    login
});
export default mainReducers;