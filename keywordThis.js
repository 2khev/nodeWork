var Hevan = {
    outputFirstName: function() {
        console.log("My name is Hevan.");
        console.log(this === Hevan);
    }
};
Hevan.outputFirstName();
/* logs: My name is Hevan.
   logs: true */

function doImHelping(){
    console.log("I'm helping!");
    console.log(this === global);
};
doImHelping();
/* logs: I'm helping!
   logs: true */