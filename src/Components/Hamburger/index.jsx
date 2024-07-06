import { Widgets } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar';

const Hamburger = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className='md:hidden block'>
            <IconButton variant="plain" onClick={() => setOpen(true)}>
                <Widgets color="warning" variant="outlined" />
            </IconButton>
            <Sidebar open={open} setOpen={setOpen} />
        </div>
    )
}

export default Hamburger