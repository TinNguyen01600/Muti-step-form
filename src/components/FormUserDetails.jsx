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
            <MyAppBar title="Enter User Details" />
            <form action="" style={styles.form}>
                <TextField
                    label="First Name"
                    variant="standard"
                    onChange={handleFirstNameChange}
                    value={firstName}
                    id='firstName'
                    sx={styles.textField}
                />
                <TextField
                    label="Last Name"
                    variant="standard"
                    onChange={handleLastNameChange}
                    value={lastName}
                    id='lastName'
                    sx={styles.textField}
                />
                <TextField
                    label="Email"
                    variant="standard"
                    onChange={handleEmailChange}
                    value={email}
                    id='email'
                    sx={styles.textField}
                />
                <Button
                    variant='contained'
                    onClick={handleContinue}
                    style={styles.button}
                >
                    Continue
                </Button>
            </form>

        </ThemeProvider>
    )
}
const theme = createTheme()
const styles = {
    form: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textField: {
        marginTop: '10px',
        width: '300px'
    },
    button: { margin: '35px' }
}
export default FormUserDetails