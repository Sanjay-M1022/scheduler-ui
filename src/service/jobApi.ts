export interface JobItem {
    Name: string,
    RemainingTime: number,
    Status: 'pending' | 'running' | 'completed'
}

export interface NewJob {
    name: string,
    requiredTime: number,
}

export async function getJobsList() {
    try {
        const jobsRes = await fetch('api/jobs')
        const data = await jobsRes.json() as JobItem[]
        return {data, error: null}
    } catch(err) {
        return {data: [] as JobItem[], error: err}
    }
}

export async function postNewJob(job: NewJob) {
    try {
        const jobPostRes = await fetch('api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
        return {success: true, response: jobPostRes}
    } catch(error) {
        return {sucess: false, error}
    }
}