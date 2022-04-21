import { AppBar, Button, Toolbar, Box, Grid, Paper, ButtonGroup } from '@mui/material';
import React from 'react';
import DemoPage from './pages/DemoPage';
import WaynePage from './pages/WaynePage';
import DanPage from './pages/DanPage';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";




export default function AppContent():JSX.Element {
    return (
        <BrowserRouter>
            <div>
                <nav
                    style={{
                        borderBottom: "solid 2px",
                        paddingBottom: "1rem",
                    }}
                >
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Dan">Dan's Page</Link>
                        </li>
                        <li>
                            <Link to="/Wayne">Wayne's Page</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/Home"
                        element={<DemoPage></DemoPage>}
                    >
                    </Route>
                    <Route
                        path="/Dan"
                        element={<DanPage></DanPage>}
                    >
                    </Route>
                    <Route
                        path="/Wayne"
                        element={<WaynePage></WaynePage>}
                    >
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}