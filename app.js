// car class
class Car{
    constructor(brand, model, year, color, price, gas) { // constructor for class to add differenr cars
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
      }

        // honk method to print tuut tuut and car information
        honk(){
            console.log('Tuut tuut');
            console.log(`The brnad name of car : ${this.brand}, Model: ${this.model}, Year:${this.year}, Color: ${this.color} and Price:${this.price}`);
          }

          race(turns){
            for(let i = 1; i<= turns; i++){
                let gasLoss = 5;
    
                //calculation of gas loss
    
                if(this.year !== 2023){
                    gasLoss += (2023 -this.year)
                }
    
                this.gas -= gasLoss;
    
                console.log(`Turn ${i}: ${this.brand} - Gas remaining: ${this.gas} litres`);
            }
          }

    }


    // creating the instances of each car models 

    // instances of car class

const car1 = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const car2 = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const car3 = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const car4 = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const car5 = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const car6 = new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);

// invoking honk method
console.log (`Car 1 Details ${car1.honk()}`);
   

