// define a function  to create a car object with optional options
function creat_car(manufacture , model, ...options){
 //initialize a car object with manufacture and model 
 let car = {
    manufacture:manufacture,
    model:model
 };

 // additional option to the car object 
 options.forEach(option => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
 });

 return car;
}

// call the function to create a car object 
let mycar = creat_car("Toyota" ,"Corolla", "Color: Black","Sunroof: True","Year: 2024");

// print the variables to ensures all the information is stored inthe car object 
console.log(mycar);
