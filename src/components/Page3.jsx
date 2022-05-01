import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { useContext } from "react";
import PageContext from "../context/context";

const classes ={
    paper:{
        height:'160px',
        width:'140px'
    },
    paperParent:{
        display:'flex',
        justifyContent:'space-evenly'
    }
}
export default function Page3 (){
    const {updatePageNumber} = useContext(PageContext)

    return (
        <div
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around',
                height:'40%',
            }}
        >
            <div
                style={{ display:'flex', flexDirection:'column',}}>
                <Typography variant="h4" component="h2">
                    How are you planning to use Eden ?
                </Typography>
                <Typography variant="subtitle1" component="h6" style={{alignSelf:'center',color:'grey'}}>
                    We'll streamline your setup experience accordingly.
                </Typography>
            </div>
            <div
                style={classes.paperParent}
            >
                <Paper style={classes.paper}>
                    <PersonIcon/>    
                    <Typography style={{fontWeight:'bold'}}>
                        With my team
                    </Typography>
                    <Typography style={{color:'grey'}}>
                        Wikis,docs,tasks & projects,all in one place.
                    </Typography>
                </Paper>
                
                <Paper style={classes.paper}>
                    <GroupsIcon />    
                    <Typography style={{fontWeight:'bold'}}>
                        For Myself
                    </Typography>
                    <Typography style={{color:'grey'}}>
                        Write better.Think more clearly.Stay organized.
                    </Typography>
                </Paper>
            </div>
            <Button variant="contained" color="secondary" onClick={updatePageNumber}>
                Create Workspace
            </Button>
        </div>

    )
}