import useCustomHookLogic from '../../utils/hooks/useMousePosition'

import { useState } from 'react';
import logo from '../../logo.svg';
import { Button, Typography } from '@mui/material';

export default function DemoPage() {

    var chad: string = 'chad';

    const [buttonCounter, setButtonCounter] = useState(0);

    const mousePos = useCustomHookLogic();

    const { x, y } = mousePos;

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>dan@dan-jira.com/App.tsx</code> and save to reload.
            </p>
            <Button color='primary' variant='contained' onClick={() => { setButtonCounter(buttonCounter+1) }}>
                {`${buttonCounter} ${chad}`}
            </Button>
            <p>
                <Typography>
                    Mouse position example:  X: {x}  Y: {y}
                </Typography>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </>
    )
}