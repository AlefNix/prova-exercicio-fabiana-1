let x = 10;

let y = 5;

if( x > y) {
    console.log(`X é maior que Y!`);
} else {
    console.log(`X é menor que Y`);
};

let date = new Date();
let day = date.getDay();
let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
console.log(days[day]);

switch (days[day]) {
    case "Domingo":
    case "Sábado":
        console.log("Denscansar");
        break;
    default :
        console.log("Trabalhar");
};

let comparacao = x > y ? console.log("X é maior que Y") : console.log("Y é maior que X");


let fatura = 1000;

while (fatura < 2000) {
  fatura += 100;

  console.log("R$" + fatura);
};

let index = 0;

do {
  console.log(index);

  index++
} while (index < 10);


for (var i = 0; i < 9; i++) {
    console.log(i);
}