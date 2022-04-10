import AppContainer from './components/AppContainer'

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <ThemeProvider theme={theme}>
                    <AppContainer/>
                </ThemeProvider>
            </header>
        </div>
    );
}



function PageLayout() {

}

export default App;
