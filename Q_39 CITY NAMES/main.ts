// creating a function with parameters with return  values in string
function city_country (city:string , country: string) : string{
    return `${city} , ${country}`;
}

//calling a function nd print the returned the value

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo" , "Japan"));

console.log(city_country("Berlin" ,"Germany"));