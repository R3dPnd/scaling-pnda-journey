import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import React from 'react';
import SqlInjection from './SqlInjection';
import Authentication from './Authentication';
import DirectoryTraversal from './DirectoryTraversal';
import CMDInjection from './CMDInjection';
import BusinessLogicVuln from './BusinessLogicVuln';

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

    const [openSection4, setOpenSection4] = React.useState(false);
    const handleClickOpenSection4 = () => {
        setOpenSection4(true);
    };
    const handleCloseSection4 = () => {
        setOpenSection4(false);
    };

    
    const [openSection5, setOpenSection5] = React.useState(false);
    const handleClickOpenSection5 = () => {
        setOpenSection5(true);
    };
    const handleCloseSection5 = () => {
        setOpenSection5(false);
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
                Authentication
            </Button>
            <Dialog
                open={openSection2}
                onClose={handleCloseSection2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Authentication/>
            </Dialog>

            <Button variant="outlined" onClick={handleClickOpenSection3}>
                Directory Traversal
            </Button>
            <Dialog
                open={openSection3}
                onClose={handleCloseSection3}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DirectoryTraversal/>
            </Dialog>

            <Button variant="outlined" onClick={handleClickOpenSection4}>
                CMD Injection
            </Button>
            <Dialog
                open={openSection4}
                onClose={handleCloseSection4}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <CMDInjection/>
            </Dialog>

            <Button variant="outlined" onClick={handleClickOpenSection5}>
                CMD Injection
            </Button>
            <Dialog
                open={openSection5}
                onClose={handleCloseSection5}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <BusinessLogicVuln/>
            </Dialog>
        </div>
    )
}