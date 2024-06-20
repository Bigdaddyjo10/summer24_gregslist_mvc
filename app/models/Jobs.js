export class Job {
    constructor(data) {
        this.title = data.title
        this.pay = data.pay
        this.hours = data.hours
        this.shift = data.shift
        this.imgURL = data.img
        this.startDate = data.startDate
        this.dentalPlans = data.dentalPlans
    }
    get cardHTMLTemplate() {
        return `
        <div class="border border-2 border-dark rounded-2 shadow mb-3">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="job-card">
                        <img class="img-fluid" src="${this.imgURL}" alt="" />
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="p-3">
                        <p>${this.title}</p>
                        <p>$${this.pay}</p>
                        <p>${this.hours}</p>
                        <p>${this.shift}</p>
                    </div>
                </div>
            </div>
        </div>
        `

    }
}