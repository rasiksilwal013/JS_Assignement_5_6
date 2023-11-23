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

    }