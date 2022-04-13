import { Grid, Paper, Typography } from "@mui/material";

export default function DanPage(): JSX.Element {
    //declare variables here


    return (
        //return HTML here
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                width: '100%',
                height:'100%'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    width: '100%',
                    height:'100%'
                }}>
                    <div style={{ backgroundColor: 'aliceblue' }} >1</div>
                    <div style={{ backgroundColor: 'royalblue' }} >2</div>
                    <div style={{ backgroundColor: 'aquamarine' }} >3</div>
                    <div style={{ backgroundColor: 'royalblue' }} >2</div>
                    <div style={{ backgroundColor: 'aquamarine' }} >3</div>
                    <div style={{ backgroundColor: 'aliceblue' }} >1</div>
                    <div style={{ backgroundColor: 'aquamarine' }} >3</div>
                    <div style={{ backgroundColor: 'royalblue' }} >2</div>
                    <div style={{ backgroundColor: 'aliceblue' }} >1</div>
                </div>
            </div>

        </>
    )
}