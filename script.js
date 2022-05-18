var numero = 1;
var min = 0;
var hora = 0;
var timer;

function atualizar(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = hora + ":" + min + ":" + numero;
    numero++;
    if(numero == 60){
        min++;
        numero = 0;
        if(min == 60){
            hora++
            min = 0;
        }
    }
}

function iniciar(){
    setTimeout(atualizar, 100); //Executa uma função após o tempo deifinido em milisegundos 1000s = 1s;
    timer = setInterval(atualizar, 1000); // Executa uma função a cada segundo definido;
}

function parar(){
    clearInterval(timer); //Finzaliza o intervalo desejado;
}

function resetar(){
    clearInterval(timer);
    numero = 0;
    min = 0;
    hora = 0;
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = hora + ":" + min + ":" + numero;
}