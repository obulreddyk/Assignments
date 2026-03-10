interface Assigment01{
//Temperature of a city in degrees Celsius  
degreesCelsius:number,
//Whether a customer has placed an order
order:boolean,
//Person's phone number: "123-456-7890"
phoneNUmber:string,
//Amount of money in a customer's bank account: 1000.50
bankAccount:number,
//Person's email address: "john.doe@example.com"
email:string,
//Coordinates of a location (latitude, longitude): 37.7749, -122.4194
coordinates:[number,number],
//Person's marital status: true or false
maritalStatus:boolean,
//Person's occupation: "Software Engineer"
occupation:string,
//Person's favourite colour: "Blue"
favouriteColour:string,
//Current year: 2023
currentYear:number,

//Number of followers on a social media platform: 1,000,000
followers:number,
//12.Rating of a movie: 7.5
movieRating:number,
//13.Person's blood type: 'A'
bloodType:string,
//14.Title of a book: "To Kill a Mockingbird"
bookTitle:string,
//15.Number of employees in a company: 500
employeeCount:number,

//16.Time of an event: 2:30 PM
eventTime:string,
//17.Name of a country: "United States"
country:string,
//18.Person's eye color: "Brown"
eyeColor:string,
//19.Person's birthplace: "New York City"
birthplace:string,
//20. Distance between two cities: 200.5
distance:number
}
let today = new Date();
let assignment:Assigment01={
    degreesCelsius: 29,
    order: true,
    phoneNUmber: "123-456-7890",
    bankAccount: 10.00,
    email: "obu@gmail.com",
    coordinates: [100.7749, -122.4194],
    maritalStatus: false,
    occupation: "Software Engineer",
    favouriteColour: "Blue",
    currentYear: today.getFullYear(),
    followers: 459,
    movieRating: 7.8,
    bloodType: 'A',
    bookTitle: "To Kill a Mockingbird",
    employeeCount: 500,
    eventTime: "10:30 AM",
    country: "United States",
    eyeColor: "Brown",
    birthplace: "bngl",
    distance: 180
}
console.log(assignment);