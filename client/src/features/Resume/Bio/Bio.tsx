import { Box, Typography } from "@mui/material";

import '../resume.css'

export default function () {
    return (
        <>
            <Box color="primary">
                <Typography variant="h2" gutterBottom color="primary">
                    Preston Harms
                </Typography>
                <Typography gutterBottom className="bio-body">
                    Mid-level Software Developer with a range of experience in different technologies through out the tech stack.
                </Typography>
            </Box>
        </>
    )
}