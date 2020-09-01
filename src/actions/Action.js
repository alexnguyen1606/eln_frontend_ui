import * as typeAction from './../constants/TypeActions'
export const showTabLearning = (status) => {
    return {
        type: typeAction.SHOW_TAB_LEARNING
    }
}
export const setCourseWare = (courseWare) => {
    console.log("check set course ware", courseWare);
    return {
        type: typeAction.SET_COURSE_WARE,
        courseWare: courseWare
    }
}
export const setDocumentDetail = (document) => {
    return {
        type: typeAction.SET_DOCUMENT_DETAIL,
        document: document
    }
}
export const setUserInfo = (userInfo) => {
    return {
        type: typeAction.SET_USER_INFO,
        userInfo: userInfo
    }
}
export const setToken = (token) => {
    return {
        type: typeAction.SET_TOKEN,
        token: token
    }
}
export const logout = (logout) => {
    return {
        type: typeAction.LOGOUT
    }
}
export const addPosition = (position) => {
    console.log("check add position");
    return {
        type: typeAction.ADD_POSITION,
        position: position
    }
}
export const setPosition = (positions) => {
    return {
        type: typeAction.SET_POSITION,
        positions: positions

    }
}
export const setCourseWareIds = (courseWareIds) => {
    return {
        type: typeAction.SET_COURSE_WARE_IDS,
        courseWareIds: courseWareIds
    }
}