// ****
// ****
// ****
// **** 모양 만들기

// for (let i=0; i<4; i++) {
//   console.log("****")
// }

// 이중 중첩 반복문 연습 : 구구단

// for (let i = 2; i < 10; i++) {
//   console.log("[" + i + "단 출력" + "]")
//   for (let j = 1; j < 10; j++) {
//   console.log(i + "x" + j + "=" + i*j)
//   }  
//   console.log()
// }

// *
// **
// ***
// ****
// ***** 삼각형 만들기

// for (let i = 0; i <= 5; i++) {
//   console.log('*'.repeat(i))
// }


//    *
//   **
//  ***
// ****
//***** 삼각형 만들기

// for (let i = 0; i <= 5; i++) {
//   console.log(' '.repeat(5-i)+'*'.repeat(i))
// }

// let square = [" ", "*"]
// for (let i = 0; i <= 5; i++) {
//   console.log(square[0].repeat(5-i)+square[1].repeat(i))
// }

//    *
//   ***
//  *****
// *******
//********* 삼각형 만들기

// for (let i = 0; i <= 5; i++) {
//   console.log(' '.repeat(5-i)+'*'.repeat(1+2*i))
// }

// *********
//  *******
//   *****
//    ***
//     * 삼각형 만들기

// for (let i = 0; i < 5; i++) {
//   console.log(' '.repeat(i) + '*'.repeat(9-2*i))
// }


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     * 마름모 만들기


// for (let i=0; i<=9; i++){
//   if(i<=5){
//     console.log(' '.repeat(5-i)+'*'.repeat(1+2*i))
//   } 
// }

// for (let j=6; j<=10; j++){
//   if(5<j<=10) {
//     console.log(' '.repeat(-5+j)+'*'.repeat(21-2*j))
//   }
// }  


//스도쿠 연습


// 0 <= Math.random() < 1 인 수

// console.log(Math.random()*5+1)

// 1 <= Math.random()*5 + 1 <6 인 수 

// Math.random() * 5 

// // 0 <= Math.random()*5 + 1 <6 인 난수
// Math.floor(Math.random() * 5 + 1)

// console.log(Math.floor(Math.random() * 5 + 1))

// 중복 고려 안한 랜덤한 5개의 수를 배열에 넣기

// let numberArray = []
// for (i=0; i<5; i++) {
//   randomNumber = Math.floor(Math.random()*5+1)
//   numberArray.push(randomNumber)
// }
// console.log(numberArray)

// 중복 제외한 랜덤한 수 배열에 넣기 연습 1

// let numberArray = []
// for (i=0; i<5; i++) {
//   randomNumber = Math.floor(Math.random()*5+1)
//   if (numberArray.indexOf(randomNumber) == -1){
//     numberArray.push(randomNumber) 
//   }
// }
// console.log(numberArray)

// 중복 제외한 랜덤한 수 배열에 넣기 연습 2


// let numberArray = []
// for (i=0; i<5; i++) {
//   randomNumber = Math.floor(Math.random()*5+1)
//   if (numberArray.indexOf(randomNumber) == -1){
//     numberArray.push(randomNumber) 
//   } else {
//     i--
//   }
// }
// console.log(numberArray)

//5행 5열의 2차원 배열 생성 (중복 제거 안하고 1부터 5까지 자연수)

// let row_length = 5;
// let col_length = 5;

// var arr = [];
// for(let i=0; i<row_length; i++){
//   arr[i] = [];
//   for(let j=0; j<col_length; j++){
//     arr[i][j] = Math.floor(Math.random()*5+1);
//   }
// }

// console.log(arr)

//5행 5열의 2차원 배열 생성 (중복 제거하고 1부터 5까지 자연수)

// let row_length = 5;
// let col_length = 5;

// let arr = [];
// for(let i=0; i<row_length; i++){
//   arr[i] = [];
//   for(let j=0; j<col_length-1; j++){
//     arr[i][j] = Math.floor(Math.random()*5+1);
//     if (arr.indexOf(arr[j]) == -1) {
//       arr.push(arr[j+1]);
//     } else {
//       j--;
//     }
//   }
// }


