import { Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const PostedJobs = () => {
    const useStyle = makeStyles({
        bgColor: {
            backgroundColor: "#182F59",
            color: "white"

        }
    });
    const { bgColor } = useStyle();

    return (
        <Container>
            <Typography sx={{ mt: 2 }} variant='h5' className={bgColor}>RECENT JOB POST</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>POST NAME</TableCell>
                            <TableCell align="right">TOTAL APPLICANT</TableCell>
                            <TableCell align="right">VACANCIES</TableCell>
                            <TableCell align="right">SHIFT</TableCell>
                            <TableCell align="right">TYPE</TableCell>
                            <TableCell align="right">POST DATE</TableCell>
                            <TableCell align="right">EXPIRE DATE</TableCell>
                            <TableCell align="right">SALARY</TableCell>
                            <TableCell align="right">STATUS</TableCell>
                            <TableCell align="right">ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody> */}
                </Table>
            </TableContainer>
        </Container >
    );
};

export default PostedJobs;