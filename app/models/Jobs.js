export class Job {
    constructor(data) {

        this.title = data.jobTitle
        this.pay = data.pay
        this.hours = data.hours
        this.shift = data.shift
        this.imgURL = data.jobImage
        this.startDate = data.startDate
        this.dentalPlans = data.dentalPlans
    }
    get cardHTMLTemplate() {
        return `
        <div class="border border-2 border-dark rounded-2 shadow">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="job-card">
                        <img class="img-fluid" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="p-3">
                        <p>Food Tester</p>
                        <p>$40.000</p>
                        <p>8hr</p>
                        <p>Monday-Friday</p>
                       
                    </div>
                </div>
            </div>
        </div>
        `

    }
}