function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirTextoNaTelaId(id, texto) {
    let campoId = document.getElementById(id);
    campoId.innerHTML = texto;
}
let soberDays = 0
exibirTextoNaTela('h1', 'Quantidade de dias sóbrio:');
exibirTextoNaTela('p', `${soberDays}`);
exibirTextoNaTela('p2', 'Você ficou sóbrio hoje?');
let delay = 5400000


function calculateHMSleft()
{
	var now = new Date();
	var hoursleft = 23-now.getHours();
	var minutesleft = 59-now.getMinutes();
	var secondsleft = 59-now.getSeconds();
	if(minutesleft<10) minutesleft = "0"+minutesleft;
	if(secondsleft<10) secondsleft = "0"+secondsleft;
	document.getElementById('count').innerHTML = hoursleft+":"+minutesleft+":"+secondsleft;
}


function disableButtons() {
    document.getElementById('simBtn').disabled = true;
    document.getElementById('naoBtn').disabled = true;
    console.log('Botoes desabilitados');
    calculateHMSleft();
    setInterval(calculateHMSleft, 1000);
}
function enableButtons() {
    document.getElementById('simBtn').disabled = false;
    document.getElementById('naoBtn').disabled = false;
    console.log('Botoes habilitados');
    //exibirTextoNaTela('p3','')
}

function reset() {
    exibirTextoNaTela('p2', 'Você ficou sobrio hoje?');
    enableButtons();
    console.log('Função reset acionada!');
}

function sim() {
    console.log('o botão sim foi clicado');
    exibirTextoNaTelaId('p', soberDays += 1);
    exibirTextoNaTelaId('p2', 'Parabéns, mais um de muitos!');
    disableButtons();
    setTimeout(reset, delay);
}
function nao() {
    console.log('o botão nao foi clicado');
        exibirTextoNaTelaId('p', soberDays = 0);
        exibirTextoNaTelaId('p2', 'Tudo bem, Nunca é tarde para recomeçar');
        disableButtons();
        setTimeout(reset, delay);
}