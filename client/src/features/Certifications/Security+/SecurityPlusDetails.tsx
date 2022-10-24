import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import SecurityPlusCert from "./SecurityPlusCert";
import ITTVPro from "./ITTVPro/ITTVPro";

export default function() {
    return (
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
                            <SecurityPlusCert />
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
    )
}