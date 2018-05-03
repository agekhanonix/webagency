/* --- CHANGEMENT DU BORDERTOP DE LA BARRE DE MENU SUR CLICK --- */
var elLis = document.querySelectorAll('.navMenu li');
elLis[0].style.borderTop = '2px solid #22b0b3';                         /* On initialise le 1er elmt du menu */
for(i=0; i<elLis.length; i++) {
    elLis[i].addEventListener('click', function(e){
        for(i=0; i<elLis.length; i++) {
            elLis[i].style.borderTop = '';
        }
        e.target.parentNode.style.borderTop = '2px solid #22b0b3';      /* On réinitialise l'élément cliqué */
    });
}
/* --- CHANGEMENT DU BACKGROUD DU MENU PORTFOLIO SUR CLICK --- */

/* ---         SLIDESHOW POUS L'ECRAN D'ACCUEIL          --- */

/* ---  TRAITEMENT DU TIMER et AFFICHAGE SOUS LE SLIDER  --- */ 
var secondes = 30;
setInterval('chronometre()', 1000);
document.getElementById('slide-1').addEventListener('click', function(){
    secondes = 30;
    width = (secondes / 30)*100;
    document.getElementById('t1').style.width = width + '%';
    document.getElementById('t2').style.width = width + '%';
});
document.getElementById('slide-2').addEventListener('click', function(){
    secondes = 30;
    width = (secondes / 30)*100;
    document.getElementById('t1').style.width = width + '%';
    document.getElementById('t2').style.width = width + '%';
});
function chronometre() {
    secondes  -= 1;
    if(secondes <= 0) {
        secondes = 30;
        document.getElementById('slide-1').checked = true;
        /*console.log('checked');*/
    }
    width = (secondes / 30)*100;
    document.getElementById('t1').style.width = width + '%';
    document.getElementById('t2').style.width = width + '%';
}

/* --- VERIFICATION DU FORMULAIRE DE CONTACT AVANT ENVOI --- */
function verifForm(f){
   var nameOk = verifName(f.contactName);
   var mailOk = verifMail(f.contactEmail);
   var subOk = verifSubject(f.contactSubject);
   var msgOk = verifMessage(f.contactMessage);
   
   if(nameOk && mailOk && subOk && msgOk) {
        return true;
   } else {
        document.getElementById('msg').className = 'error';
        return false;
   }
}
function surligne(champ, erreur) {
    if(erreur) {
        champ.style.backgroundColor = "ffbbaa";
    } else {
        champ.style.backgroundColor = "";
    }
}
function verifName(champ) {
    if(champ.value.length < 2) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifSubject(champ) {
    if(champ.value.length < 2) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
function verifMail(champ) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value)){
       surligne(champ, true);
       return false;
    } else {
       surligne(champ, false);
       return true;
    }
}
function verifMessage(champ) {
    if(champ.value.length < 2) {
        if(champ.value.length < 2) {
            surligne(champ, true);
            return false;
        } else {
            surligne(champ, false);
            return true;
        }
    }
}