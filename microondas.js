console.log(" ---Escolha seu cardápio no microondas ;) --- !!!");
console.log(" Defina o tempo que voçê precisa para cada alimento...");

console.log("01 - Macarrão" + " :" + '10' + " " + "segundos.");
console.log("02 - Carne" + ": " + '15' + " " + "segundos.");
console.log("03 - Pipoca" + " :" + '10' + " " + "segundos.");
console.log("04 - Feijão" + " :" + '12' + " " + "segundos.");
console.log("05 - Brigadeiro" + ": " + '08' + " " + "segundos.");
console.log("--------------------------------------------------------------------");




let tempo  = 10;
let comida = 1;
function microondas (tempo,comida){


    
    switch(tempo,comida){

    case " pipoca":
        if( tempo > 10){
            console.log("A comida queimou...");

        }else if( tempo <= 9 ){
            console.log(" Tempo insuficiente");
        }else if ( tempo = 3 * 10){
            console.log(" Kabommmm");
        }else if ( tempo == 10) {
            console.log("prato pronto !!! Bom apetite!!!");
        } else {
            console.log(" Prato inexistente !!!");  
        }
        break; 
       
    

        case "macarrão":
            if( tempo > 10){
                console.log("A comida queimou...");
    
            }else if( tempo <= 9 ){
                console.log(" Tempo insuficiente");
            }else if ( tempo = 3 * 10){
                console.log(" Kabommmm");
            }else if ( tempo == 10) {
                console.log("prato pronto !!! Bom apetite!!!");
            } else {
                console.log(" Prato inexistente !!!"); 
            }
            break; 
            
        

    
        case "Carne":
            if( tempo > 10){
                console.log("A comida queimou...");
    
            }else if( tempo <= 9 ){
                console.log(" Tempo insuficiente");
            }else if ( tempo = 3 * 10){
                console.log(" Kabommmm");
            }else if ( tempo == 10) {
                console.log("prato pronto !!! Bom apetite!!!");
            } else {
                console.log(" Prato inexistente !!!");  
            }
            break; 
           
           
            case "Feijão":
            if( tempo > 10){
                console.log("A comida queimou...");
    
            }else if( tempo <= 9 ){
                console.log(" Tempo insuficiente");
            }else if ( tempo = 3 * 10){
                console.log(" Kabommmm")
            }else if ( tempo == 10) {
                console.log("prato pronto !!! Bom apetite!!!");
            } else {
                console.log(" Prato inexistente !!!");  
            }
            break; 
           


            case "Brigadeiro":
                if( tempo > 10){
                    console.log("A comida queimou...");
        
                }else if( tempo <= 9 ){
                    console.log(" Tempo insuficiente");
                }else if ( tempo = 3 * 10){
                    console.log(" Kabommmm");
                }else if ( tempo == 10) {
                    console.log("prato pronto !!! Bom apetite!!!");
                } else {
                    console.log(" Prato inexistente !!!");  
                }
                break; 
                default :
                console.log("Prato Pronto Bom apetite...");
               
    
    
     };


};

microondas (2,24);




