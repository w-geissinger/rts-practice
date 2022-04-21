import AppContent from './components/AppContent'

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

//https://coolors.co/333432-4130c5-f7717d-59ffa0-ffeedd
const theme = createTheme({
    palette: {
      primary: {
        light: '#A69DE7',
        main: '#6A5CD6',
        dark: '#261C73',
        contrastText: '#fff',
      },
      secondary: {
        light: '#70716F',
        main: '#50514F',
        dark: '#333432',
        contrastText: '#000',
      },
    },
  });

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <ThemeProvider theme={theme}>
                    <AppContent/>
                </ThemeProvider>
            </header>
        </div>
    );
}

export default App;
