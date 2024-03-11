import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { CardActions, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import GetJob from './GetJob';

export default function IntroDivider({ coinData }) {


    const handleClick = (job) => {
        console.log(job)
    }
    return (
        coinData.map((job, index) => (
            <Card key={index} variant="outlined" sx={{ maxWidth: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ p: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h5" component="div">
                            {job.title}
                        </Typography>
                    </Stack>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Stack direction="row" spacing={1} sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                        {/* <Chip color="primary" label={<JobSkill jobId={job.skills} />} size="small" /> */}
                        {job.skills.map((skill) => (
                            <Chip color="primary" label={skill} size="small" />
                        ))}
                    </Stack>
                    <Typography color="text.secondary" variant="body2">
                        {job.description}
                    </Typography>
                    <CardActions>
                        <GetJob job={job} />
                    </CardActions>
                </Box>
            </Card>
        ))
    )
}
