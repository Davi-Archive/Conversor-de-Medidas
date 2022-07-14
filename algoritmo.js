    
function transMedida(){
    var select1 = document.getElementById('select1');
    var select2 = document.getElementById('select2');
    var value1 = select1.options[select1.selectedIndex].value; //texto selecionado no select value1, value2
    var value2 = select2.options[select2.selectedIndex].value;
    var input1 = parseFloat(document.getElementById('input1').value);  //retorn NaN se não digitar nada, criar IF para NaN
    var anosLuz = 0.00000000000010570.toFixed(17);
    //começo do código de transformar
console.log(value1);
console.log(value2);
console.log(input1);


if(isNaN(input1)){
    console.log('não passou, not a number');

} else {
       
    console.log('passou');
    console.log('passou');
    console.log('passou');
    if(value1 === "KM" && value2 === "KM"){
        document.getElementById("resultado").value = input1;
    }
    if(value1 === "M" && value2 === "M"){
        document.getElementById("resultado").value = input1;

    }
    if(value1 === "AL" && value2 === "AL"){
        document.getElementById("resultado").value = input1;
//KILOMETRO * 1000
    }
    if(value1 === "KM" && value2 === "M"){
        document.getElementById("resultado").value = input1*1000;
    }
    if(value1 === "KM" && value2 === "AL"){
        document.getElementById("resultado").value = input1 * anosLuz;
    }
//METROS
    if(value1 === "M" && value2 === "KM"){
    document.getElementById("resultado").value = input1/1000;
    }
    if(value1 === "M" && value2 === "AL"){
    document.getElementById("resultado").value = (input1/1000)*anosLuz;
    }
// ANOS LUZ = 0.00000000000010570 (para transformar de KM só multiplicar), variavel anosLuz com .toFixed(17)
    if(value1 === "AL" && value2 === "KM"){
    document.getElementById("resultado").value = input1/anosLuz;
    }
    if(value1 === "AL" && value2 === "M"){
    document.getElementById("resultado").value = (input1/1000)/anosLuz;
    } 
    else{  // caso ocorra algum erro e nenhum if execute.
        return console.log('error');
    }

//fim else
} //fim else
//fim else


}