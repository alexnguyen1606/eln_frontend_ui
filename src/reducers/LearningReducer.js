import * as typeAction from './../constants/TypeActions'
const learningInitialState = {
    status: true
}
const learning = (state = learningInitialState, action) => {
    switch (action.type) {
        case typeAction.SHOW_TAB_LEARNING:
            console.log(state.status);
            return {
                ...state,
                status: !state.status
            }
        default:
            return state
    }
}
export default learning;