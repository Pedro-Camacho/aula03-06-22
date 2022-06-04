let score = 0;
function acertou(){
	let correto = document.getElementById("corpo");
	
}

function loadperguntas(){
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
}
function init(){
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
       acertou();
       score++;
      resposta.innerText=score; 
    }  
    let ultima=document.getElementById("pergunta1");
    ultima.style.display="none";
    
}
function responder2(valor){
   let next= document.getElementById("pergunta2" );
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta1");
    ultima.style.display="none";
}
function responder3(valor){
   let next= document.getElementById("pergunta4");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta3");
    ultima.style.display="none";
}
function responder4(valor){
   let next= document.getElementById("pergunta5");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta4");
    ultima.style.display="none";
}
function responder5(valor){
   let next= document.getElementById("pergunta6");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta5");
    ultima.style.display="none";
}
function responder6(valor){
   let next= document.getElementById("pergunta7");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta6");
    ultima.style.display="none";
}
function responder7(valor){
   let next= document.getElementById("pergunta8");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
	   acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta7");
    ultima.style.display="none";
}
function responder8(valor){
   let next= document.getElementById("pergunta9");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta8");
    ultima.style.display="none";
}
function responder9(valor){
   let next= document.getElementById("pergunta10");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta9");
    ultima.style.display="none";
}
function responder10(valor){
   let next= document.getElementById("fimquiz");
   next.style.display="block";
   let resposta =document.querySelector("#score");
		resposta.innerText=score;
    if(valor==1){
       acertou();
       score++;  
    }  
    let ultima=document.getElementById("pergunta10");
    ultima.style.display="none";
}