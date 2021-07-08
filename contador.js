window.addEventListener("load" , () => {
   
    const botao = document.getElementById("botao");
    botao.addEventListener("click" , () => {


    //tempo em segundos
    let sec = 180;

    const countDiv = document.getElementById("timer");

    const secpass = () => {
        //Criando minutos e segundos
        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;
        //02:04 (colocar esses 0 no inicio)
        if (segundosRestantes < 10){
            segundosRestantes = "0" + segundosRestantes;
        }

        if (min < 10){
            min = "0" + min;
        }
        //gera o formato 09:59
        countDiv.innerHTML = min + ":" + segundosRestantes;
        //condição final (se chegar em zero, mostra "acabou")
        if(sec > 0){
            //diminua 1 segundo toda vez até zerar
            sec = sec - 1;
        }
        else {
            countDiv.innerHTML = "ACABOU!";
        }
    };

    const countDown = setInterval(() => secpass(), 1000)
    });

});

