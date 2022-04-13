import { AppBar, Button, Toolbar, Box, Grid, Paper, ButtonGroup } from '@mui/material';
import React from 'react';
import DemoPage from './pages/DemoPage';
import WaynePage from './pages/WaynePage';
import DanPage from './pages/DanPage';



export default function AppContent():JSX.Element {
    const [page, setPage] = React.useState(0);

    const [pages, setPages] = React.useState([
        <DemoPage />,
        <DanPage />, 
        <WaynePage />
    ]);
    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateRows: '6vh 94vh',
                width: '100%'
            }}>
                <ButtonGroup fullWidth size='small'>
                    <Button color='primary' variant='contained' onClick={()=>{setPage(0)}}>
                        Tutorial Page
                    </Button>
                    <Button color='primary' variant='contained' onClick={()=>{setPage(1)}}>
                        Dan's Page
                    </Button>
                    <Button color='primary' variant='contained' onClick={()=>{setPage(2)}}>
                        Wayne's Page
                    </Button>
                </ButtonGroup>
                <div>
                    {pages[page]}
                </div>
            </div>
        </>
    )
}