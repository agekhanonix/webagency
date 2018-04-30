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