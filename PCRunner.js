/*
Only use it to test your ModPE
idea form jside https://tieba.baidu.com/f?kw=jside&ie=utf-8


thanks for 初始状态0.


Copyright (c) 2018 wdsjhehe在路上 All rights reserved.
*/
//Package control.
class things{
    constructor(Id,Number){
        this.id = Id;
        this.number = Number;
    }
}

var package = new Map();

var free = 99 - package.size;

if (free < 0) {
print("背包满了!");
package.delete(100);
}

var CarriedItem;

//Debugger.
function SetCarriedItem(id,Number){

CarriedItem = new things(id,Number);

}
//Ents.
class entity {
    constructor(Id){
        this.id = Id;
    }
    addEffect(实体,药水ID,时间,等级,有无阴影){
        print("给予"+实体+药水ID+"效果"+时间+"秒"+等级+"级"+有无阴影+"阴影"+"效果");
    }
    removeEffect(实体,药水ID){
        print("移除"+实体+药水ID+"效果");
    }
    setCape(实体,披风路径){
        print("已经添加披风");
    }
}
var Entity = new entity(null);
//Player.
class player{
constructor(Id,Health,Hunger,X,Y,Z,Riding,CanFly,Name){
    this.id = Id;
    this.health = Health;
    this.hunger = Hunger;
    this.x = X;
    this.y = Y;
    this.z = Z;
    this.riding = Riding;
    this.canFly = CanFly;
    this.name = Name;
}

//functions
canFly(){
    return this.canFly;
}
isFly(){
return false;
}
setCanFly(可否){
this.canFly = 可否;
}
getPointedBlockId(){
return "玩家所指方块ID";
}
getPointedBlockSide(){
return "玩家所指方块面";
}

addItemCreativeInv(Id,number,specialdata){

    print("已添加"+"Id"+Id+"数量"+number+"特殊值"+specialdata+"到创造模式背包");
}

clearinventorySlot(格数){
print("已清除"+格数+"格物品");
}
getCarriedItme(){

    return CarriedItem.id;
}
getCarriedItmeCount(){
    return CarriedItem.number;
}
getName(实体){
        return this.name;
}
setHealth(血量){
this.health = 血量;

}
}
var Player = new player(63,20,20,0,0,0,new entity(null),false,"Van");
//Ids.
const Podzol = 243;
const TNT = 46;
const 下界反应堆 = 247;
//Definded functions.
function print(context){
    var div = document.getElementById("console");
    var p = document.createElement('div');//创建p节点
        p.innerHTML = context;
        p.setAttribute("class","demo-card-wide mdl-card mdl-shadow--4dp");
        div.appendChild(p);
}
function addItemInventory(id,number,specialdata) {
    for(var a = 0; a < number ; a++){    
    package.set(package.size,new things(id));
        }
        print("添加成功!");
}
function clientMessage(消息) {
    print(消息);
}
function explode(X,Y,Z,半径) {
    print("位于X:"+X+"Y:"+Y+"Z:"+Z+"发生半径为"+半径+"的爆炸");
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
    print ("位于X:"+X+"Y:"+Y+"Z:"+Z+"的方块的id");
}
function preventDefault() {
    print("已经阻止默认操作");
}
function rideAnimal(实体1,实体2) {
    print("已将"+实体1+"骑上"+实体2);
}
function setNightMode(Yes_or_No) {
    if(Yes_or_No){
        print("开启晚上模式");
    }
    else{
        return false;
    }
}
function setPosition(实体,X,Y,Z){
    print ("已将实体传送至"+"X:"+X+"Y:"+Y+"Z:"+Z);
}
function setPositionRelative(实体,X,Y,Z) {
    print ("已将实体传送至相对于你的"+"X:"+X+"Y:"+Y+"Z:"+Z);
}
function setVelX(实体,距离_格) {
    print ("已将实体沿X传送"+距离_格+"格");
}
function setVelY(实体,距离_格) {
    print ("已将实体沿y传送"+距离_格+"格");
}
function setVelZ(实体,距离_格) {
    print ("已将实体沿Z传送"+距离_格+"格");
}
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
        print("已在控制台打印");
    }
     setFoodItem(Id,材质位置,排列值,补充饥饿值,名字,堆叠数量) {
        print("已设置"+"Id"+Id+"材质位置"+材质位置+"排列值"+排列值+"补充饥饿值"+补充饥饿值+"名字"+名字+"堆叠数量"+堆叠数量);
    }
    setGameSpeed(帧数){
        print("已限制帧数"+帧数);
    }
    setItem(Id,材质位置,排列值,名字,堆叠数量){
        print("已设置"+"Id"+Id+"材质位置"+材质位置+"排列值"+排列值+"名字"+名字+"堆叠数量"+堆叠数量);
    }
    takeScreenshot(路径){
        print("已截图");
    }
    showTipMessage(文字){
        println(文字);
    }
}
var ModPE = new modPE();
//Level functions.
class level{
    setGrass(X,Y,颜色_字符串_16进制){
            print("已将位于"+X+","+Y+"的草涂成"+颜色_字符串_16进制);
    }
}
class item {
    setHandEquipped(工具Id,是否立体){

        
    }
}