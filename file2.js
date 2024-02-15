// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DOM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // console.log(document);
// // console.dir(document);

// // ------ element selection method
// // const obj1=document.getElementById("main_heading");
// // const obj2=document.getElementsByClassName("register");
// // console.dir(obj1);
// // console.dir(obj2);

// // // --query selector syntax
// // // const obj3=document.querySelector("#id_name")  
// // // const obj3=document.querySelector("#class_name")
// // const obj3=document.querySelector(".login");
// // console.log(obj3);

// // we cannot assign same id name to two or more elements but class_name can be
// // document.querySelectorAll() --> is used for select all the items having same class_name

// // --- changing the content
// // const heading=document.getElementById("main_heading");
// // console.log(heading.textContent);  // give the text
// // // changinh the content
// // heading.textContent="Hello this is Mine Site";  // changed the text
// // // text content will give all the text (although tag's display is none or hidden)
// // console.log(heading.innerText)    // this give the text which show on site

// // ------------- we can change the style also
// // const heading=document.querySelector("div.register h2")
// // console.log(heading)
// // console.log(heading.style)  // all these style can be changed
// // heading.style.backgroundColor="green";  // styling change


// // ------------- we can access any attribute value
// // const link=document.querySelector("a");
// // console.log(link.getAttribute("href"));    // return the attribute value
// // link.setAttribute("href","https://www.youtube.com")   // can change the value
// // // --- to create new tag/element
// // // link.innerHTML+="<h1>Hello this Click me</h1>";   // not efficient way
// // const new_tag=document.createElement("a");
// // // new_tag.innerText="Hello Click me";
// // new_tag.innerText="click ,e";
// // console.log(new_tag.innerText);
// // console.log(new_tag);




// // ------------------------ event handling ----------------
// // mouse  events 
// // ------- add events

// // const button=document.querySelector("#button");
// // console.dir(button);
// // button.onclick=function(){   // in this method we cannot assigned more than one click
// //     console.log("Hi I am Called");  // function called
// // }

// // // ------ addEventListener --> most efficient
// // function clickMe(){       // best
// //     console.log("I'm clicked");
// //     console.log(this);   // this is button itself
// // }
// // button.addEventListener("click",clickMe)


// // ------------ multiple buttons -----
// // const allButton=document.querySelectorAll("#btn");
// // for(let btn of allButton){
// //     btn.addEventListener("click",function(){
// //         console.dir(this);
// //     })
// // }


// // ------------- in 2nd file
// // console.log("Start")
// // const buttons=document.querySelectorAll('#btn');
// // for(let btn of buttons){
// //     let i;
// //     for(i=0;i<=1000000;i++){}

// //     btn.addEventListener('click',(e)=>{
// //         console.log(e.target);
// //         console.log(e.currentTarget.textContent);
// //     })
// // }
// // console.log("End!!!")

// // const buttons=document.querySelectorAll("#btn");
// // for(let button of buttons){
// //     button.addEventListener("click",(e)=>{
// //         e.currentTarget.style.backgroundColor="grey";
// //         const body=document.querySelector("body");
// //         body.style.backgroundColor="yellow";
// //     })
// // }




// // // ----------- keypress event
// // const body =document.querySelector("body");
// // body.addEventListener("keypress",(e)=>{
// //     console.log(e.key);
// // })


// // ------- mouse hover event
// // const btn=document.querySelector(".btn");
// // btn.addEventListener("mouseover",()=>{
// //     console.log("Mouse Enter");
// // })
// // btn.addEventListener("mouseleave",()=>{
// //     console.log("Mouse Left");
// // })


// // ----------------------------------event bubbling ----------
// const box1=document.querySelector(".grandpa");
// const box2=document.querySelector(".pa");
// const box3=document.querySelector(".me");
// // - event bubbling -
// // document.body.addEventListener("click",()=>{
// //     console.log("This is Body Scope");
// // })
// // box1.addEventListener("click",()=>{
// //     console.log("this is Granpa Box");
// // });
// // box2.addEventListener("click",()=>{
// //     console.log("this is Parent Box");
// // });
// // box3.addEventListener("click",()=>{
// //     console.log("this is My Box");
// // });

// // ---------------------
// // document.body.addEventListener("click",()=>{   // capturing
// //     console.log("This is Body Scope"); 
// // },true)
// // box1.addEventListener("click",()=>{   // capturing
// //     console.log("this is Granpa Box");
// // },true);
// // box2.addEventListener("click",()=>{    // caputuring
// //     console.log("this is Parent Box");
// // },true);

// // // ------ not captured
// // box3.addEventListener("click",()=>{
// //     console.log("this is My Box");
// // });

// // // --
// // document.body.addEventListener("click",()=>{  // bubbling
// //     console.log("This is Body Scope");
// // })
// // box1.addEventListener("click",()=>{           // bubbling
// //     console.log("this is Granpa Box");
// // });
// // box2.addEventListener("click",()=>{       // bubbling
// //     console.log("this is Parent Box");
// // });


// // ----------- event delegation -----------
// function fun(e){
//     console.log(e.target);
//     e.target.innerHTML="Clicked"+e.target.innerHTML;  // event delegation
// }
// box1.addEventListener("click",fun);
// // box2.addEventListener("click",fun);      // not need to bind
// // box3.addEventListener("click",fun);                                           

// ---------------------------Asyncronys programming
// console.log("Starting Code Execution");
// function run(){
//     console.log("Function called/Runned");
// }
// setTimeout(run,1000)  // minimum time for delay is 1sec
// setTimeout(()=>{console.log("I am funcion called after");},500);
// console.log("Script End");
//// due to event loop function called/ executed after traversing/executing all code in file
// setTimeout() -- return an id
// console.log("Start");
// function run(){
//     console.log("I'm a function");
// }
// const id=setTimeout(run,1000);
// console.log("end Here !!!");
// console.log(id);
// clearTimeout(id);   // now the function will not run


// --