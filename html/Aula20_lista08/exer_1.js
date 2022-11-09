// function percent(num){
//   return num/100
// }
// console.log(`A porcentagem é: ${percent(50)}`)


// let fah = 0;
// function convert(fahrenheit){
//   fah = fahrenheit
//   return (fahrenheit - 32) * 5 / 9
// }
// console.log(`Temperaturas\nCelsius: ${convert(50)} \nFahrenheit: ${fah} `)


// let arr = [5, 10];
// function sumArray(){
//   let sum = 0
//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(`A soma é: ${sumArray()}`)


let arr = [10, 8 , 9];
function averageArray(){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}
console.log(`Média: ${averageArray()}`)
