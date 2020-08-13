var atual = 1;

function avanca () {
	if (atual<10) {
		atual ++;
		document.getElementById('nivel').innerHTML = "Nível " + atual;
	}else{
		atual = 1;
		document.getElementById('nivel').innerHTML = "Nível " + atual;
	};
	document.getElementById("link").href = "fase"+atual+".html";

}

function retorna () {
	if (atual>1) {
		atual --;
		document.getElementById('nivel').innerHTML = "Nível " + atual;
	}else{
		atual = 10;
		document.getElementById('nivel').innerHTML = "Nível " + atual;
	};
	document.getElementById("link").href = "fase"+atual+".html";
}