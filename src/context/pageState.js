import PageReducer from './reducer';
import PageContext from './context';
import { 
    PAGE_NUMBER
} from '../type';
import {useReducer} from 'react';

const PageState =(props)=>{
    const intialState = {
        pageNumber:0,
    }

    const [state, dispatch] = useReducer(PageReducer, intialState);

    const updatePageNumber =()=>{
        dispatch({
            type:PAGE_NUMBER
        })
    }

    return(
        <PageContext.Provider
            value={{
                pageNumber:state.pageNumber,
                updatePageNumber,
            }}
        >
            {props.children}
        </PageContext.Provider>
    )
}

export default PageState;