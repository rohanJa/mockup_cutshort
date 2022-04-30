import {Paper} from '@mui/material'
import Page1 from './Page1';
import Page2 from './Page1';
import Timeline from './Timeline';

export default function  Main (){

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
            <Page1 />
            <Page2 />
        </div>
    )
}