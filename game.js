
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");
const d6 = document.getElementById("d6");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");
const d10 = document.getElementById("d10");
const speech=document.getElementById("speech");
const espeech=document.getElementById("enhp");

let hp =200;
let ehp=200;


let world = 1;
let l = 1;
let el = 1;
let strenth = 200;
d1.style.background ="url('dragon.gif')";
d1.style.backgroundSize = ' 350px 350px'; 

function youwin(){
    world = 10;
    document.body.style.background="url('winner.gif')";
    document.body.style.backgroundSize = ' 2000px 1000px'; 
    }
    function youlose(){
        world = 11;
        document.body.style.background="url('game-over-its-over.gif')";
        document.body.style.backgroundSize = ' 2000px 1000px'; 
        speech.innerHTML='';
        espeech.innerHTML='';
        }
        
function backtohome(){
   
    document.body.style.background ="url('theodor-kipen-isometricruin108pbackground.gif')";
    world = 2;
    speech.innerHTML='HEALTH POINTS ='+hp;
    espeech.innerHTML = "You shall defeet the man of winds the birds of ice and the creator";
    ehp =200;
}
function ba1(){
    d5.style.backgroundImage = "url('wind.webp')";
    d5.style.backgroundSize = "350px 350px";
    d3.style.backgroundImage = "url('wind.webp')";
    d3.style.backgroundSize = "350px 350px";
    if(l==5){
        hp = hp -5;
    }
    if(l==3){
        hp = hp -5;
    }
    speech.innerHTML='HEALTH POINTS ='+hp;
}
function ba2(){
    d3.style.backgroundImage = "url('wind.webp')";
    d2.style.backgroundImage = "url('wind.webp')";
    d3.style.backgroundSize = "350px 350px";
    d2.style.backgroundSize = "350px 350px";
    if(l==2){
        hp = hp -5;
    }
    if(l==3){
        hp = hp -5;
    }
    speech.innerHTML='HEALTH POINTS ='+hp;
}
function ba3(){
    d10.style.backgroundImage = "url('wind.webp')";
    d10.style.backgroundSize = "350px 350px";
    d8.style.backgroundImage = "url('wind.webp')";
    d8.style.backgroundSize = "350px 350px";
    if(l==10){
        hp = hp -5;
    }
    if(l==8){
        hp = hp -5;
    }
    speech.innerHTML='HEALTH POINTS ='+hp;
}
function ba4(){
    d8.style.backgroundImage = "url('wind.webp')";
    d8.style.backgroundSize = "350px 350px";
    d7.style.backgroundImage = "url('wind.webp')";
    d7.style.backgroundSize = "350px 350px";
    d5.style.background ="url('')";
    d4.style.background ="url('')";
    if(l==8){
        hp = hp -5;
    }
    if(l==7){
        hp = hp -5;
    }
    speech.innerHTML='HEALTH POINTS ='+hp;
}
function bai(){
    let ran = Math.floor(Math.random()*5);
    worldran=ran;
    let rana= Math.floor(Math.random()*3);
    worldrana = rana;
    console.log(rana);

if (ran ==1){
    d4.style.background ="url('breeze-money.gif')";
    d4.style.backgroundSize = ' 350px 350px';
    d5.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";
    el = 4;
    if (rana ==2){
        setTimeout(ba1(), 3000);
        d4.style.background ="url('breeze2.gif')";
        d4.style.backgroundSize = ' 350px 350px';
    }

}
if (ran ==2){
    d5.style.background ="url('breeze-money.gif')";
    d5.style.backgroundSize = ' 350px 350px';
    d4.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";
    el =5;
    if (rana ==2){
        setTimeout(ba2(), 3000);
        d5.style.background ="url('breeze2.gif')";
        d5.style.backgroundSize = ' 350px 350px';

    }
}
if (ran == 3){
    d9.style.background ="url('breeze-money.gif')";
    d9.style.backgroundSize = ' 350px 350px';
    d5.style.background ="url('')";
    d4.style.background ="url('')";
    d10.style.background ="url('')";
    el =9
    if (rana ==2){
        setTimeout(ba3(), 3000);
        d9.style.background ="url('breeze2.gif')";
        d9.style.backgroundSize = ' 350px 350px';
    }
}
if (ran == 4){
    if (rana ==2){
        setTimeout(ba4(), 3000);
        d10.style.background ="url('breeze2.gif')";
        d10.style.backgroundSize = ' 350px 350px';
    }
    d10.style.background ="url('breeze-money.gif')";
    d10.style.backgroundSize = ' 350px 350px';
    d5.style.background ="url('')";
    d9.style.background ="url('')";
    d4.style.background ="url('')";
    el =10;

}
}
function b1(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d2.style.backgroundImage = "url('fire.webp')";
    d3.style.backgroundImage = "url('fire.webp')";
    d2.style.backgroundSize = "350px 350px";
    d3.style.backgroundSize = "350px 350px";

}
function b2(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d3.style.backgroundImage =" url('fire.webp')";
    d5.style.backgroundImage =" url('fire.webp')";
    d3.style.backgroundSize = "350px 350px";
    d5.style.backgroundSize = "350px 350px";
    if (el == 5){
        ehp = ehp-5
        espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       }
       

}
function b3(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d4.style.backgroundImage = "url('fire.webp')";
    d5.style.backgroundImage = "url('fire.webp')";
    d4.style.backgroundSize = "350px 350px";
    d5.style.backgroundSize = "350px 350px";
    if (el == 4){
        ehp = ehp-5
        espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       }
    if (el == 5){
       ehp = ehp-5
       espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       }

}
function b4(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
}
function b5(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d4.style.backgroundImage = "url('fire.webp')";
    d4.style.backgroundSize = "350px 350px";
    if (el == 4){
        ehp = ehp-5
        espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       }
       
}
function b6(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d7.style.backgroundImage = "url('fire.webp')";
    d8.style.backgroundImage = "url('fire.webp')";
    d7.style.backgroundSize = "350px 350px";
    d8.style.backgroundSize = "350px 350px";
    
}
function b7(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    if (world == 2){
        world =3;
    document.body.style.background ="url('dungeon1.jfif')";
    document.body.style.backgroundSize = "1000px 1000px"
    d4.style.background ="url('breeze-money.gif')";
    d4.style.backgroundSize = ' 350px 350px';
    document.getElementById('bgm').play();
    document.getElementById("bgm").loop = true;
    espeech.innerHTML = "ENEMY HEALTH POINTS="+ehp;
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
}
d8.style.backgroundImage =" url('fire.webp')";
d10.style.backgroundImage = "url('fire.webp')";
d8.style.backgroundSize = "350px 350px";
d10.style.backgroundSize = "350px 350px";
if (el == 10){
    ehp = ehp-5
    espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
   }

}
function b8(){

    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d9.style.backgroundImage =" url('fire.webp')";
    d10.style.backgroundImage = "url('fire.webp')";
    d9.style.backgroundSize = "350px 350px";
    d10.style.backgroundSize = "350px 350px";
    if (el == 9){
        ehp = ehp-5
        espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       }
    if (el == 10){
       ehp = ehp-5
       espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       speech.innerHTML ='HEALTH POINTS='+ehp;
       }
       
}
function b9(){
    if (world==3){
        bai()
    } 
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    if (world == 2){
        world =4;
        document.body.style.background='url("forest.jfif")';
        document.body.style.backgroundSize ="1000px 850px";
        espeech.innerHTML="ENEMY HEALTH POINTS ="+ehp;
        gato();

    }
}

