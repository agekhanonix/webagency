/* --- CHANGEMENT DU BORDERTOP DE LA BARRE DE MENU SUR CLICK --- */
var elLisH = document.querySelectorAll('.navMenu-horiz li');
elLisH[0].style.borderTop = '0.125rem solid #5cadd3';                         /* On initialise le 1er elmt du menu */
for(i=0; i<elLisH.length; i++) {
    elLisH[i].addEventListener('click', function(e){
        for(i=0; i<elLisH.length; i++) {
            elLisH[i].style.borderTop = '';
        }
        e.target.parentNode.style.borderTop = '0.125rem solid #5cadd3';      /* On réinitialise l'élément cliqué */
    });
};
var elBut = document.getElementById('toggle-button');
var elMenu = document.getElementById('navMenu-vert');
elBut.addEventListener('click',function(){
    if(elMenu.style.display === 'none') {
        elMenu.style.display = 'block';
    } else {
        elMenu.style.display = 'none';
    }
});
/* --- CHANGEMENT DU BACKGROUND DU MENU PORTFOLIO SUR CLICK --- */
var Images = [];
var Titres = [];
Images[0] = 'images/slider/bg1.jpg';
Images[1] = 'images/slider/bg2.jpg';
Titres[0] = 'La petite fille aux mains colorées';
Titres[1] = 'Le petit garçon au mégaphone';
var img = 0;
var miliemes = 0;
var elSliders = {
    slider: document.querySelector('.slider'),
    image: document.getElementById('image-slider'),
    btn: {
        left: document.querySelector('.btnLeft'),
        right: document.querySelector('.btnRight')
    }
}
var initialize = function() {
    elSliders.btn.left.onclick = function() {changeImage(-1);};
    elSliders.btn.right.onclick = function() {changeImage(+1);};
    window.setInterval('chronometer()', 1);
    changeImage(img);
}
function changeImage(no) {
    img = Math.abs(img + no) % 2;
    miliemes = 0;
    elSliders.image.src = Images[img];
    elSliders.image.title = Titres[img];
}
function chronometer() {
    miliemes  += 1;
    if(miliemes >= 3000) {
        miliemes = 0;
        changeImage(+1);
    }
    width = (miliemes / 3000)*100;
    document.getElementById('timer').style.width = width + '%';
}


/* --- VERIFICATION DU FORMULAIRE DE CONTACT AVANT ENVOI --- */
/* Fonctions de desactivation des messages d'erreurs         */
function deactivateErrMsg(){
    var elErrMsg = document.getElementById('errMsg');
    elErrMsg.style.display = 'none';
};
/* --- Fonctions de vérification du formulaire           --- */
var check = {};
check['lastName'] = function(id) {
    var name = document.getElementById(id);
    var elErrMsg = document.getElementById('errMsg');
    if(name.value.length >= 2){
        name.className = 'no-error',
        elErrMsg.style.display = 'none';
        return true;
    } else {
        name.className = 'error',
        elErrMsg.textContent = 'Un nom ne peut pas faire moins de 2 caractères';
        elErrMsg.style.display = 'block';
        return false;
    }
};
check['Email'] = function(id) {
    var email = document.getElementById(id);
    var elErrMsg = document.getElementById('errMsg');
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(email.value.length >= 8 && regex.test(email.value)) {
        email.className = 'no-error';
        elErrMsg.style.display = 'none';
        return true;
    } else {
        email.className = 'error';
        elErrMsg.textContent = "Ce doit etre une adresse courriel valide";
        elErrMsg.style.display = 'block';
        return false;
    }
};
check['Subject'] = function(id) {
    var subject = document.getElementById(id);
    var elErrMsg = document.getElementById('errMsg');
    if(subject.value.length >= 2) {
        subject.className = 'no-error';
        elErrMsg.style.display = 'none';
        return true;
    } else {
        subject.className = 'error';
        elErrMsg.textContent = "L'objet du message doit faire au moins 2 caractères";
        elErrMsg.style.display = 'block';
        return false;
    }
};
check['Message'] = function(id) {
    var elErrMsg = document.getElementById('errMsg');
    var message = document.getElementById(id);
    if(message.value.length >= 10) {
        message.classname = 'no-error';
        elErrMsg.style.display = 'none';
        return true;
    } else {
        message.className = 'error';
        elErrMsg.textContent = "Le message doit être composé d'au moins 10 caractères";
        elErrMsg.style.display = 'block';
        return false;
    }
};
// --- Mise en place des evènements                           --- */
(function(){
    var myForm = document.getElementById('form-contact');
    var inputs = document.querySelectorAll('#form-contact input[type=text], #form-contact textarea');
    for(var i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(e){
            check[e.target.id](e.target.id);
        });
    }
    myForm.addEventListener('submit', function(e){
        var result = true;
        for(var i in check) {
            result = check[i](i) && result;
        }
        if(result) {
            var elErrMsg = document.getElementById('errMsg');
            elErrMsg.textContent = 'Le message a été envoyé';
            elErrMsg.style.color = '#5cadd3';
            elErrMsg.style.borderColor = '#00ff00';
            elErrMsg.style.backgroundColor = '#bfffbf';
            elErrMsg.style.display = 'block';
        }
        e.preventDefault();
    });
    initialize(); /* Initialisation du slider */
})();

deactivateErrMsg();
