"use strict";     // it should be at top other wise not work
// console.log("Any statement");  // it will print any message in console
// -----Variables
// var a=5;    
// var b="string";
// c= 67;    // if not use "use strict" then js auto create a new variable named c
// console.log(c);
//"use strict"      // no error will occur
// d=40;
// console.log(d);    // now error occur
// console.log(b);


// --------- variable using let keyword
// let x=78;
// console.log(x);   // work same as var but it create local variable

// var name="Yogesh";
// var name="Yogesh Kumar";     // no error but
// let f_name="Yog";
// let f_name="Yogesh";    //  error will occur



// ------------ const keyword
// const pi=3.14;   // cannot change this
// ----------------------- Datatypes ------------
// 1). Number
// 2). String
// 3). Boolean
// 4). Undefined
// 5). Null
// 6). BigInt
// 7). Symbol
// --
// var var1;  // if declared but not initialised the it is undefined
// console.log(typeof var1);
// var var1=null;      // now null is a value/datatype have its own property
// console.log(typeof var1);
// ------------------ type conversion
// 1). Number -> string
// var num=56;
// console.log(typeof num);   // here it is number
// num=num+"";                      // expilict type conversion
// console.log(typeof num);      // now num is string
// // 2). String to num
// num=+num;     
// console.log(typeof num);      // now num is number
// --
// --

// ------- BigInt
// console.log(Number.MAX_SAFE_INTEGER);        //  ----explore?
// console.log(Number.MAX_VALUE);              // the maximum value of int in JS
// console.log(Number.MIN_SAFE_INTEGER);
// var bigint=BigInt(172621876);
// var bigint2=98579n;
// console.log(typeof bigint);
// console.log(typeof bigint2);
// var int=5;
// console.log(bigint+int)   // error
// Explanation :- BigInt is another datatype and number is other so for calculation
// one must have same datatype convert both in bigInt then proceed 

// --
// --------
// -------- strings
// let u_name="Yogesh Kumar";
// string indexing like an in python
// console.log(u_name[5]);
// console.log(u_name.length);


// Methods of strings
// trim              
// toUpperCase()
// toLowerCase()
// slice
// --
// trim       --- it removes spaces around of string and return a new string(string immutable)
// let str="   Hel llo  hi     ";
// str=str.trim();  // trim return a new string
// console.log(str.toUpperCase())     // capitalised all letters
// console.log(str.toLowerCase());    // small all letter

// slice  -- for slicing of string
// string.slice(start_index,stop_index)
// let str="Hello this is Yogesh Kumar";
// let sub_string=str.slice(0,3); 
// console.log(sub_string);
// -----------------------         template sting
// let u_name="yogesh";
// let age=22;
// console.log(`This is My name :-${u_name} and age ${age}`);

// ----------------------------- conditional statement ----------
// if else , if els
// for 
// while loop
// do while
// switch case 
// ternary operator
// ------------ all these are same as in C (100%)

// ------------------------------------ Arrays ----------------
// Array in JS is Dynamic unlike C hence need not to specify size

// var arr=[1,3.5,2,3,"Yogesh Kumar"];
// console.log(arr);         // whole array will print
// console.log(arr[2]);      // access array element

// ----- Insertion an element in array
// normal indexing method
// push
// unshift

// -- normal
// let arr1=[1,2,3,4,5];
// arr1[3]=7;        // 1st method
// // here arr1 now has 4 element if we add an element at 6 (skipping 4 and 5th index)
// arr1[7]=89; 
// console.log(arr1);
// console.log(typeof arr1[6]);  // here the skipped member got undefined types

// --- push methods
// arr1.push(67);    // insert element at last
// console.log(arr1);
// // --- unshift
// arr1.unshift(0);   // insert element as first index i.e 0th index
// console.log(arr1);


// ----- deltion from array
// normal change krdo
// pop 
// shift
// let value=arr1.pop();       // remove element from last and return it
// console.log(arr1);
// console.log(value);
// let value1=arr1.shift();
// console.log(arr1);
// console.log(value1);


// --- -----------cloning in array                             (imp)
// let array1=[1,2,3,4,5];
// let array2=array1;     
// let array3=[1,2,3,4,5];
// console.log(array1);
// console.log(array2);
// console.log(array1==array2);     // ans is true but ...
// console.log(array1==array3);     // all elements of array1 and array3 are same but ans False
// if we change in array1 then array2 will also changed hence
// array2 is not creating a separate array but refering the array1;
// one_array=array_two    // wrong method to clone

// --- method for clone
// concat method
// spread operator
// slice method

// --
// let array2=[].concat(array1);
// let array2=array1.concat([]);   // 2nd way with concat method
// console.log(array2);
// console.log(array2==array1);    // false  hence array2 is clone


// --  using spread operator
// let array2=[...array1];
// console.log(array2);
// console.log(array1==array2);    // false as expected


