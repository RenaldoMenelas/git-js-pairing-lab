//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i <=100; i++){
        console.log(i)
    }
}
//fiveToOneHundred()

function multiplesOfThree(){
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
            console.log(i)
        }
    }
}

//multiplesOfThree()

function multiplesOfThreeOrFive(){
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i)
        }
    }
}

//multiplesOfThreeOrFive()

function untilNum(num){
    for(let i = 1; i < num; i++){
        console.log(i)
    }
}
//untilNum(9)
function multiply(num1 ,num2){
    return num1 * num2
}

//console.log(multiply(1,5))

function add(num1, num2){
    return num1 + num2
}

//console.log(add(9,9))

function isNegative(num){
return num < 0
}


//console.log(isNegative(-1))

function triangleArea(area, height){
    return multiply(area, height) / 2
}

console.log(triangleArea(10,10))


function betweenTwentyAndFourty(num){
if(num >=19 && num <= 40){
  return true
}
  else{
     return false
}
}


console.log(betweenTwentyAndFourty(28))