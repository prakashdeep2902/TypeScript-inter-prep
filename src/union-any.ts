// union : we are predefined multipal dataType in or custome data type in union

let response: "pending" | "success" | "faild" = "pending";

console.log(response);

// any we are using for avoiding any data type passing in variable and function

const Order = [12, 13, 14, 14];

let currOrder: any;

for (let order of Order) {
  if (order == 13) {
    currOrder = order;
    break;
  }

  currOrder = 11;
}

console.log(currOrder);
