/*
Only use it to test your ModPE
*/

//Package control.
class things{
    constructor(Id){
        this.id = Id;
    }
}

var package = new Map();

var free = 99 - package.size;

if (free < 0) {
alert("背包满了!");
package.delete(100);
}

var CarriedItem;

//Debugger.
function SetCarriedItem(id){

CarriedItem = new things(id);

}
//Ents.
class Ent {
    constructor(Id){
        this.id = Id;
    }
}
//Player.
class Player{
constructor(Id,Health,Hunger,X,Y,Z,Riding){
    this.id = Id;
    this.health = Health;
    this.hunger = Hunger;
    this.x = X;
    this.y = Y;
    this.z = Z;
    this.riding = Riding;
}

}
var player = new Player(63,20,20,0,0,0,new Ent(null));
//Ids.
const Podzol = 243;
const TNT = 46;
const 下界反应堆 = 247;
//Time.
var d_n_b = true;
var d_n;
window.setInterval(function(){d_n_b = !d_n_b},1);
if(d_n_b){
    d_n = "白日";
}
else{
    d_n = "黑夜";
}
//Definded functions.
function print(context){
    alert(context);
}
function addItemInventory(id,number,specialdata) {
    for(var a = 0; a < number ; a++){    
    package.set(package.size,new things(id));
        }
        alert("添加成功!");
}
function clientMessage(消息) {
    document.write(消息);
}
function explode(X,Y,Z,半径) {
    alert("位于X:"+X+"Y:"+Y+"Z:"+Z+"发生半径为"+半径+"的爆炸");
}
function getCarriedItme(){

    return CarriedItem.id;

}
function getPlayerEnt (){
    return (player.id);
}
function getPlayerX() {
    return player.x;
}
function getPlayerY() {
    return player.y;
}           
function getPlayerZ() {
    return player.z;
}
function getTile(X,Y,Z) {
    alert ("位于X:"+X+"Y:"+Y+"Z:"+Z+"的方块的id");
}
function preventDefault() {
    alert("已经阻止默认操作");
}
function rideAnimal(实体1,实体2) {
    alert("已将"+实体1+"骑上"+实体2);
}
function name(params) {
    
}
document.write(d_n);