function b10(){
    if (world==3){
        bai()
    }
    if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
    d9.style.backgroundImage = "url('fire.webp')";
                             
    d9.style.backgroundSize = "350px 350px";
    if (el == 9){
        ehp = ehp-5
        espeech.innerHTML ='ENEMY HEALTH POINTS='+ehp;
       }
       
}

function d1f(){
 
            
    document.getElementById('roar').play();
    d1.style.background ="url('dragon.gif')";
    d1.style.backgroundSize = ' 350px 350px'; 
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d4.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";

    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()
        }
l=1;
if (ehp <= 0) {
    youwin();
  
  }
  if (hp <= 0) {
    youlose();
  
  }
  if (world==5){
    d6.style.background = "url('Basilisk.webp')";
    d6.style.backgroundSize="350px 350px";
  }
}
function d2f(){
    document.getElementById('roar').play();
    d2.style.background ="url('dragon.gif')";
    d2.style.backgroundSize = ' 350px 350px';
    d1.style.background ="url('')";
    d3.style.background ="url('')";
    d4.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";
    
    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()
        
        }
l=2;   
if (ehp <= 0) {
    youwin();
  
  }    
  if (hp <= 0) {
    youlose();
  
  }     
  if (world==5){
    d6.style.background = "url('Basilisk.webp')";
    d6.style.backgroundSize="350px 350px";
  }
}
function d3f(){
    document.getElementById('roar').play();
    d3.style.background ="url('dragon.gif')";
    d3.style.backgroundSize = ' 350px 350px';
    d2.style.background ="url('')";
    d1.style.background ="url('')";
    d4.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";
    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        
        bai()
        }
