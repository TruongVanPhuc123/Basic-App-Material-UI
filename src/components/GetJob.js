import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CardActions, Button } from '@mui/material';
import AboutItem from "./AboutItem"

function GetJob({ job }) {
    const navigate = useNavigate()
    return (
        <Button size="small" onClick={() => navigate(`/about/${job.id}`)}><AboutItem job={job} /></Button>
    )
}

export default GetJob