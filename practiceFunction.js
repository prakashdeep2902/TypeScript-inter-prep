// function greet1 (name:string,age:number):string{
// return `Hi,my name is ${name} and my age is ${age}`;
// }
// let res=greet1("prakash",24);
// console.log("res::",res)
// const isPalindorme=(plin:string):boolean=>{
//     const wordArray=plin.split("").reverse().join('');
//     return plin==wordArray?true:false;
// }
// const resp=isPalindorme("121")
// console.log(resp)
// find the average of array
var calArray = [2, 2, 2, 2, 2, 2, 2, 2, 2];
var calAverage = function (calArray) {
    var ln = calArray.length;
    var sum = 0;
    for (var i = 0; i < ln; i++) {
        sum += calArray[i];
    }
    return sum / ln;
};
console.log(calAverage(calArray));
// findMaxValue of a array
var maxArray = [12, 13, 67, 95, 30, 27];
var fnMaxFindMaxValue = function (maxArray) {
    var maxValue = 0;
    for (var index = 0; index < maxArray.length; index++) {
        if (maxArray[index] > maxValue) {
            maxValue = maxArray[index];
        }
    }
    return maxValue;
};
var resMaxValue = fnMaxFindMaxValue(maxArray);
console.log(resMaxValue);
