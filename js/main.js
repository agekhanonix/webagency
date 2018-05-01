/* --- CHANGEMENT DU BORDERTOP SUR CLICK --- */
document.getElementById('M1').style.borderTop='2px solid #22b0b3';  /* On initialise le 1er elmt du menu */
var elMts = document.querySelectorAll('.navMenu li');
for(i=0; i<elMts.length; i++) {
    elMts[i].addEventListener('click', function(e){                 /* On dépose un listener sur chacun des items */
        for(j=1; j<=elMts.length; j++) {
            var el = 'M'+j;
            if(el == this.id) {
                document.getElementById(el).style.borderTop = '2px solid #22b0b3'; /* Quand un item est cliqué */
            } else {
                document.getElementById(el).style.borderTop = '';
            }
        }
    });
}
/* ---  TRAITEMENT DU TIMER et AFFICHAGE SOUS LE SLIDER  --- */ 
var dixiemes = 300;
setInterval('chronometre()', 100);
document.getElementById('slide-1').addEventListener('click', function(){
    dixiemes = 300;
    width = (dixiemes / 300)*100;
    document.getElementById('t1').style.width = width + '%';
    document.getElementById('t2').style.width = width + '%';
});
document.getElementById('slide-2').addEventListener('click', function(){
    dixiemes = 300;
    width = (dixiemes / 300)*100;
    document.getElementById('t1').style.width = width + '%';
    document.getElementById('t2').style.width = width + '%';
});
function chronometre() {
    dixiemes  -= 10;
    if(dixiemes <= 0) {
        dixiemes = 300;
        document.getElementById('slide-1').checked = true;
        /*console.log('checked');*/
    }
    width = (dixiemes / 300)*100;
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