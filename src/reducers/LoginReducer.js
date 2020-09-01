import * as typeAction from './../constants/TypeActions';
import * as SystemConstant from './../constants/SystemConstant'
const loginInitialState = JSON.parse(window.localStorage.getItem(SystemConstant.USER_INFO))
const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case typeAction.SET_TOKEN:

            window.localStorage.setItem(SystemConstant.TOKEN, action.token);
            return state;
        case typeAction.LOGOUT:

            localStorage.setItem(SystemConstant.TOKEN, null);
            localStorage.setItem(SystemConstant.USER_INFO, null);
            return null;
        default:
            return state
    }
}
export default login; 