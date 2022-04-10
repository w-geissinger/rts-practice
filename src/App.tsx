import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, createTheme, ThemeProvider } from '@mui/material';

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

    var chad: string = 'chad';

    const [X, setX] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <ThemeProvider theme={theme}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>dan@dan-jira.com/App.tsx</code> and save to reload.
                    </p>
                    <Button color='primary' variant='contained' onClick={() => { setX(X+1) }}>
                         {`${X} ${chad}`}
                    </Button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </ThemeProvider>
            </header>
        </div>
    );
    
    
    
}

export default App;
