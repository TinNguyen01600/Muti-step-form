import { TextField } from '@mui/material';
import { Button } from '@mui/material'
import MyAppBar from './MyAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FormPersonalDetails = ({
    nextStep, prevStep,
    occupation,
    city,
    bio,
    handleOccupationChange,
    handleCityChange,
    handleBioChange
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
            <MyAppBar title="Enter Personal Details" />
            <form action="" style={styles.form}>
                <TextField
                    label="Occupation"
                    variant="standard"
                    onChange={handleOccupationChange}
                    value={occupation}
                    id='occupation'
                    sx={styles.textField}
                />
                <TextField
                    label="City"
                    variant="standard"
                    onChange={handleCityChange}
                    value={city}
                    id='city'
                    sx={styles.textField}
                />
                <TextField
                    label="Bio"
                    variant="standard"
                    onChange={handleBioChange}
                    value={bio}
                    id='bio'
                    sx={styles.textField}
                />
                <div id='btn-ctn'>
                    <Button
                        variant='contained'
                        onClick={handleContinue}
                        style={styles.button}
                    >
                        Continue
                    </Button>
                    <Button
                        variant='contained'
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
    textField: {
        marginTop: '10px',
        width: '300px'
    },
    button: { margin: '35px' }
}
export default FormPersonalDetails