l=3;
if (ehp <= 0) {
    youwin();
  
  }
  if (hp <= 0) {
    youlose();
  
  }
  if (world==5){
    d6.style.background = "url('Basilisk.webp')";
    d6.style.backgroundSize="350px 350px";
  }
}
function d4f(){
    document.getElementById('roar').play();
    d4.style.background ="url('dragon.gif')";
    d4.style.backgroundSize = ' 350px 350px';
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d1.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";
    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()
        
        }
     l=4;  
     if (ehp <= 0) {
        youwin();
      
      }   
      if (hp <= 0) {
        youlose();
      
      }  
      if (world==5){
        d6.style.background = "url('Basilisk.webp')";
        d6.style.backgroundSize="350px 350px";
      }
}
function d5f(){
    document.getElementById('roar').play();
    d5.style.background ="url('dragon.gif')";
    d5.style.backgroundSize = ' 350px 350px';
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d4.style.background ="url('')";
    d1.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";

    
    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        
        bai()
        }
       l=5;     
       if (ehp <= 0) {
        youwin();
      
      }
      if (hp <= 0) {
        youlose();
      
      }
      if (world==5){
        d6.style.background = "url('Basilisk.webp')";
        d6.style.backgroundSize="350px 350px";
      }
}
function d6f(){
    
    document.getElementById('roar').play();
    d6.style.background ="url('dragon.gif')";
    d6.style.backgroundSize = ' 350px 350px'; 
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d4.style.background ="url('')";
    d5.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d1.style.background ="url('')";
    d10.style.background ="url('')";
    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()
        
        }
      l=6;  
      if (ehp <= 0) {
        youwin();
      
      } 
      if (hp <= 0) {
        youlose();
      
      }   
      if (world==5){
        d6.style.background = "url('Basilisk.webp')";
        d6.style.backgroundSize="350px 350px";
      }
}
function d7f(){
    
    document.getElementById('roar').play();
    d7.style.background ="url('dragon.gif')";
    d7.style.backgroundSize = ' 350px 350px';
    d1.style.background ="url('')";
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d8.style.background ="url('')";
    d4.style.background ="url('')";
    d9.style.background ="url('')";
    d10.style.background ="url('')";

    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        
        bai()
        }
        if (ehp <= 0) {
            youwin();
          
          }  
          if (hp <= 0) {
            youlose();
          
          }  
    
     l=7;  
     if (world==5){
      d6.style.background = "url('Basilisk.webp')";
      d6.style.backgroundSize="350px 350px";
    }     
}
function d8f(){
    document.getElementById('roar').play();
    d8.style.background ="url('dragon.gif')";
    d8.style.backgroundSize = ' 350px 350px';
    d2.style.background ="url('')";
    d1.style.background ="url('')";
    d4.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d9.style.background ="url('')";
    d3.style.background ="url('')";
    d10.style.background ="url('')";

    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()
        
        }
        if (ehp <= 0) {
            youwin();
          
          } 
          if (hp <= 0) {
            youlose();
          
          }   
    
          l=8; 
          if (world==5){
            d6.style.background = "url('Basilisk.webp')";
            d6.style.backgroundSize="350px 350px";
          } 
}
function d9f(){  

    document.getElementById('roar').play();
    d9.style.background ="url('dragon.gif')";
    d9.style.backgroundSize = ' 350px 350px';
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d4.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d1.style.background ="url('')";
    d10.style.background ="url('')";
    if (world == 3){

        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()
        
        }
     l=9; 
     if (ehp <= 0) {
        youwin();
      
      } 
      if (hp <= 0) {
        youlose();
      
      }   
      if (world==5){
        d6.style.background = "url('Basilisk.webp')";
        d6.style.backgroundSize="350px 350px";
      }
}
function d10f(){
    document.getElementById('roar').play();
    d10.style.background ="url('dragon.gif')";
    d10.style.backgroundSize = ' 350px 350px';
    d2.style.background ="url('')";
    d3.style.background ="url('')";
    d1.style.background ="url('')";
    d5.style.background ="url('')";
    d6.style.background ="url('')";
    d7.style.background ="url('')";
    d8.style.background ="url('')";
    d9.style.background ="url('')";
    d4 .style.background ="url('')";
    if (world == 3){
        d4.style.background ="url('breeze-money.gif')";
        d4.style.backgroundSize = ' 350px 350px';
        bai()     
        }
       l=10;   
       if (ehp <= 0) {
        youwin();
      
      }   
      if (hp <= 0) {
        youlose();    
      } 
      if (world==5){
        d6.style.background = "url('Basilisk.webp')";
        d6.style.backgroundSize="350px 350px";
      }
}
function gato(){
  world = 5;
  d6.style.background ="url('Basilisk.webp')";
  d6.style.backgroundsize="350px 350px";
  alert(" I AM THE CREATOR OF THIS DIVINE WORLD . YOU THINK YOU HAVE EVEN A MICRONS CHANCE OF DEFEETING ME");
  ga()
}
function ga(){
  var gra=Math.round(Math.random()*11);
  if (gra==2){
    d2.innerHTML = 'uhsWN  h mcvnjgkieu4j,m,ndfgkmtvhfjdjfhdszzzzzzzzzzzzzzzzzzvbgyuszj0101010100101010100101010010101010';
    d2.style.background='url("wind.gif")';
  }
  if(gra==3){
    d3.innerHTML ="x b cgs2wi jehefiysre u5j3wklsljrdhfery  4wt  ehsjas khzgbgdety4ijsakyeyyfhgjwtehrhreyushfuhj";
    d3.style.background="url('Basilisk.webp')";
  }
  if (gra==4){
    d4.innerHTML = 'uhsWN  h mcvnjgkieu4j,m,ndfgkmtvhfjdjfhdszzzzzzzzzzzzzzzzzzvbgyuszj0101010100101010100101010010101010';
    d4.style.background='url("wind.gif")';
  }
  if(gra==5){
    d5.innerHTML ="x b cgs2wi jehefiysre u5j3wklsljrdhfery  4wt  ehsjas khzgbgdety4ijsakyeyyfhgjwtehrhreyushfuhj";
    d5.style.background="url('Basilisk.webp')";
  }
  if (gra==6){
    d6.innerHTML = 'uhsWN  h mcvnjgkieu4j,m,ndfgkmtvhfjdjfhdszzzzzzzzzzzzzzzzzzvbgyuszj0101010100101010100101010010101010';
    d6.style.background='url("wind.gif")';
  }
  if(gra==7){
    d7.innerHTML ="x b cgs2wi jehefiysre u5j3wklsljrdhfery  4wt  ehsjas khzgbgdety4ijsakyeyyfhgjwtehrhreyushfuhj";
    d7.style.background="url('Basilisk.webp')";
  }
  if (gra==8){
    d8.innerHTML = 'uhsWN  h mcvnjgkieu4j,m,ndfgkmtvhfjdjfhdszzzzzzzzzmdzzzvbgyuszj0101010100101010100101010010101010';
    d8.style.background='url("wind.gif")';
  }
  if(gra==9){
    d9.innerHTML ="x b cgs2wi jehefiysre u5j3wklsljrdhfery  4wt  ehsjas khzgbgdety4ijsakyeyyfhgjwtehrhreyushfuhj";
    d9.style.background="url('Basilisk.webp')";
  }
  if (gra==10){
    d10.innerHTML = 'uhsWN  h mcvnjgkieu4j,m,ndfgkmtvhfjdjfhqzzzvbgyuszj0101010100101010100101010010101010';
    d10.style.background='url("wind.gif")';
  }
  
  }

