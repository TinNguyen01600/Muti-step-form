import MyAppBar from './MyAppBar';
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
            <MyAppBar title="Enter User Details"/>
        </ThemeProvider>
    )
}
const theme = createTheme()
export default FormUserDetails