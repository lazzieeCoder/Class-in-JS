//Template Literals
// var a = 10;
// var b = 20;
// var c = a+b
// console.log(`the value of "a","b" and "c" is: ${a} ${b} ${c}`)

// console.log("the value of a ,b and c is "+a,b,c)

//this keyword
// const car1 ={
//     Brand: "Hyundai",
//     model: "i20",
//     color: "blue",
//     year: "2023",
//     drive: function(){
//        console.log(`you drive the ${this.Brand}`) 
//     }
// }
// const car2 ={
//     Brand : "Volvo",
//     model: "x90",
//     color: "black",
//     year: "2023",
//     drive: function(){
//         console.log(`you drive the ${this.Brand}`) 
//      }
// }
// car1.drive();
// car2.drive();
//Class using method
// class Car{
//     drive(){
//      console.log("Driving the car")
//     }
//     brake(){
//      console.log("applying the brake")
//     }
// }
// //we are creating a car object using car class
// let car1 = new Car() // let objectname = new classname()
// car1.drive();
// car1.brake();
// //we can resue the class n number of times
// let car2 = new Car() // let car = new classname()
// car2.drive();
// car2.brake();
//class using constructor(properties)
// class Car{
//    constructor(brand,model,color,year){
//   this.brand=brand;
//   this.model=model;
//   this.color=color;
//   this.year=year;
//    }
//    drive(){
//         console.log("Driving the car")
//        }
//        brake(){
//         console.log("applying the brake")
//        }
// } 
// let car1 = new Car("Hyundai","i20","red",2023)
// let car2 = new Car("Volvo","X90","black",2022)
// let car3 = new Car("Nexa","Baleno","blue",2023)
// let car4 = new Car("Mahindra","Thar","white",2022)

// console.log(`All the car colors :
// "car1" :${car1.color} 
// "car2": ${car2.color} 
// "car3": ${car3.color} 
// "car4": ${car4.color}`)

// console.log(car1);
// console.log(car1.name);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// console.log(car2);
// console.log(car2.brand);
// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// console.log(car3);
// console.log(car3.brand);
// console.log(car3.model);
// console.log(car3.color);
// console.log(car3.year);

// console.log(car4);
// console.log(car4.brand);
// console.log(car4.model);
// console.log(car4.color);
// console.log(car4.year);

//getters and setters
// var users = {
//     names: "Bob" //get
// }
// users.names ="Alice" //set
// console.log(users.names);
// var users={
//  get name(){
//     console.log("getting a name")
//   return this._name
//  },
//  set name(n){
//   console.log("setting a name"+" "+n)
//   this._name =n
//  }
// }
// users.name ="Alice" 
// console.log(users.name);
//real time example
// class Car{
//     constructor(power){
//         this._gas=25;
//         this._power = power;
//     }
//     get power(){
       
//         console.log(`${this._power}hp`) // 400hp
//     }
//     get gas(){
//         return `${this._gas}l (${this._gas /50*100}%)`;
//     }
//     set gas(value){
//          if(value>50){
//             value = 50;
//          }
//          else if (value<0){
//             value=0;
//          }
//        this._gas=value
//     }
//     set power(n){
      
//         console.log(`${this._power=n}`)  // 400
//     }
// }
// let car1 = new Car(400);
// car1.gas=100;
// console.log(car1.power)
// console.log(car1.gas)

// class Car{
//     constructor(power){
       
//         this._power = power;
//     }
//     get power(){
       
//         return `${this._power}hp` // 400hp
//     }
//    set power(n){
      
//         retrun `${this._power=n}` // 400
//     }
// }
// let car1 = new Car(400);
// console.log(car1.power)
