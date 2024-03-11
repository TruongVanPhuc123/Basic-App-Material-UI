import React from 'react'
import { useParams } from 'react-router-dom'
import jobData from '../data.json'

function DetailJob() {
    const params = useParams();
    const jobId = params.id
    const job = jobData.find(job => job.id === jobId)
    console.log(job)
    return (
        <div>DetailJob</div>
    )
}

export default DetailJob