// // --- slice method
// const array1=[1,2,3,4,5,6];
// const array2=array1.slice(2,5);
// console.log(array2);
// -------------const keyword with arrays
// const x=9;
// // the value of x cannot be changed
// const arr1=[1,2,3,4];
// arr1[0]=0;   // we change the element of array & no error
// console.log(arr1);
// // we can change the value of array but not the whole array like
// let arr2=[1,2,3];
// arr1=arr2;     // error will occur


// *************** It is good to create array with const keyword ********************
// ------------  for of loop
// const array=[1,2,3,54,5,6];
// for(let i of array){            // traverse to every element
//     console.log(i);
// }

// ------------for in loop
// for(let i in array){
//     console.log(i);              // in for in loop index will given by i
// } 

// -------------------------------------- Array Destructuring ------
// means access element in variable

// const array=["Yogesh",22];
// // // let u_name=array[0];     // normal method

// // let [_name,age]=array;     // first element will latest index
// // console.log(_name,age);

// let [_name,age,roll]=array;
// // console.log(roll);   // unsufficient element is array so roll is undefined


// // --
// let array=[1,2,3,4,5,6];
// // let [var1,var2,...var3]=array;
// // var1 and var2 get the corresponding value but var3 is an array contain all remainings
// // console.log(var3);
// let [var1,,var3]=array;   // var3 will get 3 after leaving 3
// console.log(var1,var3);  




// ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Object ^^^^^^^^^^^^^^^^^^^^^
//like dictionary in python
// let key="email";
// let obj1={"key":"value"};
// let obj2={
//     _name:"Yogesh",
//     age:23,
//     "id":1234,
//     // [key]:"hello@gmail.com"          // computed property of object (can use variables)
// }
// // Access elemeny 
// let userName=obj2._name;     // 1). dot operator
// let userAge=obj2["age"];     // 2). brackett notation
// console.log(userName,userAge);
// --
// ---- add new key value pair
// obj2.status="Verified";
// obj2["gender"]="Male";
// console.log(obj2);

// -------------------- difference b/w . and [] notation
// 1).  we cannot acces a string key(which contain a space) via . operator
// const obj={
//     _name:"Yogesh",
//     age:34,
//     "last name":"Kumar"
// }
// // let l_name=obj.last name  // error
// let l_name=obj["last name"];  // no error with [] notation
// console.log(l_name);
// //  ------- 2). We cannot add or access an element via variable with . notation
// const key1="status";
// obj.key1="verified";  // no error but key1 will become the key not status
// obj[key1]="verified";
// console.log(obj);


// ----- for in loop on Objects
// const obj={
//     'key1':1,
//     'key2':2,
//     'key3':3,
//     'key4':4,
// }
// for(let i in obj){
//     console.log(i);        // key values will get
// }
// for(let i of Object.keys(obj)){        // for of loop in objects
//     console.log(i);
// }

// -------------- Objects Destructuring
// const obj={
//     u_name:"yogesh",
//     age:23,
//     l_name:"Kumar",
//     key2:2,
//     key3:3
// }
// let {u_name,age,var1}=obj;   // var1 will not get the l_name value
// // here the variable should = key
// console.log(u_name,age,var1);  // here var1 is undefined because there is no key named var1

// // for assign variable name diferent from keys
// let {u_name:_name,age:userAge,...obj2}=obj;  // obj2 will get all the other key-value pair
// console.log(_name,userAge,obj2);  
// -------------

// const array1=[1,2,3,4,6,7,8];
// const obj1={...array1}    // explicit conversion of array into object
// // index will be keys
// console.log(obj1);

// ------------- nested object destructuring ----------------
// const array=[
//     {userName:"User1",age:11},
//     {userName:"User2",age:21},
//     {userName:"User3",age:31}
// ]
// let [{userName:user1_name,age:user1_age}]=array;    // object  in array
// // apply both concept 1 by 1
// console.log(user1_name,user1_age);

// --
// --
// ------------------------------function -------------------------

// 1). Function Declaration
// 2). Function Exprssion
// 3). Arrow Function

// ------------ funtion declaration-------
// function fun_name(){
//     console.log("I am a Function Declaration");
// }
// fun_name();
// // ------------ function expression-------
// let fun_exp=function(){
//     console.log("I am a Function Expression");
// }
// fun_exp();

// // -------------- arrow function-------
// let arrow_fun=() => {console.log("I am Arrow function")};
// arrow_fun();



// -------------------- Hoisting ------------------
// using func before creating it
// only valid for functio declaration
// fun();   //  no error
// function fun(){
//     console.log("I am Hacker");
// }
// fun1();            // error 
// const fun1=function(){
//     console.log("I am exp hacker");
// }

// -------- default and rest param
// function fun1(price=0){   // if not a param pass then no error and price =0
//     return 0;
// }
// function sum(...number){   // number is a array can collect all arguments
//     let sum=0;
//     for(let i of number){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4));   //  rest parameters
// ----------  call back function and function returining a function
// function main(callback){
//     callback();
// }
// function add(){
//     console.log("I am Callbacked Thanks ");
// }
// main(add);
// function main(){
//     function inside(){
//         console.log("hi i am inside function returned");
//     }
//     return inside
// }
// let a=main();  // now a is function expression
// a();

