// lien js avec champ saisi / bouton / liste de proposition / liste de comparaison
let input = document.querySelector("#champ");
let valider = document.querySelector("#valider");
let liste = document.querySelector("#liste");
let completion = document.querySelectorAll("h2 span")


// fonction qui retourne true si la saisie correspond exactement au début du menu
function compare(saisie, menu) {

    // la saisie est aubligatoirement plus petite ou égale que le menu
    // et la sasie ne doit pas être vide
    if (saisie.length > menu.length || saisie.length == 0)
        return false;

    // nb de caractere commun entre la saisie et le menu
    let commun_char = 0;

    // pour chaque caractere de la saisie // Menu recupere la chaine de charactere de 
    // chaque completion[i].textContent et donc menu i est chaque element de cette chaine
    for (let i = 0; i < saisie.length; i++) {
        if (saisie[i] == menu[i])
            commun_char++;
    }

    // si j'ai autant de caractere commun que j'ai de caractere dans ma saisie
    if (commun_char == saisie.length)
        return true;
    else
        return false;
}

input.addEventListener("input", function () { // a la saisi
    // pour chaque menu
    console.log("input.value = ", input.value)
    console.log("input.value.length = ", input.value.length)
    // boucle qui retirer tous les premier element de la liste tant qu'il y en a un
    while (liste.firstChild) {
        liste.removeChild(liste.firstChild);
    }
    // variable pour detecter si au moins un des menu fit avec l'iteration actuel de l'input
    let r = 0;
    for (let i = 0; i < completion.length; i++) {
        if (compare(input.value, completion[i].textContent) == true) {
            // ajouter le menu à la liste des potentiels menus qui fit avec la saisie
            let li = document.createElement("li");
            li.textContent = completion[i].textContent;
            // si event click sur li alors le champs prend le texte du li, avant appendChild car le navigateur applique 
            // le changement visuel apres que l'event input est etait calculé donc il met un li qui a ete supp. ALORS QUE
            // la le li a deja l'event click avant d'apparaitre (car li existe deja en memoire) donc le click s'execute avant
            //que la list est changer. TIMING et fonctionnement interne...
            li.addEventListener("click", function () {
                input.value = li.textContent;
                alert("Excellent choix !")
            });
            liste.appendChild(li);
            input.style.color = "black";
            r = r + 1; // cette event input avait 1 correcte dans la liste donc ajouter 1 (2 si 2 correcte) car 
            // chaque input fais check tout la liste donc le dernier peut etre false et mettre en rouge alors que 
            // la saisi est correcte avec les premiers
        }
        if (r == 0) {
            input.style.color = "red"; // si il n'y a pas eu de correct durent l'event input -> red
        }
    }
});

