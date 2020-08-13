
var somaDir=0;
var somaEsq=0;
var sorteados = [];
var sorteados2 = [];
var valorMaximo = 20;
var valorMaximo2 = 9;
var valores = [];
var mov = 0;
var acertos = 0;
var data = new Date();
var minIni = data.getMinutes();
var secIni = data.getSeconds();


for (var i=0; i<9; i++){
    valores.push(criarUnico());
}
document.getElementById("0" + someUnico()).style.visibility='hidden';
document.getElementById("0" + someUnico()).style.visibility='hidden';

document.getElementById("A").id = valores[0];
document.getElementById("B").id = valores[1];
document.getElementById("C").id = valores[2];
document.getElementById("D").id = valores[3];
document.getElementById("E").id = valores[4];
document.getElementById("F").id = valores[5];
document.getElementById("G").id = valores[6];
document.getElementById("H").id = valores[7];
document.getElementById("I").id = valores[8];




function criarUnico() {
    /*if (sorteados.length == valorMaximo) {
        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
        else return;
    }*/
    var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
    while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
    return sugestao; // devolver o numero único
}

function someUnico() {
    /*if (sorteados.length == valorMaximo) {
        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
        else return;
    }*/
    var sugestao = Math.ceil(Math.random() * valorMaximo2); // Escolher um numero ao acaso
    while (sorteados2.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
        sugestao = Math.ceil(Math.random() * valorMaximo2);
    }
    sorteados2.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
    return sugestao; // devolver o numero único
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    update();
}

function update(){
	somaDir=0
    somaEsq=0;
    somaElementosDir();
    somaElementosEsq();
    ladoBalanca();
    mov += 1;
    document.getElementById("movimentos").innerHTML = "Movimentos:" + mov;
}

function somaElementosDir(){  
        var d = document.getElementById('div1').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           somaDir += parseInt(d[i].id);  
        }  
 } 

 function somaElementosEsq(){  
        var d = document.getElementById('div2').querySelectorAll('*');
        for(var i = 0; i<d.length;i++){  
           somaEsq += parseInt(d[i].id);  
        }  
 } 
var valor;
var correta;

function checarA() {
 	 valor = parseInt(document.getElementById("RA").value)
 	 correta = valores[0];
 	if (valor == correta) {
 		document.getElementById("RA").style.backgroundColor='#00FF00';
 		document.getElementById("RA").readOnly = true;
        passaFase();
 	}else{
 		document.getElementById("RA").value ="incorreto";
 	};
    
}

function checarB() {
     valor = parseInt(document.getElementById("RB").value)
     correta = valores[1];
    if (valor == correta) {
        document.getElementById("RB").style.backgroundColor='#00FF00';
        document.getElementById("RB").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RB").value ="incorreto";
    };
    
}

function checarC() {
     valor = parseInt(document.getElementById("RC").value)
     correta = valores[2];
    if (valor == correta) {
        document.getElementById("RC").style.backgroundColor='#00FF00';
        document.getElementById("RC").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RC").value ="incorreto";
    };
    
}

function checarD() {
     valor = parseInt(document.getElementById("RD").value)
     correta = valores[3];
    if (valor == correta) {
        document.getElementById("RD").style.backgroundColor='#00FF00' ;
        document.getElementById("RD").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RD").value ="incorreto";
    };
    
}

function checarE() {
     valor = parseInt(document.getElementById("RE").value)
     correta = valores[4];
    if (valor == correta) {
        document.getElementById("RE").style.backgroundColor='#00FF00';
        document.getElementById("RE").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RE").value ="incorreto";
    };
    
}

function checarF() {
     valor = parseInt(document.getElementById("RF").value)
     correta = valores[5];
    if (valor == correta) {
        document.getElementById("RF").style.backgroundColor='#00FF00';
        document.getElementById("RF").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RF").value ="incorreto";
    };
    
}

function checarG() {
     valor = parseInt(document.getElementById("RG").value)
     correta = valores[6];
    if (valor == correta) {
        document.getElementById("RG").style.backgroundColor='#00FF00';
        document.getElementById("RG").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RG").value ="incorreto";
    };
    
}

