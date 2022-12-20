//*********** destructuring assignment on Array****************/
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
	
console.log(firstName);// "alpha"
console.log(secondName);//"beta"

//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
		
console.log(firstName);//"alpha"
console.log(secondName);//"beta
//comma operator to skip elements;
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"


//rest of operator(...)means one variable to multiple elements upto last element 
//the rest of should work where there is no element left on last without variable;

//rest element mustbe a last element

var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta","named"];
         
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"

//************************Destructuring assignment on Object**************************/
var marks = {x: 21, y: -34, z: 47 }; 
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47
console.log(x);
console.log(y);
console.log(z);
//but the variables and keys should be equal
//assignning nested Object
const marks = {
section1: { alpha: 15, beta: 16},
section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16
