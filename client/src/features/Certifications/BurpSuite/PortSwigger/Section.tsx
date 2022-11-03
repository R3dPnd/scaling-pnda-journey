import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import React from 'react';
import SqlInjection from './SqlInjection';

export default function () {

    const [openSection1, setOpenSection1] = React.useState(false);
    const handleClickOpenSection1 = () => {
        setOpenSection1(true);
    };
    const handleCloseSection1 = () => {
        setOpenSection1(false);
    };

    const [openSection2, setOpenSection2] = React.useState(false);
    const handleClickOpenSection2 = () => {
        setOpenSection2(true);
    };
    const handleCloseSection2 = () => {
        setOpenSection2(false);
    };

    const [openSection3, setOpenSection3] = React.useState(false);
    const handleClickOpenSection3 = () => {
        setOpenSection3(true);
    };
    const handleCloseSection3 = () => {
        setOpenSection3(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpenSection1}>
                SQL Injection
            </Button>
            <Dialog
                open={openSection1}
                onClose={handleCloseSection1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <SqlInjection />
            </Dialog>

            <Button variant="outlined" onClick={handleClickOpenSection2}>
                Section 2
            </Button>
            <Dialog
                open={openSection2}
                onClose={handleCloseSection2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            </Dialog>

            <Button variant="outlined" onClick={handleClickOpenSection3}>
                Section 3
            </Button>
            <Dialog
                open={openSection3}
                onClose={handleCloseSection3}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            </Dialog>
        </div>
    )
}