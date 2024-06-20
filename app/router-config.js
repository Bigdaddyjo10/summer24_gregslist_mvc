import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JobController } from "./controllers/JobsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '', //http://localhost:8080
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',  //http://localhost:8080/#/about
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/cars',  //http://localhost:8080/#/cars
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/jobs',  //http://localhost:8080/#/cars
    controllers: [JobController],
    view: 'app/views/JobsView.html'
  }
])