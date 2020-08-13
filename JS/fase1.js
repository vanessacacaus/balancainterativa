var somaDir=0;
var somaEsq=0;
var sorteados = [];
var valorMaximo = 10;
var valores = [];
var mov = 0;
var acertos = 0;
var data = new Date();
var minIni = data.getMinutes();
var secIni = data.getSeconds();
var displayExp = false;
var histAberto = false;
var vetorElementosDir = [];
var sinalExp = "= ";

for (var i=0; i<9; i++){
    valores.push(criarUnico());
}

document.getElementById("A").name = "A";
document.getElementById("B").name = "B";
document.getElementById("C").name = "C";
document.getElementById("D").name = "D";
document.getElementById("E").name = "E";
document.getElementById("F").name = "F";
document.getElementById("G").name = "G";
document.getElementById("H").name = "H";
document.getElementById("I").name = "I";

document.getElementById("01").name = "1";
document.getElementById("02").name = "2";
document.getElementById("03").name = "3";
document.getElementById("04").name = "4";
document.getElementById("05").name = "5";
document.getElementById("06").name = "6";
document.getElementById("07").name = "7";
document.getElementById("08").name = "8";
document.getElementById("09").name = "9";

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

function allowDrop(ev, id) {
    if ($(id).children().length <= 0) {
        ev.preventDefault();
    };
    
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
    expression();
    //document.getElementById("movimentos").value = "Movimentos:" + mov;
}

function somaElementosDir(){  
        var d;
        d = document.getElementById('div1_1').querySelectorAll('*');
        if (d.length > 0) {

            somaDir += parseInt(d[0].id); 
        }
         d = document.getElementById('div1_2').querySelectorAll('*');
        if (d.length > 0) {
           
            somaDir += parseInt(d[0].id); 
        }
        d = document.getElementById('div1_3').querySelectorAll('*');
        if (d.length > 0) {
            
            somaDir += parseInt(d[0].id); 
        }
        d = document.getElementById('div1_4').querySelectorAll('*');
        if (d.length > 0) {
            
            somaDir += parseInt(d[0].id); 
        }
        d = document.getElementById('div1_5').querySelectorAll('*');
        if (d.length > 0) {
            
            somaDir += parseInt(d[0].id); 
        }
 } 

 function VoltarElementosDir(){  

        var d;
        var count = 0;
        d = document.getElementById('div1_1').querySelectorAll('*');
        if (d.length > 0) {
            
            VoltarElementosDir[count] = document.getElementById('div1_1').innerHTML;
            count ++;
        }
         d = document.getElementById('div1_2').querySelectorAll('*');
        if (d.length > 0) {
           
             VoltarElementosDir[count] = document.getElementById('div1_2').innerHTML;
            count ++;
        }
        d = document.getElementById('div1_3').querySelectorAll('*');
        if (d.length > 0) {
            
            VoltarElementosDir[count] = document.getElementById('div1_3').innerHTML;
            count ++;
        }
        d = document.getElementById('div1_4').querySelectorAll('*');
        if (d.length > 0) {
            
             VoltarElementosDir[count] = document.getElementById('div1_4').innerHTML;
            count ++;
        }
        d = document.getElementById('div1_5').querySelectorAll('*');
        if (d.length > 0) {
            
            VoltarElementosDir[count] = document.getElementById('div1_5').innerHTML;
            count ++;
        }
        console.log(count);
        count = 0;
        console.log(count);
        d = document.getElementById('sacolas1').querySelectorAll('*');
        if (d.length == 0) {

            document.getElementById('sacolas1').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('sacolas2').querySelectorAll('*');
        if (d.length == 0) {
           
             document.getElementById('sacolas2').innerHTML = VoltarElementosDir[count];
            count ++;
        }
        d = document.getElementById('sacolas3').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas3').innerHTML = VoltarElementosDir[count];
            count ++;
        }
        d = document.getElementById('sacolas4').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas4').innerHTML = VoltarElementosDir[count];
            count ++;
        }
        d = document.getElementById('sacolas5').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas5').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('sacolas6').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas6').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('sacolas7').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas7').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('sacolas8').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas8').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('sacolas9').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('sacolas9').innerHTML = VoltarElementosDir[count];
            count ++;
        }
 } 

  function VoltarElementosEsq(){  

        var d;
        var count = 0;
        d = document.getElementById('div2_1').querySelectorAll('*');
        if (d.length > 0) {
            
            VoltarElementosDir[count] = document.getElementById('div2_1').innerHTML;
            count ++;
        }
         d = document.getElementById('div2_2').querySelectorAll('*');
        if (d.length > 0) {
           
             VoltarElementosDir[count] = document.getElementById('div2_2').innerHTML;
            count ++;
        }
        d = document.getElementById('div2_3').querySelectorAll('*');
        if (d.length > 0) {
            
            VoltarElementosDir[count] = document.getElementById('div2_3').innerHTML;
            count ++;
        }
        d = document.getElementById('div2_4').querySelectorAll('*');
        if (d.length > 0) {
            
             VoltarElementosDir[count] = document.getElementById('div2_4').innerHTML;
            count ++;
        }
        d = document.getElementById('div2_5').querySelectorAll('*');
        if (d.length > 0) {
            
            VoltarElementosDir[count] = document.getElementById('div2_5').innerHTML;
            count ++;
        }
        console.log(count);
        count = 0;
        console.log(count);
        d = document.getElementById('pesos1').querySelectorAll('*');
        if (d.length == 0) {

            document.getElementById('pesos1').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('pesos2').querySelectorAll('*');
        if (d.length == 0) {
           
             document.getElementById('pesos2').innerHTML = VoltarElementosDir[count];
            count ++;
        }
        d = document.getElementById('pesos3').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos3').innerHTML = VoltarElementosDir[count];
            count ++;
        }
        d = document.getElementById('pesos4').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos4').innerHTML = VoltarElementosDir[count];
            count ++;
        }
        d = document.getElementById('pesos5').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos5').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('pesos6').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos6').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('pesos7').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos7').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('pesos8').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos8').innerHTML = VoltarElementosDir[count];
            count ++;
        }
         d = document.getElementById('pesos9').querySelectorAll('*');
        if (d.length == 0) {
            
             document.getElementById('pesos9').innerHTML = VoltarElementosDir[count];
            count ++;
        }
 } 


