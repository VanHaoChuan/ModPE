/*
Only use it to test your ModPE
*/
//Debugger.
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
}
addItemInventory(9,9,9)
alert (package.size);