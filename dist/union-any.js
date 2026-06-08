"use strict";
// union : we are predefined multipal dataType in or custome data type in union
Object.defineProperty(exports, "__esModule", { value: true });
let response = "pending";
console.log(response);
// any we are using for avoding any data type passing in variable and function
const Order = [12, 13, 14, 14];
let currOrder = 15;
for (let order of Order) {
    if (order == 13) {
        currOrder = order;
        break;
    }
    currOrder = 11;
}
console.log(currOrder);
//# sourceMappingURL=union-any.js.map