//where we declaring a variable is important
/*************LET****************/
// 1.var is global scoped
  console.log(a);
    var a = 10;
// output is undefined

 //2.var can be redeclared and value changable
   var c=10;
   var c=20;
    console.log(c); 
 // output is 20  

  

/*************VAR****************/
//1.let is block scoped
 console.log(b);
   let b=10;
// output is error because it cannot take the b 

//2.let cannot be redeclared
 let d=10;
 let  d=20;
 console.log(d);
 //output is error d has already declared.
 
 /**************CONST***************/
 //1.const is block scoped
 console.log(x);
   const x=10;
  // output is error because it cannot take the b  
  
  //2.cannot set the value again is constant
   const z=10;
        z=20;
   //output is z is already declared
  
 //3.should give the value on declaration
    const y;
	y=20;
	console.log(y);
	//output is missing initilaizer in declaration