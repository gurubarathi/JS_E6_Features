//export variable ,function and class
let num_set = [1, 2, 3, 4, 5];
  
export default function hello() {
    console.log("Hello World!");
}
  
class Greeting {
    constructor(name) {
        this.greeting = "Hello, " + name;
    }
}
  
export { num_set, Greeting };

//importing the file

import * as exp from "./export.js";
// Use dot notation to access members
 console.log(exp.num_set);
 exp.hello();
 let g = new exp.Greeting("Aakash");
 console.log(g.greeting);
  