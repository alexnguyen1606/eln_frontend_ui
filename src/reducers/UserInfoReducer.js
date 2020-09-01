import * as typeAction from './../constants/TypeActions'
import * as SystemConstant from './../constants/SystemConstant'
import { isEmpty } from './../utils/ObjectUtils'

let info = JSON.parse(localStorage.getItem(SystemConstant.USER_INFO));
if (isEmpty(info)) {
    info = {
        FULL_NAME: "Đăng nhạp"
    }
}
const userInfoInitialState = {};
const userInfo = (state = userInfoInitialState, action) => {
    switch (action.type) {
        case typeAction.SET_USER_INFO:
            localStorage.setItem(SystemConstant.USER_INFO, JSON.stringify(action.userInfo))
            return action.userInfo
        default:
            return state
    }
}

export default userInfo; 