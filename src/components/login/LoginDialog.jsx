import {useState} from 'react';

import {Box, Dialog, TextField, Button, Typography, styled} from '@mui/material';

import { authenticateSignup } from '../../service/api';

const Component = styled(Box)`
height: 100vh;
width: 100%;
`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 65% no-repeat;
height: 100%;
width: 28%;
padding: 45px 35px;
`

const Login = styled(Typography)`
    color: white;
`
const BelowLogin = styled(Typography)`
    color: #fff;
`
const Wrapper = styled(Box)`
    dispaly: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    font-weight: 600;
    width: 100%;
`;

const OR = styled(Typography)`
    color: #878787;
    text-align: center;
    font-size: 13px;
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    font-weight: 600;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    width: 100%;

`;

const TextStyle = styled(Typography)`
    font-size: 12px;
    color: #878787
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    font-weight: 550;
    text-align: center;
    cursor: pointer;

`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: ''
};



const LoginDialog = ({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signup, setSignup] = useState()


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const onInputChange = (e) => {
        setSignup({...signup ,[e.target.name]: e.target.value});
        // console.log(signup);
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
    }   
    
    return (
        <Dialog  open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'set'}}} >
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                        <Login variant='h5'  >{account.heading}</Login>
                        <BelowLogin style={{marginTop: 20}}>{account.subHeading}</BelowLogin>
                    </Image>
                    {
                        account.view === 'login' ?

                        <Wrapper>
                        <TextField variant="standard"  label="Enter Email/Mobile Number" />
                        <TextField variant="standard"  label="Enter Password" />
                        <TextStyle>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextStyle>
                        <LoginButton>Login</LoginButton>
                        <OR>OR</OR>
                        <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>

                    :   
                        <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last Name" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='confirm password' label="Confirm Password" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Phone Number" />
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        <RequestOTP>Existing User? Log in</RequestOTP>

                    
                        </Wrapper>
                    }
                    

                    
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;