// lien js avec champ saisi / bouton / liste de proposition / liste de comparaison
let input = document.querySelector("#champ");
let valider = document.querySelector("#valider");
let liste = document.querySelector("#liste");
let completion = document.querySelectorAll("h2 span")


// fonction qui retourne true si la saisie correspond exactement au début du menu
function compare(saisie, menu){

    // la saisie est aubligatoirement plus petite ou égale que le menu
    // et la sasie ne doit pas être vide
    if(saisie.length > menu.length || saisie.length == 0)
        return false;

    // nb de caractere commun entre la saisie et le menu
    let commun_char = 0 ;

    // pour chaque caractere de la saisie
    for(let i = 0 ; i < saisie.length; i++){
        if(saisie[i] == menu[i])
            commun_char++;
    }

    // si j'ai autant de caractere commun que j'ai de caractere dans ma saisie
    if(commun_char == saisie.length)
        return true;
    else
        return false;
}

input.addEventListener("input", function () { // a la saisi
    // pour chaque menu
    console.log("input.value = ", input.value)
    console.log("input.value.length = ", input.value.length)
    for(let i = 0 ; i < completion.length; i++){
        if(compare(input.value, completion[i].textContent) == true){
            // ajouter le menu à la liste des potentiels menus qui fit avec la saisie
            alert(" j'ai trouvé un menu portentiel = " + completion[i].textContent);
        }
    }
});
