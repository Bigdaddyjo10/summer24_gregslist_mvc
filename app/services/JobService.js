import { AppState } from "../AppState.js"
import { Job } from "../models/Jobs.js";

class JobService {

    createJob() {
        console.log("We got brad!");
        // event.preventDefault()
        // const jobs = AppState.jobs
    }
}

export const jobService = new JobService()