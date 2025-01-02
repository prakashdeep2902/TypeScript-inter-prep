function greet1 (name:string,age:number):string{
return `Hi,my name is ${name} and my age is ${age}`;
}
let res=greet1("prakash",24);
console.log("res::",res)


// find  the isPalindorme or not
const isPalindorme=(plin:string):boolean=>{

    const wordArray=plin.split("").reverse().join('');
    return plin==wordArray?true:false;
}
const resp=isPalindorme("121")

console.log(resp)


// find the average of array
const calArray=[2,2,2,2,2,2,2,2,2];
const calAverage=(calArray:number[]):number=>{
 const ln:number=calArray.length;
 let sum:number=0;
 for(let i=0;i<ln;i++){
  sum += calArray[i]
  }
 return sum/ln;
}
console.log(calAverage(calArray))


// findMaxValue of a array
const maxArray=[12,13,67,95,30,27]
const fnMaxFindMaxValue=(maxArray:number[])=>{
let maxValue:number=0;
for (let index = 0; index < maxArray.length; index++) {
    if(maxArray[index]>maxValue){
     maxValue=maxArray[index];
    }
}
return maxValue
}
const resMaxValue=fnMaxFindMaxValue(maxArray);
console.log(resMaxValue);