function RetirarPesos(){
    VoltarElementosDir();
    VoltarElementosEsq();
    document.getElementById('div1_1').innerHTML = "";
    document.getElementById('div1_2').innerHTML = "";
    document.getElementById('div1_3').innerHTML = "";
    document.getElementById('div1_4').innerHTML = "";
    document.getElementById('div1_5').innerHTML = "";
    document.getElementById('div2_1').innerHTML = "";
    document.getElementById('div2_2').innerHTML = "";
    document.getElementById('div2_3').innerHTML = "";
    document.getElementById('div2_4').innerHTML = "";
    document.getElementById('div2_5').innerHTML = "";
    somaEsq = 0;
    somaDir = 0;
    ladoBalanca();

}


 function somaElementosEsq(){  
        var d;
        d = document.getElementById('div2_1').querySelectorAll('*');
        if (d.length > 0) {

            somaEsq += parseInt(d[0].id); 
        }
         d = document.getElementById('div2_2').querySelectorAll('*');
        if (d.length > 0) {
           
            somaEsq += parseInt(d[0].id); 
        }
        d = document.getElementById('div2_3').querySelectorAll('*');
        if (d.length > 0) {
            
            somaEsq += parseInt(d[0].id); 
        }
        d = document.getElementById('div2_4').querySelectorAll('*');
        if (d.length > 0) {
            
            somaEsq += parseInt(d[0].id); 
        }
        d = document.getElementById('div2_5').querySelectorAll('*');
        if (d.length > 0) {
            
            somaEsq += parseInt(d[0].id); 
        }
 } 

var valor;
var correta;

