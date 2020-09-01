import * as typeAction from './../constants/TypeActions'
const courseWareInitialState = {
    courseWare: {},
    document: {},
    type: 0,
    positions: [],
    courseWareIds: []
}
// 0 : course ware
//1 : document
const courseWare = (state = courseWareInitialState, action) => {

    switch (action.type) {
        case typeAction.SET_COURSE_WARE:
            return {
                ...state,
                type: 0,
                courseWare: action.courseWare

            }
        case typeAction.SET_DOCUMENT_DETAIL:
            console.log("enter dc", action.document);
            return {
                ...state,
                type: 1,
                document: action.document
            }
        case typeAction.ADD_POSITION:
            {
                console.log("check add position 2");
                let positions = state.positions;
                console.log("before", positions);
                positions.push(action.position);

                console.log("after", positions);
                return {
                    ...state,
                    positions: positions
                }
            }
        case typeAction.SET_COURSE_WARE_IDS:
            {
                let courseWareIds = action.courseWareIds;
                return {
                    ...state,
                    courseWareIds: courseWareIds
                }

            }
        case typeAction.SET_POSITION:
            {
                let positions = action.positions;
                return {
                    ...state,
                    positions: positions
                }
            }
        default:
            return state
    }

}
export default courseWare; 