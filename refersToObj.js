//refrences to objects

var Hevan ={
    foodEats: "Kale and Curry Goat",
    favGender: "French Toast"
};
console.log(Hevan.favGender);//French Toast

var Person = Hevan;
Person.favGender = "Waffle";
console.log(Hevan.favGender); //Waffle



console.log(9 == '9');//true
// "==" compares values so it defaults to true
console.log(9 === '9'); // false
//"===" compares values and "types" so it evaluates to false