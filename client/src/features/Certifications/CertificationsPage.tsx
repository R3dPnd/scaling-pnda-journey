import { Accordion, AccordionDetails, AccordionSummary, ListItem, Paper, Typography } from "@mui/material";
import ITTVPro from "./Security+/ITTVPro/ITTVPro";
import ExpandMoreIcon from '@mui/icons-material/Expand';
import Section from "./Security+/ITTVPro/Section";
import SecurityPlusCert from "./Security+/SecurityPlusCert";


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
            <Accordion
                sx={{
                    color: 'primary.main',
                    typography: 'h5',
                    backgroundColor: 'secondary.main'
                }}>
                <AccordionSummary>
                    Security+
                </AccordionSummary>
                <AccordionDetails>
                <Accordion
                        sx={{
                            color: 'primary.main',
                            typography: 'h5',
                            backgroundColor: 'secondary.main'
                        }}>
                        <AccordionSummary>
                            Exam Details
                        </AccordionSummary>
                        <AccordionDetails>
                            <SecurityPlusCert/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            color: 'primary.main',
                            typography: 'h5',
                            backgroundColor: 'secondary.main'
                        }}>
                        <AccordionSummary>
                            Prep Work
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        color: 'primary.main',
                                        typography: 'h6',
                                        backgroundColor: 'secondary.main'
                                    }}
                                >
                                    ITProTV
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <ITTVPro />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}