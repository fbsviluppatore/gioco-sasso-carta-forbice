var risultato = Math.floor(Math.random() * 3);
var carta;
var sasso;
var forbice;
var scelta;
var accumulatore=0
var score=0;          


if (risultato === 0){    
risultato='carta';console.log(risultato);
}else if( risultato=== 1)
{    risultato='sasso';console.log(risultato);
}else{
    risultato='forbice';console.log(risultato);
};




function giocata1(){ 
    document.getElementById("sasso").classList.add("scelta-giocatore");    
    document.getElementById("carta").classList.add("no-scelta");                           
    document.getElementById("forbice").classList.add("no-scelta");                      
    if (risultato==='sasso'){
        const copia=document.createElement('button');
        copia.classList.add("scelta-pareggio1");
        const game=document.getElementById('via');
        game.appendChild(copia);
        document.getElementById("result").innerHTML='hai pareggiato';}
    else if(risultato==='carta')
    {   document.getElementById("carta").classList.add("scelta-pc");
    document.getElementById("result").innerHTML='hai perso';}
    else{document.getElementById("forbice").classList.add("scelta-pc");
    document.getElementById("result").innerHTML='hai vinto';;
    };
    document.getElementById('n').innerHTML=score;
}

function giocata2(){    
    document.getElementById("carta").classList.add("scelta-giocatore");                           
    document.getElementById("sasso").classList.add("no-scelta");                           
    document.getElementById("forbice").classList.add("no-scelta");                           
    if (risultato==='carta'){   
        const copia=document.createElement('button');
        copia.classList.add("scelta-pareggio2");
        const game=document.getElementById('via');
        game.appendChild(copia);
        document.getElementById("result").innerHTML='hai pareggiato';
    }
    else if(risultato==='sasso'){
        document.getElementById("sasso").classList.add("scelta-pc");
        document.getElementById("result").innerHTML='hai vinto';
        }
    else{
        document.getElementById("forbice").classList.add("scelta-pc");
        document.getElementById("result").innerHTML='hai perso';
    };
    document.getElementById('n').innerHTML=score;
}

function giocata3(){  
    document.getElementById("forbice").classList.add("scelta-giocatore"); 
    document.getElementById("sasso").classList.add("no-scelta");                           
    document.getElementById("carta").classList.add("no-scelta");                           
    if (risultato==='forbice'){
        const copia=document.createElement('button');
        copia.classList.add("scelta-pareggio3");
        const game=document.getElementById('via');
        game.appendChild(copia);
        document.getElementById("result").innerHTML='hai pareggiato';}
    else if(risultato==='carta'){
        document.getElementById("carta").classList.add("scelta-pc");
        document.getElementById("result").innerHTML='hai vinto';}
    else{
        document.getElementById("sasso").classList.add("scelta-pc");
        document.getElementById("result").innerHTML='hai perso';};
    document.getElementById('n').innerHTML=score;
}



