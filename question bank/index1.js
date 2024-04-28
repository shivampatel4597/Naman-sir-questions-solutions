//1   tick tock tick-tock
//         let n =1;
//         let a,b,c;
//         setInterval(()=>{

//    if(n==1 || (n-a) ==  5 ){
//     console.log(n," ", "tick")
//     a = n;

//    }
//    else if(n==2  || (n-b) ==5 ){
//     console.log(n," ", "tock")
//   b=n;
//    }
//    else if(n==5 || (n-c) == 5){
//     console.log(n," ", "tick-tock")
//     c= n;
//    }
//    n++;
//   },1000)

// 2  rotate an array
//   iterate for loop from 0 index and form last index also

//   let arr = [1, 2, 3, 4, 5];

//   setInterval(() => {
//     let d = arr[arr.length - 1];

//     for (let i = arr.length - 1; i > 0; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[0] = d;
//     console.log(arr);
//   }, 2000);

// --------------new way
// function setrotate(array) {
//     let enterid = setInterval(() => {
//         array.unshift(array.pop())
//         console.log(array);
//     }, 3000)
// }
// let myarray = [1,2,3,4];
// setrotate(myarray)

// 3 question fetch data from

// let fetchedData = ()=>{

// fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             if (!response.ok) {
//                 console.log("Not getting response");
//                 throw new Error("Network response was not ok.");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
//     }

//     setInterval(()=>{
//      fetchedData()
//     }, 5000)

// 4 changing opacity
// let opec = document.querySelector("#opec");
// let c = 0.1;
// setInterval(() => {
 
//   if (c >= 1) {
//     c = 0.1
//   }
//   console.log(c)
//   opec.style.opacity = c;
//   c = c + 0.1;
// }, 2000);

// 5

// --------------------------------Next 1 to 5 questions-----
// 1  times up 
// function timesUp(){
//     setTimeout(function(){
// console.log("times up")
//     },3000)
// }
// timesUp()

// 2   callback delay 

// function myFun(callback){
// setTimeout(callback, 2000)
// }

// function fun(){
//     console.log("this is fun after 2 second delay");
// }

// myFun(fun);

// 3 
// let flag = false;
// let end = setTimeout(function() {
//    if(flag){
//     console.log("You 're too slow!")
//    }
// }, 10000);
// const userInput = prompt("Enter something:");
// if(userInput == null){
//     flag = true;
// }
// else{
  
//     console.log(userInput);
//     clearTimeout(end);
  
// }

// 4   timer simulator
function countdownTimer(minutes) {
    let seconds = minutes * 60;
  
    function displayTime() {
      const displayMinutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;
  
      console.log(`Time remaining: ${displayMinutes} minutes ${displaySeconds} seconds`);
  
      // Decrement seconds
      seconds--;
  
      // Check if the timer has reached 0
      if (seconds < 0) {
        console.log("Time's up!");
      } else {
        // Call displayTime again after 1 second
        setTimeout(displayTime, 1000);
      }
    }
  
    // Initial call to displayTime
    displayTime();
  }
  countdownTimer(5)
  
  // Example usage: countdownTimer(5); // for 5 minutes
  

  