import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import BurpSuiteCert from "./BurpSuiteCert";

export default function () {
    return (
        <Accordion
            sx={{
                color: 'primary.main',
                typography: 'h5',
                backgroundColor: 'secondary.main'
            }}>
            <AccordionSummary>
                Burp Suite Certified Practitioner
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
                        <BurpSuiteCert />
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
                                sx={{
                                    color: 'primary.main',
                                    typography: 'h6',
                                    backgroundColor: 'secondary.main'
                                }}
                            >
                                PortSwigger
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
    )
}