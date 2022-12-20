function outerfunc(elem)
{
  
    this.clickHandler = function() {
    elem.addEventListener('click', (e) => {
  
       // logs the<button />element 
      document.write(e.currentTarget);
  
   // this has the value of outerfunc
this.displayInfo();
})
}
;
this.displayInfo = function() {
    document.write(' Correctly identified!');
}
}
  
let button = document.body.querySelector('button');
let test = new outerfunc(button);
test.clickHandler()