import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = () => {
const theme = createTheme ({
    palette: {
      border: '#4a148c',
      mainTetx: '#9c27b0'
    },
  })
    return(
        <ThemeProvider theme={theme}>

        </ThemeProvider>
    )
}

export default Theme;