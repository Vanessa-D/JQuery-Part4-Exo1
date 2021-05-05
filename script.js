// Déclaration et initialisation d'une variable i --> compteur
let i = 0;

$(function(){ 
    // Au clic du bouton...
    $('#displayCounter').click(function(){
        // On incrémente i
        i++; 
        // On créé un élément input à l'intérieur de la div divCounter --> méthode html()
        $('#divCounter').html('<input id="inputCounter" type="text" class="form-control">');
        // On affiche dans l'input la valeur de i incrémentée à chaque clic --> méthode val(paramètre)
        $('#inputCounter').val(i);
    });
});



// En JS vanilla, on aurait :
/*
let i = 0; 
function displayCounter(){
    i++;
    alert(`Compteur à ${i}`);
    document.getElementById("p").innerHTML = i;
}
});
*/