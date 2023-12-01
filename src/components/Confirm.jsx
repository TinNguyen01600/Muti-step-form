import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Button } from '@mui/material'
import MyAppBar from './MyAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Confirm = ({
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
                        <ListItemButton sx={{width: '500px', textAlign: 'center'}}>
                            <ListItemText primary="First Name" secondary={firstName} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{width: '500px', textAlign: 'center'}}>
                            <ListItemText primary="Last Name" secondary={lastName} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{width: '500px', textAlign: 'center'}}>
                            <ListItemText primary="Email" secondary={email} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{width: '500px', textAlign: 'center'}}>
                            <ListItemText primary="Occupation" secondary={occupation} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{width: '500px', textAlign: 'center'}}>
                            <ListItemText primary="City" secondary={city} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{width: '500px', textAlign: 'center'}}>
                            <ListItemText primary="Bio" secondary={bio} />
                        </ListItemButton>
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
export default Confirm