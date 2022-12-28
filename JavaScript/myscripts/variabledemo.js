var comanyname;
companyname="Neosoft Technologies";
console.log(companyname);
console.log(typeof companyname);
let mylocation = "rabale";
console.log(mylocation);
mylocation="Prabhadevi";
console.log(mylocation);

function add(){
    var num1=78;
    var num2=64;
    var result=num1+num2;
    console.log(result);
}
add();
function add1(num1,num2){
    return num1+num2;
}
var r1=add1();
console.log(r1);
var r2 =add1(12);
console.log(r2);
var r3=add1(12,34);
console.log(r3);
var r4=add1(12,34,56);
console.log(r4);

function add2(...numArray){
    console.log(numArray);
    var sum=0;
    for(var i=0;i<numArray.length;i++){
        sum=sum+numArray[i];
    }
    return sum;
}
var r1=add(2)
