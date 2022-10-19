import { WorkOutline } from "@mui/icons-material";
import { Icon, List, ListItem, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'resume', path: '/Resume' },
    { title: 'about', path: '/About' },
    { title: 'certifications', path: '/Certifications' },
    { title: 'projects', path: '/Projects' }
]

interface Props{
    setTitle: Dispatch<SetStateAction<string>>
}

export default function (props: Props) {
    return (
        <Paper className="side-menu" sx={{ backgroundColor: 'secondary.main', typography: 'h6' }}>
            <List className="side-menu" >
                <ListItem
                    component={NavLink}
                    to='/About'
                    key='About'
                    sx={{ color: 'primary.main', typography: 'h6', backgroundColor: 'secondary.main' }}
                    onClick={()=> props.setTitle("About")}
                >
                    About
                </ListItem>
                <ListItem
                    component={NavLink}
                    to='/Certifications'
                    key='Certifications'
                    sx={{ color: 'primary.main', typography: 'h6', backgroundColor: 'secondary.main' }}
                    onClick={()=> props.setTitle("Certifications")}
                >
                    Certifications
                </ListItem>
                <ListItem
                    component={NavLink}
                    to='/Resume'
                    key='Resume'
                    sx={{ color: 'primary.main', typography: 'h6', backgroundColor: 'secondary.main' }}
                    onClick={()=> props.setTitle("Resume")}
                >
                    Resume
                </ListItem>
            </List>
        </Paper>
    )
}