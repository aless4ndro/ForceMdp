
let mdp;
let compteur = 0;
let regex = new RegExp("[A-Z]");
let regex2 = new RegExp("[a-z]");
let regex3 = new RegExp("[0-9]");
let regex4 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
let message = document.getElementById("message");

function check() {
    compteur = 0;
    mdp = document.getElementById("mdp").value;
    if (regex.test(mdp)) {
        compteur++;
    }
    if (regex2.test(mdp)) {
        compteur++;
    }
    if (regex3.test(mdp)) {
        compteur++;
    }
    if (regex4.test(mdp)) {
        compteur++;
    }
    if (mdp.length < 8) {
        compteur--;
    }

    switch (compteur) {
        case 1:
            message.innerHTML = "Mot de passe très faible";
            break;
        case 2:
            message.innerHTML = "Mot de passe faible";
            break;
        case 3:
            message.innerHTML = "Mot de passe moyen";
            break;
        case 4:
            message.innerHTML = "Mot de passe fort";
            break;
        case 5:
            message.innerHTML = "Mot de passe très fort";
            break;
        default:
            message.innerHTML = "Non conforme";
            break;
}
}
document.getElementById("mdp").addEventListener("keyup", check, false);
