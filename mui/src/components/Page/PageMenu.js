import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreVert';

const origin = {
    vertical: 'top',
    horizontal: 'right'
}

export const PageMenu = ({ menuProps }) => {

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    if (menuProps == null) return null

    return (
        <React.Fragment>
            <MoreIcon onClick={handleOpen} />
            <Menu anchorOrigin={origin} transformOrigin={origin} keepMounted
                open={open} onClose={handleClose}>
                <React.Fragment>
                    {menuProps.map( ({url, label}) => (
                        <MenuItem component="a" href={url}>{label}</MenuItem>
                    ))}
                </React.Fragment>
            </Menu>
        </React.Fragment>
    )
}