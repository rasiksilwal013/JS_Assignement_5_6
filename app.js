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