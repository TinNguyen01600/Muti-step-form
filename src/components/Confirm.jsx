import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material'
import MyAppBar from './MyAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FormPersonalDetails = ({
    nextStep, prevStep,
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio,
}) => {

    const handleContinue = (e) => {
        e.preventDefault()
        nextStep()
    }
    const handleBack = (e) => {
        e.preventDefault()
        prevStep()
    }

    return (
        <ThemeProvider theme={theme}>
            <MyAppBar title="Confirm User Data" />
            <form action="" style={styles.form}>
                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City" secondary={city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Bio" secondary={bio} />
                    </ListItem>
                </List>

                <div id='btn-ctn'>
                    <Button
                        variant='contained'
                        onClick={handleContinue}
                        style={styles.button}
                    >
                        Confirm & Continue
                    </Button>
                    <Button
                        variant='outlined'
                        onClick={handleBack}
                        style={styles.button}
                    >
                        Back
                    </Button>
                </div>
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
    button: { margin: '35px' }
}
export default FormPersonalDetails