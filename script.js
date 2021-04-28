// Afficher une boîte de dialogue

// $ --> JQuery() permet de transformer l'élément en objet JQuery


$(document).ready(function(){ // Chargement du HTML PUIS exécution du script
    $('#clique').click(function(){
        alert('I feel it coming !');
    });
});



// En JS vanilla, on aurait :
/*
let button = document.getElementById('clique');
 
button.addEventListener('click', () => {
    alert('I feel it coming !');
});
*/