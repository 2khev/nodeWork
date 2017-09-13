function placeAnOrder(requestNumber){

    console.log("Costomer Request:", requestNumber);

    cookAndGivenFood(function () {
        console.log("Given Food Request", requestNumber);
    });
}

function cookAndGivenFood(yellBack){
    setTimeout(yellBack, 4000);
}

placeAnOrder(1); 
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6));
placeAnOrder(7);
placeAnOrder(8);
placeAnOrder(9);



