import { TextField } from '@mui/material';
import { Button } from '@mui/material'
import MyAppBar from './MyAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FormUserDetails = ({
    nextStep,
    firstName,
    lastName,
    email,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange
}) => {

    const handleContinue = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <ThemeProvider theme={theme}>
            <MyAppBar title="Enter User Details"/>
            <TextField 
                label="First Name" 
                variant="outlined" 
                onChange={handleFirstNameChange}
                value={firstName}
                id='firstName'
            />
            <TextField 
                label="Last Name" 
                variant="outlined" 
                onChange={handleLastNameChange}
                value={lastName}
                id='lastName'
            />
            <TextField 
                label="Email" 
                variant="outlined" 
                onChange={handleEmailChange}
                value={email}
                id='email'
            />
            <Button variant='contained' onClick={handleContinue}>Continue</Button>

        </ThemeProvider>
    )
}
const theme = createTheme()
export default FormUserDetails