// *************************** Methos of array
// 1). forEach()
// 2). map()
// 3). filter()
// 4). reduce()
// 5). sort()
// 6). find()
// 7). every()
// 8). some()
// 9). fill()
// 10). splice()
// --
// const array=[1,2,3,4];
// function print(data,index){
//     console.log(`At index ${data} : value is ${index}`);
// }
// array.forEach(print);
// array.forEach((data)=>{console.log(data)});
// ---
// const array=[1,2,3,4,5];
// // we want an array of having cube of these elements
// function cube(number){
//     return number**3;
// }
// const new_array=array.map(cube);    // map method return a new array 
// console.log(new_array);

// --------------------- 
// const array=["hello","this","is","Yogesh","kumar"];
// const array1=[1,2,3,4,5,6,7];
// function even(value){
//     return value%2==0;
// }
// function check(data){
//     return data.length ==6;
// }
// console.log(array.filter(check));
// const even_array=array1.filter(even);     // return all element which satisfy 
// console.log(even_array);


// ---- application for sorting
// const product=[
//     {"id":"wear",price:100},
//     {"id":"t_shirt",price:1000},
//     {"id":"jeans",price:500},
//     {"id":"watch",price:600},
//     {"id":"mala",price:8900},
//     {"id":"cover",price:1000000}
// ]
// function sort_price(data){
//     return data.price<1000;
// }
// const req=product.filter(sort_price);
// req.forEach((data)=>{console.log(data.id)});   //

// --

// -------------------- reduce ----------------                        (pending)
// const array=[1,2,3,4,5,6,7,8,9,10];
// function sum(acco,currentValue){
//     return acco+currentValue;
// }
// console.log(array.reduce(sum));
// ---
// --
// ------- sort
// const array=[5,7,1212,898,11111];
// const srings=["hello","hi",'my name','is'];
// array.sort();
// srings.sort();
// console.log(array);    // sort in ASCII order 
// console.log(srings);    // sort in ASCII order 
// ------------------------------- sorting in increasing order
// const array=[44,6,8,3,2,1,7,787,889];
// array.sort((a,b)=> b-a);
// array.sort((a,b)=> a-b);    // decreasing order
// console.log(array);

// ----- application lowToHigh
// const product=[
//     {id:1,price:1234},
//     {id:2,price:10000},
//     {id:3,price:19908},
//     {id:4,price:1},
//     {id:5,price:4545},
// ];
// function lowToHigh(a,b){
//     return a.price - b.price;
// }
// product.sort(lowToHigh);
// console.log(product);
// ---

// -------------- find() method
// const array=["hello",'123','find',"me"];
// function is3(value){
//     return value.length==3;
// }
// console.log(array.find(is3));  // return undefined if not found


// --
// ---   every() and some()
// as every means all the elements and some means any of them
// const array=[2,4,6,8,10];
// function isEven(value){
//     return value%2==0;
// }
// console.log(array.every(isEven));  // true if  condition is satisfy by all the elements
// console.log(array.some(isEven));  // true if  condition is satisfy by any  elements

// ------
// --------------- new and fill -----------
// fill(value,start,stop);
// const array=new Array(10).fill(-1);
// array.fill(0,2,2)
// console.log(array);

// --------------------- splice methods                 ------------------ (imp)
// deletion and insertion in everywhere
// splice(start_index,no_of_deletion,insertion_value)
// const array=[1,2,3,4,5];
// array.splice(1,1,"hi");  // at index 1 1 element is deleted and 'hi' is inserted in 1th pos
// array.splice(0,3,'hey','hello') // from 0th 3 elem. deleted and hey & hello inserted
// const counting=[1,2,5,6,7,8];
// const sub=[3,4];
// // counting.splice(2,0,sub);  // array will inserted at one postion not elements
// counting.splice(2,0,3,4); 
// console.log(counting);








//---------------------------------- Sets -----------------------
// Set(iterable_object)
// order not matter in sets
// const set1=new Set([1,2,3,4,5]);
// set1.add(45)      // for add any value
// set1.add("jhd");    // string added
// set1.delete(45);     // delete a particular element 
// const ans=set1.has(2);            // check element is present or not
// console.log(set1.size);      // show no. of element is set
// console.log(ans);

// // ------------ for of loop  on sets
// for(let i of set1){
//     console.log(i);
// }


// ---------------- Map data-type
// like object
// map can have keys of any datatype while in objects only number and string allowed
// const map1=new Map();
// console.log(map1.key1);

// --
// ----------------- Optional Chaining  (?.)                      ----- (imp)
// const user={
//     userName:"Yogesh",
//     age:22,
//     // address:{pin:136119}
// }
// console.log(user.userName);
// // console.log(user.address.pin); //  error occur
// console.log(user.address);   // undefined
// // Because address is itself a undefined data then how can we access its member

// // to handle this   ?.
// console.log(user?.address?.pin);  // no error
//   agar hoga to print ho jaega varna undefined

// ----------- why we require ??
// if we create an object now at current time it is not in use so but later it can be updated 
// hence we require this handeling


// -----
// --