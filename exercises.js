
// function CalculoDaMedia(p1, p2, p3) {
//     return (p1 + p2 + p3) / 3;    
// };

// const media = CalculoDaMedia (2, 3, 4);

// console.log(media);                                                         

/*
Correção do professor:
  function calcularMedia(n1 + n2 + n3){
      return (n1+ n2 + n3) / 3;
      };

      console.log(cacularMedia(5,6,4));

    Outra forma:

     var resultado = calcularMedia(8, 9, 6);
     console.log(resultado);


     alert("Calcular média..."); 

     var nota1 = Number(prompt("Informe sua primeira nota));
     var nota2 = Number(prompt("Informe sua segunda nota));
     var nota3 = Number(prompt("Informe sua terceira nota));

 */



// let age = -1;

//     if (age === undefined || age < 0) {
//         console.log(" Idade inválida");
      
//     } else if (age < 18) {
//          console.log("Menor de Idade");

//     } else {
//          console.log("Maior de idade");

//     }


// let age = 18 ;

// if (age > 0 && age < 18) {
//     console.log("Menor de Idade");
// }else if (age >= 18) {
//     console.log("Maior de Idade");
// }else {
//     console.log("Idade Inválida");
// }

// function verificarIdade(idade){
//     if (idade >= 18){
//         console.log("Maior de idade.");
//         return ;
//     } else if (idade > 0){
//         console.log("Menor de Idade.");
//         return;
//     } 
//         console.log("Idade Inválida.")
// }

// verificarIdade(-6);

// function contarAte(numero) {
//   if(numero > 0){
//     for(var i = 1; i <= numero; i++){
//       console.log(i);

//     }
    
//   }else {
//     console.log("Número Inválido");
//   }
// }

// contarAte(10);

function mostrarPares(n){
  if(n < 0) {
    console.log("Número Inválido.");
    return;
}

  for(var index = 0; index <= n; index++) {
    if(index % 2 === 0){
      console.log(index);
    }
  }
}

mostrarPares(10);

