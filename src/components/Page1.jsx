import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext } from "react";
import PageContext  from "../context/context";

export default function Page1 (){
    const {updatePageNumber,name,updateName}=useContext(PageContext);

    return (
        <div
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around',
                height:'40%',
                // background:'red'
            }}
        >
            <div
                style={{ display:'flex', flexDirection:'column',}}>
                <Typography variant="h4" component="h2">
                    Welcome! First things first...
                </Typography>
                <Typography variant="subtitle1" component="h6" style={{alignSelf:'center',color:'grey'}}>
                    You can always change the later.
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Full Name
                </Typography>
                <TextField 
                    placeholder={'Setve Jobs'}  
                    style={{width:'100%'}} 
                    value={name} 
                    onChange={(e)=>{updateName(e.target.value)}}
                />
            </div>
            <div>
            <Typography variant="subtitle1" gutterBottom component="div">
                Display Name
            </Typography>
            <TextField placeholder={'Steve'} style={{width:'100%'}}/>
            </div>
            <Button variant="contained" color="secondary" onClick={updatePageNumber}>
                Create Workspace
            </Button>
        </div>
    )
}