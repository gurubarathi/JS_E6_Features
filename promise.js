var promise = new Promise(function(resolve, reject) { 
  const x = "geeksforgeeks"; 
  const y = "geeksforgeeks"
  if(x != y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
    
promise
    .then
	(
	     function () 
	      { 
           console.log('i am then success handler'); 
          },
		  // function()
		  // {
		   // console.log('i am then error handler')
		  // }
		  //this is optional otherwise use the catch method
		  
	) 
    .catch(function () { 
        console.log('i am catch error handler'); 
    });