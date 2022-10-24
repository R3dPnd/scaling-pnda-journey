import { Paper, Typography } from "@mui/material";
import BurpSuiteDetails from "./BurpSuite/BurpSuiteDetails";
import SecurityPlusDetails from "./Security+/SecurityPlusDetails";


export default function () {
    return (
        <Paper sx={{ backgroundColor: 'secondary.main', typography: 'h6' }}>
            <Typography sx={{
                color: 'primary.main',
                typography: 'h3',
                backgroundColor: 'secondary.main'
            }}>
                Certifications
            </Typography>
            <SecurityPlusDetails/>
            <BurpSuiteDetails/>
        </Paper>
    )
}