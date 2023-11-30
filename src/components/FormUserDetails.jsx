import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const FormUserDetails = ({
    nextStep,
    firstName,
    lastname,
    handleFirstNameChange,
    handleLastNameChange
}) => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar>Enter User Details</AppBar>
        </ThemeProvider>
    )
}
const theme = createTheme()
export default FormUserDetails