import { Container, Button } from '@mui/material';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

import React from 'react';
import JobFormModal from './JobFormModal';

const CreateJob = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <Container sx={{ mt: 2, textAlign: 'right' }}>
            <Button onClick={handleOpenModal} variant="contained">Create Jobs <Icon sx={{ color: green[500] }}>add_circle</Icon>
            </Button>
            <JobFormModal
                openModal={openModal}
                handleClose={handleClose}

            >

            </JobFormModal>
        </Container>
    );
};

export default CreateJob;