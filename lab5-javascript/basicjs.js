// //Define a function max() that takes two numbers as 
// //arguments and returns the largest of them. Use the if-then-else construct
// // available in Javascript

// const max=(a,b)=>{
//     if(a>b){
//         return a
//     }else if(b>a){
//         return b
//     }else{
//         return"they are equal"
//     }
// }
// console.log(max(20,10));

// //question 2
// //Define a function maxOfThree() that takes three numbers as
// // arguments and returns the largest of them.

// const maxOfThree=(a,b,c)=> {
// if(a>b&&a>c){
//     return a
// }else if(b>c){
//     return b
// }else{
//     return c
// }
// }

// //question 3
// //Write a function isVowel() that takes a character
// // (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// function isVowel(word){
// if((word.length===1)&&(word==='a'||word==='e'||word==='i'||word==='o'||word==='u')){
//     return true
// }
// else{
//     return false
// }
// }
// console.log(isVowel('aa'))
// //question 4
// /**Define a function sum() and a function multiply() 
//  * that sums and multiplies (respectively) all the numbers in 
//  * an array of numbers. For example, sum([1,2,3,4]) should return 10,
//  *  and multiply([1,2,3,4]) should return 24. */
// let sum=(arr)=>{
//     // let sums=0
//     return arr.reduce((c,d)=>c+d,100)
// }

// console.log(sum([1,2,3,4]))
// //multiply

// let multiply=(arr)=>{
//     return arr.reduce((c,d)=>c*d,100)
// }
// console.log(multiply([1,2,3,4]))

// //question 5
// //Define a function reverse() that computes the reversal of a string. 
// //For example, reverse("jag testar") should return the string "ratset gaj".

// function reverses(word){
//     var result="";

// for(var i=word.length-1;i>=0;i--){
// result=result+word.charAt(i)
// }
// return result;

// // var result="";

// // for(var i=0;i<=0;i++){
// // result=result+word.charAt(i)
// // }
// // console.log(result)
// // return result;

// //return word.split("").reverse().join("");

// }

// //reverses('rafity')
// console.log(reverses("xaxe"))

// //question 6

// /** Write a function findLongestWord() that takes an array of words and
//  *  returns the length of the longest one.*/

// const findLongestWord=(arr)=>{
// let longest=arr[0].length

// for(let x of arr){
//     if(x.length>longest){
//         longest=x.length;
//     }
// }
// return longest
// }
// console.log(findLongestWord(["abi","abiet","dsfhsdfs"]))

// //Question 7
// /**Write a function filterLongWords() that takes an array of words
//  *  and an integer i and returns the array of words that are longer than i. */

// const filterLongWords=(arr,i)=>{
// // let newArr=[]
// // for(let x of arr){
// //     if(x.length>i){
// //         newArr.push(x)
// //     }
// // }
// // return newArr

// return arr.filter(a=>a.length>i)

// }

// console.log( filterLongWords(["abi","abiet","dsfhsdfs"],3))



// //question number 8
// /**Modify the jsfiddle on the map/filter/reduce slide 
//  * ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 

// b) return array with all elements equal to 3; 

// c) return the product of all elements;
// */
// const a = [1,3,5,3,3]; 
// const b = a.map((elem)=>  elem *10)



// const c = a.filter(function(elem, i, array){
//   return elem === 3;});

// const d = a.reduce(function(prevValue, elem, i, array){
//   return prevValue * elem;
// });


// const d2 = a.find(function(elem) {return elem > 1;}); //3
// const d3 = a.findIndex(function(elem) {return elem > 1;}); //1

let array=[1,2,3,45,5,8]
//map reduce filter findindex sort forEach

let b=array.map(a=>a+1)
console.log(b)
let c=[]
array.forEach(b=>c.push(b+2))
console.log(c)

console.log(array.reduce((a,b)=>a*b,100))
console.log(array.findIndex(a=>a>6))
let d=array.filter(c=>c%2===0)
console.log(d)
x=1;
{
var x=10;
}
console.log(x)