import PageReducer from './reducer';
import PageContext from './context';
import { 
    PAGE_NUMBER, UPDATE_NAME
} from '../type';
import {useReducer} from 'react';

const PageState =(props)=>{
    const intialState = {
        pageNumber:0,
        name:''
    }

    const [state, dispatch] = useReducer(PageReducer, intialState);

    const updatePageNumber =()=>{
        dispatch({
            type:PAGE_NUMBER
        })
    }


    const updateName =(name)=>{
        dispatch({
            type:UPDATE_NAME,
            payload:name
        })
    }

    return(
        <PageContext.Provider
            value={{
                pageNumber:state.pageNumber,
                name:state.name,
                updateName,
                updatePageNumber,
            }}
        >
            {props.children}
        </PageContext.Provider>
    )
}

export default PageState;