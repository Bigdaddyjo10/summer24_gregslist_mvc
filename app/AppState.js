import { Car } from './models/Car.js'
import { Job } from './models/Jobs.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**
   * @type {Car[]}
   */
  cars = [
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 2007,
      imgURL: 'https://images.unsplash.com/photo-1552615526-40e47a79f9d7?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 8000,
      mileage: 10000,
      runs: true,
      hasCleanTitle: true,
      fuelType: 'gasoline',
      description: 'zoom zoom',
      color: '#80869c'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 1997,
      imgURL: 'https://images.unsplash.com/photo-1610884447640-42b8ec61a933?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 6000,
      mileage: 200000,
      runs: true,
      hasCleanTitle: false,
      fuelType: 'gasoline',
      description: 'zoom zoom zoom',
      color: '#992943'
    }),
    new Car({
      make: 'Chevrolet',
      model: 'Corvette',
      year: 2016,
      imgURL: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 30000,
      mileage: 20,
      runs: false,
      hasCleanTitle: false,
      fuelType: 'gasoline',
      description: 'Great project car 😉',
      color: '#292649'
    }),
    new Car({
      make: 'Isuzu',
      model: 'Rodeo',
      year: 1996,
      imgURL: 'https://images.unsplash.com/photo-1632407027814-f398db997b4a?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 5000,
      mileage: 280000,
      runs: false,
      hasCleanTitle: false,
      fuelType: 'oats',
      description: 'RIP in the jalopy jungle',
      color: '#8c9197'
    }),
  ]

  jobs = [
    new Job({
      title: 'Food Tester',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      pay: 40.000,
      hours: '8hr',
      shift: 'Monday-Friday',
      dentalPlans: true
    }),
    new Job({
      title: 'Dog Sitter',
      img: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZyUyMHNpdHRlcnxlbnwwfHwwfHx8MA%3D%3D',
      pay: 20.000,
      hours: '5hr',
      shift: 'Monday-Thursday',
      dentalPlans: true
    }), new Job({
      title: 'New Products Tester!',
      img: 'https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      pay: 90.000,
      hours: '12hr',
      shift: 'Monday-Wednesday',
      startDate: 'date',
      dentalPlans: false
    }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())