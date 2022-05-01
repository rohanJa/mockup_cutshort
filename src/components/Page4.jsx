import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Icon from '@mui/material/Icon';
import { useContext } from 'react';
import PageContext from '../context/context';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function  Page4 (){
    const {name} = useContext(PageContext);

    return (
        <>
            <Typography variant="h4" component="h2">Congratulations,{name}!</Typography>
            <Typography variant="subtitle1" component="h6" style={{alignSelf:'center',color:'grey'}}>
                    You have compeleted onboarding ,you can start using Eden.
                </Typography>
            <CheckCircleIcon style={{ fontSize: 80 }}  color="secondary"/>
            <Button variant="contained" color="secondary">
                Launch Eden
            </Button>
        </>
    )
}