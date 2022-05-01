import {
    PAGE_NUMBER,
    UPDATE_NAME
} from '../type'

export default (state,action)=>{

    switch(action.type){

        case PAGE_NUMBER:
            return {
                ...state,
                pageNumber:state.pageNumber+1
            }
        case UPDATE_NAME:
            return {
                ...state,
                name:action.payload
            }

        default:
            return state
    }
}