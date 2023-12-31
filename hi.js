// //callback function 
// function sum(num1, num2, displayResult){
//     let result = num1 + num2;
//     displayResult(result);
// }
// function displayResult(data){
//     console.log("Result of the sum is : "+ data);
// }
// const ans= sum(2,2,displayResult);




const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("I know how to open node ,,,, ");
});

app.listen(4200, () => console.log('listen to port 4200'));

