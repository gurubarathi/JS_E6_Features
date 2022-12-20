//Template literals give more controls  over on dynamic strings

//1.three types are same:
var k= "some string"
var m='some srting'
var s=`some string`;
console.log(k,s,m);

//2.multiline string:
// Without template literal using \n
console.log('Some text that I want \n on two lines!');
  
// With template literal
console.log(`Some text that I want
on two lines!`);

//3. no parenthesis on function calling 
function TaggedLiteralEg(strings) {
    document.write(strings);
}
  
TaggedLiteralEg `Gurubarathi`; 

//4.variable with multiline strings without concodination

  let value=1000;
  console.log(`the value is not equalto ${value}`);