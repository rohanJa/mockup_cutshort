import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";


export default function Page1 (){

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
            <TextField placeholder={'Steve Jobs'}  style={{width:'100%'}}/>
            </div>
            <div>
            <Typography variant="subtitle1" gutterBottom component="div">
                Display Name
            </Typography>
            <TextField placeholder={'Steve'} style={{width:'100%'}}/>
            </div>
            <Button variant="contained" color="secondary">
                Create Workspace
            </Button>
        </div>
    )
}