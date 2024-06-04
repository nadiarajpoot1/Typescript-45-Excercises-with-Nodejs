// define a function  to create a car object with optional options
function creat_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacture and model 
    var car = {
        manufacture: manufacture,
        model: model
    };
    // additional option to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object 
var mycar = creat_car("Toyota", "Corolla", "Color: Black", "Sunroof: True", "Year: 2024");
// print the variables to ensures all the information is stored inthe car object 
console.log(mycar);
