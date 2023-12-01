import MyAppBar from './MyAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Success = () => {
    return (
        <ThemeProvider theme={theme}>
            <MyAppBar title="Success" />
            <div style={styles.form}>
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions</p>
            </div>
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
}
export default Success