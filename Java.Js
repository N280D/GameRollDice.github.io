
//Définir les variables
//Stock les images 1 à 6 dans des variables
//initialisation à 0
//Ecouter les id des variables
//Ecouter les clic
//créer les boucles et les fonctions (switch)
//issu d'une opération à modifier mais pas une variable
//On ajoute le resultat dans l'id donc besoin de la stocker 
//écoute bouton newgame, on click
 

console.log("java test")

//Définir les variables
//géneré par fonction nombre aléatoire
let scores,roundScore,activePlayer,gamePlaying,nbDe;


//initialisation à 0
document.querySelector(".btn-new").addEventListener("click",clearData);

function clearData() {
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
   
    document.getElementById('dice').style.display='none';
    gamePlaying=true;
    activePlayer=0;
    roundScore=0;
    scores=[0,0]
     
}
clearData;

document.querySelector('.btn-play').addEventListener('click',function(){
if (gamePlaying) {
    //Nombre aléatoire
    let nbDe = Math.floor(Math.random() * 5 + 1);
    console.log(nbDe);

     document.getElementById('dice').style.display='block';
     document.getElementById('dice').src='images/dice-'+nbDe+'.png';

     if (nbDe!==1) {
         roundScore+=nbDe;
         document.querySelector('#current-'+activePlayer).textContent=roundScore;
         
     }
} 
});

document.querySelector('.btn-hold').addEventListener('click',function() {
if (gamePlaying) {
    scores[activePlayer]+=roundScore;

    document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];

    var winningTotal=100;

    if (scores[activePlayer>=winningTotal]) {

        document.querySelector("#name-"+activePlayer).textContent="Winner !";
        document.getElementById('dice').display='none';
        gamePlaying=false;
        
    } else {
        nextPlayer();
    }

}

});

function nextPlayer(){
 activePlayer===0 ? activePlayer=1 : activePlayer=0;
 roundScore=0;

 document.getElementById('current-0').textContent=0;
 document.getElementById('current-1').textContent=0;

}

//Tant que le resulat est inf à 100 rejouer la boucle             
 console.log("finJava");
