import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';






const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const JobFormModal = ({ openModal, handleClose }) => {
    const handleBookingSubmit = e => {
        alert('submitting');

        // collect data
        // send to the server

        handleClose();
        e.preventDefault();
    }

    return (
        <Modal

            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style}>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Name" variant="outlined" />
                        <FormControl required sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-required-label">Shift</InputLabel>
                            <Select sx={{ minWidth: 130 }}
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                label="SHIFT *"
                            >
                                <MenuItem value="Day">Day</MenuItem>
                                <MenuItem value='Night'>Night</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-required-label">Department</InputLabel>
                            <Select sx={{ minWidth: 130 }}
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                label="DEPARTMENT *"
                            >
                                <MenuItem value="FrontEnd Developer">FrontEnd Developer</MenuItem>
                                <MenuItem value="BackEnd Developer">BackEnd Developer</MenuItem>
                                <MenuItem value="Creative Director">Creative Director</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Vacancy" type='number' variant="outlined" />
                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Salary" type='number' variant="outlined" />
                        <TextField sx={{ width: '90%', m: 1 }}
                            id="outlined-textarea"
                            label="Job Description"
                            placeholder="Job Description"
                            multiline
                        />
                        <TextField sx={{ width: '90%', m: 1 }} id="outlined-basic" label="Name" variant="outlined" />



                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default JobFormModal;