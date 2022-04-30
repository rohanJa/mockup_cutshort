import {
    PAGE_NUMBER,
} from '../type'

export default (state,action)=>{

    switch(action.type){

        case PAGE_NUMBER:
            return {
                ...state,
                pageNumber:state.pageNumber+1
            }

        default:
            return state
    }
}