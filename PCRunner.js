/*
Only use it to test your ModPE
*/
//Minecraft
class modPE{

    getMinecraftVersion() {
        return "1.2alpha";
    }
     leaveGame() {
        window.close();
    }
     log(Log){
        console.log(Log);
        alert("已在控制台打印");
    }
     setFoodItem(Id,材质位置,排列值,补充饥饿值,名字,堆叠数量) {
        alert("已创建"+"Id"+Id+"材质位置"+材质位置+"排列值"+排列值+"补充饥饿值"+补充饥饿值+"名字"+名字+"堆叠数量"+堆叠数量);
    }
    setGameSpeed(帧数){
        alert("已限制帧数"+帧数);
    }
    setItem(Id,材质位置,排列值,名字,堆叠数量){
        alert("已创建"+"Id"+Id+"材质位置"+材质位置+"排列值"+排列值+"名字"+名字+"堆叠数量"+堆叠数量);
    }
    takeScreenshot(路径){
        alert("已截图");
    }
    showTipMessage(文字){
        document.writeln(文字)
    }
}
var ModPE = new modPE();
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
function setNightMode(Yes_or_No) {
    if(Yes_or_No){
        alert("开启晚上模式");
    }
    else{
        return false;
    }
}
function setPosition(实体,X,Y,Z){
    alert ("已将实体传送至"+"X:"+X+"Y:"+Y+"Z:"+Z);
}
function setPositionRelative(实体,X,Y,Z) {
    alert ("已将实体传送至相对于你的"+"X:"+X+"Y:"+Y+"Z:"+Z);
}
function setVelX(实体,距离_格) {
    alert ("已将实体沿X传送"+距离_格+"格");
}
function setVelY(实体,距离_格) {
    alert ("已将实体沿y传送"+距离_格+"格");
}
function setVelZ(实体,距离_格) {
    alert ("已将实体沿Z传送"+距离_格+"格");
}
