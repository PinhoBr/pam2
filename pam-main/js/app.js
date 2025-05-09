var flag = 0;

function calcular(){
    
    let peso = document.querySelector("peso")
    let altura = document.getElementById("altura")
    
    let imc = peso / (altura * peso)
    alert(peso)
    switch (flag){
        case 1:
            body.style.backgroundColor = "#579bc9"
            button.style.backgroundColor = "#0f94af"
            break;
        case 2:
            body.style.backgroundColor = "#393E46"
            button.style.backgroundColor = "#FF90BB"
            break;    
        case 3:
            body.style.backgroundColor = "#222831"
            button.style.backgroundColor = "#4ED7F1"
            break;
        case 4:
            body.style.backgroundColor = "#DFD0B8"
            button.style.backgroundColor = "#644A07"
            break;
        case 5:
            body.style.backgroundColor = "#C95792"
            button.style.backgroundColor = "#FFC6C6"
            break;
        case 6:
            body.style.backgroundColor = "#4ED7F1"
            button.style.backgroundColor = "#6FE6FC"
            break;
        case 7:
            body.style.backgroundColor = "#81E7AF"
            button.style.backgroundColor = "#03A791"
            break;
        default :
            body.style.backgroundColor = "#03A791"
            button.style.backgroundColor = "#81E7AF"
               
        }
}