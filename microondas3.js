console.log(" ---Escolha seu cardápio no microondas ;) --- !!!");
console.log(" Defina o tempo que voçê precisa para cada alimento...");

console.log("01 - Macarrão" + " :" + '10' + " " + "segundos.");
console.log("02 - Carne" + ": " + '15' + " " + "segundos.");
console.log("03 - Pipoca" + " :" + '10' + " " + "segundos.");
console.log("04 - Feijão" + " :" + '12' + " " + "segundos.");
console.log("05 - Brigadeiro" + ": " + '08' + " " + "segundos.");
console.log("--------------------------------------------------------------------");


let comida =1;
let tempo = 23;
function microondas(comida, tempo) {


    if (comida, tempo) {


        if (tempo / 10 == 1) {
            console.log("Prato pronto, bom apetite!!!");
        } else if (tempo / 10 >= 2 && tempo / 10 < 3) {
            console.log("O prato queimou");
        } else if (tempo / 10 >= 3) {
            console.log("kabumm");
        } else {
            console.log("tempo insuficiente");

        };



        if (tempo / 8 == 1) {
            console.log("Prato pronto, bom apetite!!!");
        } else if (tempo / 8 >= 2 && tempo / 8 < 3) {
            console.log("O prato queimou");
        } else if (tempo / 8 >= 3) {
            console.log("kabumm");
        } else {
            console.log("tempo insuficiente");

        };


        if (tempo / 15 == 1) {
            console.log("Prato pronto, bom apetite!!!");
        } else if (tempo / 15 >= 2 && tempo / 15 < 3) {
            console.log("O prato queimou");
        } else if (tempo / 15 >= 3) {
            console.log("kabumm");
        } else {
            console.log("tempo insuficiente");

        };


        if (tempo / 12 == 1) {
            console.log("Prato pronto, bom apetite!!!");
        } else if (tempo / 12 >= 2 && tempo / 12 < 3) {
            console.log("O prato queimou");
        } else if (tempo / 12 >= 3) {
            console.log("kabumm");
        } else {
            console.log("tempo insuficiente");

        };


        if (tempo / 8 == 1) {
            console.log("Prato pronto, bom apetite!!!");
        } else if (tempo / 8 >= 2 && tempo / 8 < 3) {
            console.log("O prato queimou");
        } else if (tempo / 8 >= 3) {
            console.log("kabumm");
        } else if (tempo / 8 >= 6) {
            console.log("tempo insuficiente");
        }
        else {
            console.log("Prato inexistente");
        };

    };




};
// 1:
microondas(1,15);
