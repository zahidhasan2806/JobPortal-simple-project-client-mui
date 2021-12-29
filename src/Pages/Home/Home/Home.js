import { Box } from '@mui/material';
import React from 'react';
import Navigation from '../../../Component/Navigation/Navigation';
import CreateJob from '../CreateJob/CreateJob';
import PostedJobs from '../PostedJobs/PostedJobs/PostedJobs';

const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <CreateJob></CreateJob>
            <PostedJobs></PostedJobs>
        </Box>
    );
};

export default Home;