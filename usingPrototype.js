function User(){
    this.name = "";
    this.life = 100;
    this.giiveLife = function giveLife (targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name +  " gave 1 life to " + targetPlayer.name + ".");
    }
}
var Tommy = new User();
var Ashley = new User();
Tommy.name = "Tommy";
Ashley.name = "Ashley";


Tommy.giiveLife(Ashley);

function healthStatus() {
    console.log("Tommy life is " + Tommy.life + ".");
    console.log("Ashley life is " + Ashley.life + ".");
}
healthStatus();

User.prototype.bash = function bash(targetPlayer){
    targetPlayer.life -= 10;
    console.log(this.name +  " Bashed " + targetPlayer.name + ".");
}

Ashley.bash(Tommy);

healthStatus();