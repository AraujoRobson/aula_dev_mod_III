
const n1 = 10, n2 = 5, n3 = 8;
let media = (n1 + n2 + n3) / 3;
let status;
if(media >= 7){
  status = "aprovado";
}else if(media > 4){
  status = "recuperação";
} else {
  status = "reprovado";
}
console.log(`Nota: ${media} | Status: ${status}.`)
