//Annonnymus function
let cubef=function(num){
    return num*num*num;
}
console.log(cubef(2));

//Arrow Function

function add2(...numArray){
    console.log(numArray);
    var sum=0;
    for(var i=0;i<numArray.length;i++){
        sum=sum+numArray[i];
    }
    return sum;
}
r2=add2(4,5,6,8,9);
console.log(r2);

const arrsum=(...mynum)=>{
    console.log(mynum);
    let sum=0;
    for(var i=0;i<mynum.length;i++){
        sum=sum+mynum[i];
    }
    return sum;
}
var r3=arrsum(1,2,3,4,5);
console.log(r3);

//let's see with compact code

function cubefun(num){
    console.log(num*num*num)
}
cubefun(3)

let cubefunction=(num)=>{
    console.log(num*num*num)
}
cubefunction(4)

let cubefunc=num=>console.log(num*num*num)
cubefunc(3)

let retcube = num=>num*num*num;
console.log(retcube(2));

//For each internal loop

let array=[67000,78000,80000,88000,98000,46000]
console.log(array);

function callBack(ele,ind,ar){

    console.log(ele+" "+ind+" "+ar);

}

array.forEach(callBack);

//map function
let newarray=[67000,78000,80000,88000,98000,46000];
function mylogic(newarray){
    let temp=[];
    for(let ele of newarray){
        ele=ele+2000;
        temp.push(ele);
    }
    return temp;
}
console.log(newarray);
console.log(mylogic(newarray));

let resarr=newarray.map(e=>e+2000);
console.log(resarr)

