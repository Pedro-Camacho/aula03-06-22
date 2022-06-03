let score = 0;
function loadperguntas(){
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
}
function start(){
   let primeirapergunta=document.getElementById("questionario");
   primeirapergunta.style.display="block";
   let limpartela=document.getElementById("startbttn");
   limpartela.style.display="none";
}
function responder1(valor){
   let next= document.getElementById("pergunta2");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       alert("acertou");
       score++;
      resposta.innerText=score; 
    }  
    let ultima=document.getElementById("pergunta1");
    ultima.style.display="none";
    
}

function responder2(valor){
   let next= document.getElementById("pergunta3");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       alert("acertou");
       score++;  
    }  
    let ultima=document.getElementById("pergunta2");
    ultima.style.display="none";
}

function responder3(valor){
   let next= document.getElementById("pergunta4");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       alert("acertou");
       score++;  
    }  
    let ultima=document.getElementById("pergunta3");
    ultima.style.display="none";
}
function responder4(valor){
   let next= document.getElementById("pergunta4");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       alert("acertou");
       score++;  
    }  
    let ultima=document.getElementById("pergunta3");
    ultima.style.display="none";
}