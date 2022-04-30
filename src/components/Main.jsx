import {Paper} from '@mui/material'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Timeline from './Timeline';
import { useContext } from "react";
import PageContext  from "../context/context";

export default function  Main (){
    const {pageNumber}=useContext(PageContext);

    return (
        <div
            style={{
                height:'inherit',
                width:'inherit',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <Timeline />
            {pageNumber===0&&<Page1 />}
            {pageNumber===1&&<Page2 />}
            {pageNumber===2&&<Page3/>}
        </div>
    )
}