 /***************Spread Operator********************/
 //by spread operator merging two values into one 
  var array1 = [10, 20, 30, 40, 50];
    var array2 = [60, 70, 80, 90, 100];
    var array3 = [...array1, ...array2];
   console.log(array3);//[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
   
 // by copying the object to another
 
    const obj = {
        firstname: "Divit",
        lastname: "Patidar",
    };
    const obj2 = { ...obj };
    console.log(obj2);
	// output:
	  // { firstname: "Divit",
	  // lastname: "Patidar"}
	  
/****************Rest operator*******************/
//it takes multiple elements as arguments and compresses them into a single element 
  function average(...args) {
        console.log(args);
        var avg =
            args.reduce(function (a, b) {
                return a + b;
           }, 0) / args.length;
        return avg;
    }
    console.log("average of numbers is : "
        + average(1, 2, 3, 4, 5));
    console.log("average of numbers is : "
        + average(1, 2, 3));
// output:
//[1, 2, 3, 4, 5]
// "average of numbers is : 3"
// [1, 2, 3]
// "average of numbers is : 2"