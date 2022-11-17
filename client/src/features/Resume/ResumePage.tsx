import { Box, Grid } from "@mui/material";
import Bio from "./Bio/Bio";
import BioPic from "./Bio/BioPic";
import Skills from "./Skills/Skills";

import './resume.css'
import Timeline from "./WorkHistory/Timeline";

export default function () {
    return (
        <Box>
            <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    backgroundColor: 'secondary.main',
                    radius: '2',
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 1,
                    padding: 1
                }}>
                <Grid xs={10}>
                    <Bio />
                </Grid>
                <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
                    <BioPic />
                </Grid>
                <Grid xs={4}>
                    <Timeline />
                </Grid>
                <Grid xs={8}>
                    <Skills />
                </Grid>
            </Grid>
        </Box>
    )
}