function expression() {
      var d;
      var exp= "";
      var contDir = false;
      var contEsq = false;

        d = document.getElementById('div1_1').querySelectorAll('*');
        if (d.length > 0) {

            exp += d[0].name ;
            contDir = true;
        }
         d = document.getElementById('div1_2').querySelectorAll('*');
        if (d.length > 0) {
           if(contDir){
                exp += " + " + d[0].name;

            }else{
                exp += d[0].name ;
                contDir = true;
            }            
        }
        d = document.getElementById('div1_3').querySelectorAll('*');
        if (d.length > 0) {
          if(contDir){
                exp += " + " + d[0].name;
                
            }else{
                exp += d[0].name ;
                contDir = true;
            }     
        }
        d = document.getElementById('div1_4').querySelectorAll('*');
        if (d.length > 0) {
           if(contDir){
                exp += " + " + d[0].name;
                
            }else{
                exp += d[0].name ;
                contDir = true;
            }     
        }
        d = document.getElementById('div1_5').querySelectorAll('*');
        if (d.length > 0) {
           if(contDir){
                exp += " + " + d[0].name;
                
            }else{
                exp += d[0].name ;
                contDir = true;
            }     
        }
     exp += sinalExp;
        d = document.getElementById('div2_1').querySelectorAll('*');
        if (d.length > 0) {

            exp += d[0].name ;
            contEsq = true;
        }
         d = document.getElementById('div2_2').querySelectorAll('*');
        if (d.length > 0) {
           if(contEsq){
                exp += " + " + d[0].name;

            }else{
                exp += d[0].name ;
                contEsq = true;
            }            
        }
        d = document.getElementById('div2_3').querySelectorAll('*');
        if (d.length > 0) {
          if(contEsq){
                exp += " + " + d[0].name;
                
            }else{
                exp += d[0].name ;
                contEsq = true;
            }     
        }
        d = document.getElementById('div2_4').querySelectorAll('*');
        if (d.length > 0) {
           if(contEsq){
                exp += " + " + d[0].name;
                
            }else{
                exp += d[0].name ;
                contEsq = true;
            }     
        }
        d = document.getElementById('div2_5').querySelectorAll('*');
        if (d.length > 0) {
           if(contEsq){
                exp += " + " + d[0].name;
                
            }else{
                exp += d[0].name ;
                contEsq = true;
            }     
        }
    document.getElementById("exTexto").innerHTML = exp;
    document.getElementById("boxHistArea").value += "\n" + exp;
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

function checarA() {
 	 valor = parseInt(document.getElementById("RA").value)
 	 correta = valores[0];
 	if (valor == correta) {
 		document.getElementById("RA").style.backgroundColor='#00FF00';
 		document.getElementById("RA").readOnly = true;
        passaFase();
 	}else{
        document.getElementById("RA").style.backgroundColor='red';
 		setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
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
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
    
    }
}

function checarI() {
     valor = parseInt(document.getElementById("RI").value)
     correta = valores[8];
    if (valor == correta) {
        document.getElementById("RI").style.backgroundColor='#00FF00';
        document.getElementById("RI").readOnly = true;
        passaFase();
    }else{
        document.getElementById("RA").style.backgroundColor='red';
        setInterval(function(){
            document.getElementById("RA").style.backgroundColor='white';
        }, 1000);
    };
    
}


function passaFase(){
    if(acertos == 8){
        //savaTexto();
        document.getElementById("txtFeedback").innerHTML = "Parabéns!</br>Você terminou o nível 1 com</br>"+mov+" movimentos.</br>Deseja avançar de nível?";
        document.getElementById("boxFeedback").style.display = "block";
    }else{
        acertos +=1;
    }
}
    

    //Testes com impressão de texto
    
function savaTexto(){
    data = new Date();
    var minFinal = data.getMinutes();
    var minResul = minFinal - minIni;
    var secFinal = data.getSeconds();
    

        var blob = new Blob(["Movimentos:"+ mov + "  Tempo:" + minResul + " minutos" + " e "+ secFinal + " segundos"], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Resultados fase 1");
   
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

function ladoBalanca(){
    if(somaEsq < somaDir){
        document.getElementById('div1_1').style.marginTop = "298px";
        document.getElementById('div1_2').style.marginTop = "298px";
        document.getElementById('div1_3').style.marginTop = "298px";
        document.getElementById('div1_4').style.marginTop = "298px";
        document.getElementById('div1_5').style.marginTop = "298px";
        document.getElementById('div2_1').style.marginTop = "234px";
        document.getElementById('div2_2').style.marginTop = "234px";
        document.getElementById('div2_3').style.marginTop = "234px";
        document.getElementById('div2_4').style.marginTop = "234px";
        document.getElementById('div2_5').style.marginTop = "234px";
        document.getElementById('BALANCA').style.marginTop = "240px";
        document.getElementById('BALANCA').src = "../IMAGENS/BALANCA/balanca3.png";
            }
    if (somaEsq > somaDir) {
        document.getElementById('div1_1').style.marginTop = "234px";
        document.getElementById('div1_2').style.marginTop = "234px";
        document.getElementById('div1_3').style.marginTop = "234px";
        document.getElementById('div1_4').style.marginTop = "234px";
        document.getElementById('div1_5').style.marginTop = "234px";
        document.getElementById('div2_1').style.marginTop = "298px";
        document.getElementById('div2_2').style.marginTop = "298px";
        document.getElementById('div2_3').style.marginTop = "298px";
        document.getElementById('div2_4').style.marginTop = "298px";
        document.getElementById('div2_5').style.marginTop = "298px";
        document.getElementById('BALANCA').style.marginTop = "240px";
        document.getElementById('BALANCA').src = "../IMAGENS/BALANCA/balanca2.png";
        
    }
    if (somaEsq == somaDir){
        document.getElementById('div1_1').style.marginTop = "270px";
        document.getElementById('div1_2').style.marginTop = "270px";
        document.getElementById('div1_3').style.marginTop = "270px";
        document.getElementById('div1_4').style.marginTop = "270px";
        document.getElementById('div1_5').style.marginTop = "270px";
        document.getElementById('div2_1').style.marginTop = "270px";
        document.getElementById('div2_2').style.marginTop = "270px";
        document.getElementById('div2_3').style.marginTop = "270px";
        document.getElementById('div2_4').style.marginTop = "270px";
        document.getElementById('div2_5').style.marginTop = "270px";
        document.getElementById('BALANCA').style.marginTop = "275px";
        document.getElementById("BALANCA").src = "../IMAGENS/BALANCA/balanca.png";
        
    }
}

function mostraHistorico(){
    if(histAberto==true){
        document.getElementById("anotacoes").style.display = "none";
        console.log("desaparece");
        histAberto = false;
    }else{
        document.getElementById("anotacoes").style.display = "block";
         console.log("aparece");
        histAberto = true;
    }
}