function placeAnOrder(requestNumber){

    console.log("Costomer Request:", requestNumber);

    cookAndGivenFood(function () {
        console.log("Given Food Request", requestNumber);
    });
}

function cookAndGivenFood(yellBack){
    setTimeout(yellBack, 4000);
}

console.log(placeAnOrder(1)); 
console.log(placeAnOrder(2));
console.log(laceAnOrder(3));
console.log(placeAnOrder(4));
console.log(placeAnOrder(5));
console.log(placeAnOrder(6));
console.log(placeAnOrder(7));
console.log(placeAnOrder(8));
console.log(placeAnOrder(9));