function checarH() {
     valor = parseInt(document.getElementById("RH").value)
     correta = valores[7];
    if (valor == correta) {
        document.getElementById("RH").style.backgroundColor='#00FF00';
        document.getElementById("RH").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RH").value ="incorreto";
    };
    
}

function checarI() {
     valor = parseInt(document.getElementById("RI").value)
     correta = valores[8];
    if (valor == correta) {
        document.getElementById("RI").style.backgroundColor='#00FF00';
        document.getElementById("RI").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RI").value ="incorreto";
    };
    
}

function ladoBalanca() {
    if(somaEsq<somaDir){
        document.getElementById('div1').style.marginTop = "10px"
        document.getElementById('div2').style.marginTop = "-60px"
        document.getElementById('BALANCA').src = "../IMAGENS/BALANCA/balanca3.png";
        //document.getElementById('SINAL').src = "../IMAGENS/SINAIS/maior.png";
    }else if (somaEsq>somaDir) {
        document.getElementById('div1').style.marginTop = "-60px"
        document.getElementById('div2').style.marginTop = "10px"
        document.getElementById('BALANCA').src = "../IMAGENS/BALANCA/balanca2.png";
        //document.getElementById('SINAL').src = "../IMAGENS/SINAIS/menor.png";
    }else{
        document.getElementById('div1').style.marginTop = "-60px"
        document.getElementById('div2').style.marginTop = "-60px"
        document.getElementById('BALANCA').src = "../IMAGENS/BALANCA/balanca.png";
        //document.getElementById('SINAL').src = "../IMAGENS/SINAIS/igual.png";
    };
}


function passaFase(){
    if(acertos == 8){
        //savaTexto();
        document.getElementById("txtFeedback").innerHTML = "Parabéns!</br>Você terminou o nível 4 com</br>"+mov+" movimentos.</br>Deseja avançar de nível?";
        document.getElementById("boxFeedback").style.display = "block";
    }else{
        acertos +=1;
    }
}

function expression() {
     var d = document.getElementById('div1').querySelectorAll('*');
     var d2 = document.getElementById('div2').querySelectorAll('*');
     var exp = "";
     for(var i = 0; i<d.length;i++){  
        if( i == (d.length-1)){
            exp += d[i].name;
        }else{
            exp += d[i].name + " + ";  
        }
     } 
     exp += "= ";
      for(var i = 0; i<d2.length;i++){  
        if( i == (d2.length-1)){
            exp += d2[i].name;
        }else{
            exp += d2[i].name + " + ";  
        }
     }  
    document.getElementById("exTexto").innerHTML = exp;
}

function mostraExp() {
    if (displayExp == false) {
        document.getElementById("ex").src = "../IMAGENS/expressao2.png";
        document.getElementById("exTexto").style.display = "block";
        expression();
        displayExp = true;
    }else{
        document.getElementById("ex").src = "../IMAGENS/expressao1.png";
         document.getElementById("exTexto").innerHTML = "";
         document.getElementById("exTexto").style.display = "none";
        displayExp = false; 
    };
} 
    

function savaTexto(){
    data = new Date();
    var minFinal = data.getMinutes();
    var minResul = minFinal - minIni;
    var secFinal = data.getSeconds();
    

        var blob = new Blob(["Movimentos:"+ mov + "  Tempo:" + minResul + " minutos" + " e "+ secFinal + " segundos"], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Resultados fase 4");
   
}

function keyEnterPressed(e, id){
    if(e.keyCode=='13'){
        switch(id){
            case "A":
                checarA();
                break;
            case "B":
                checarB();
                break;
            case "C":
                checarC();
                break;
            case "D":
                checarD();
                break;
            case "E":
                checarE();
                break;
            case "F":
                checarF();
                break;
            case "G":
                checarG();
                break;
            case "H":
                checarH();
                break;
            case "I":
                checarI();
                break;
        }
    }
}