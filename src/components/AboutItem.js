import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;',
    textAlign: 'center',
    padding: 4,
};

export default function KeepMountedModal({ job }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Learn More</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {job.title}
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        {job.description}
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        Skill :
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2, gap: 3, mb: 2, }}>
                        {job.skills.map((skill) => (
                            <Chip sx={{ marginRight: 1 }} color="primary" label={skill} size="small" />
                        ))}
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        City : {job.city}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}