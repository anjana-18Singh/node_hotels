//console.log("server file is running");

// function add(a,b){
//     return a+b;
// }

// var result=add(5,12);
// console.log(result);

// var add=(a,b)=>{return a+b}

// var result=add(20,30);
// console.log(result);

// (function(){
//     console.log("nodejs is easy");
//     console.log("nodejs will always be easy");
// })();



// function callback(){
//     console.log("callback function is calling itself")
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log('result: '+result);
//     callback();

// }
// add(1003,2003,callback);



var fs=required('fs');
var os=required('os');

var user=os.userInfo();
console.log(user);