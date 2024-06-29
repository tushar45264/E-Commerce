import React from 'react'
import Dialog from '@mui/material/Dialog';
import { useState, useContext} from 'react';
import { LoginContext } from '../../context/dataProvider.jsx';
import {Box, TextField, Button, Typography, styled} from "@mui/material";
import { authenticateSignup, authenticateLogin } from '../../service/api.js';
// import useStyles from './styles.js';

const AccountInitials={
    login :{
        view:'Login',
    },
    signup :{
        view:'Signup',
    }
};

const SignupInitials={
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
}

const LogInitials={
    login: '',
    password: '',
}
const LoginDialogue = ({open, setOpen}) => {
    const [login, setLogin] = useState(AccountInitials.login);
    const [signUp, setSignUp] = useState(SignupInitials);
    const {account, setAccount} = useContext(LoginContext);
    const [log,setLog]= useState(LogInitials);
    const [error, setError] = useState(false);
    // const classes = useStyles();

    const toggleAccount = () => {
        setLogin(AccountInitials.signup);
    }

    const handleClose = () => {
        setOpen(false);
        setLogin(AccountInitials.login);
        setError(false);
    };

    const onInputChange = (e) => {
        setSignUp({...signUp, [e.target.name]: e.target.value});
    }

    const signupUser = async () => {
      let response =  await authenticateSignup(signUp);
      if(!response) return;
        handleClose();
        setAccount('');
    }

    const onValueChange = (e) => {
        setLog({...log, [e.target.name]: e.target.value});
    }
     const LoginUser = async () => {
        let response = await authenticateLogin(log);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        } else {
            setError(true);
        }
     }
  return (
            <Dialog open ={open} onClose={()=>handleClose()} PaperProps={{sx:{maxWidth:'unset'}}}>
                <Component>
                <Box style={{display: 'flex', justifyContent: 'space-between', height: '100%'}}>
                {
                    login.view ==='Login' ?
                    <Image>
                    <Typography variant="h5" style={{color: '#fff',fontFamily:'sans-serif'}}>LOGIN</Typography>
                    <Typography style={{color: '#fff'}}>Explore your personalized hub for Orders, Wishlist, and Recommendations.</Typography>
                    </Image>
                   :
                   <Image>
                    <Typography variant="h5" style={{color: '#fff',fontFamily:'sans-serif'}}>Look's like you're new here!</Typography>
                    <Typography style={{color: '#fff'}}>Sign up with your mobile number to get started</Typography>
                    </Image>         
                }
                
                { login.view ==='Login' ?
                <Wrapper>
                    <LogTp>Nex-Change</LogTp>
                    
                    <TextField variant = "standard" onChange={(e)=>{onValueChange(e)}} name='username' label="Enter Username"></TextField>
                    
                    {error && <Error>Please enter a valid username or password</Error> }
                    
                    <TextField variant = "standard" onChange={(e)=>{onValueChange(e)}} name='password' label="Enter Password"></TextField>
                    
                    <Test>By continuing, you agree to Nex-Change's Terms of Use and Privacy Policy.</Test>
                    <LoginButton onClick={()=>LoginUser()}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <SignButton>Signup</SignButton>
                    <NewToFlipkart onClick={()=> toggleAccount()}>New to Nex-Change? Create an account</NewToFlipkart>
                </Wrapper>
                : 
                <Wrapper>
                    <LogTp>Nex-Change</LogTp>
                    <TextField variant = "standard" onChange={(e)=>{onInputChange(e)}} name='name' label="Enter Name"></TextField>
                    <TextField variant = "standard" onChange={(e)=>{onInputChange(e)}} name='username' label="Enter UserName"></TextField>
                    <TextField variant = "standard" onChange={(e)=>{onInputChange(e)}} name='email' label="Enter Email"></TextField>
                    <TextField variant = "standard" onChange={(e)=>{onInputChange(e)}} name='password' label="Enter Password"></TextField>
                    <TextField variant = "standard" onChange={(e)=>{onInputChange(e)}} name='phone' label="Enter Phone"></TextField>
                    <TextField variant = "standard" onChange={(e)=>{onInputChange(e)}} name='address' label="Enter address"></TextField>
                    <LoginButton onClick={()=>{signupUser()}}>Sign Up</LoginButton>
                </Wrapper>
                }
                </Box>
            </Component> 
            </Dialog>
            
  )
}

const Component = styled(Box)`
    height: 70vh;
    width:90vh;
`;

const Image = styled(Box)`
    background: #394867;
    height: 82.5%;
    width: 28%;
    padding: 45px 35px;
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 20px 35px;
    flex: 1;
    & > div, & > p, & > button {
        margin-top: 15px;
    }
`;

const LoginButton = styled(Button)`
background-color: #394867;
font-weight: 600;
color: #fff;
&:hover {
    background-color: #fff;
    color: #394867;
    border: 2px solid #394867;
}
`;

const SignButton = styled(Button)`
background-color: #fff;
font-weight: 600;
color: #394867;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const LogTp = styled(Typography)`
    color: #394867;
    font-weight: 600;
    font-size: 20px;
`;
const Test = styled(Typography)`
font-size: 12px;
color:#878787;
`;

const NewToFlipkart = styled(Typography)`
font-size: 12px;
color:#394867;
font-weight: 600;
cursor: pointer;
text-align: center;
margin-top: 20px;
`;

const Error=styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;


export default LoginDialogue