// describe a function
function describe_city (city: string ,country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling a function 
describe_city("Karachi");

describe_city("Islamabad");

describe_city("Berlin","Germany");