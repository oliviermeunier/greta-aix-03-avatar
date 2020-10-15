/**
 * Gestion de la génération de l'avatar en AJAX
 * Gestion de la sauvegarde de l'avatar en AJAX
 */

 /**
  * FONCTIONS
  */

  /**
   * Gestion duformulaire associé au bouton "GENERER"
   * @param {*} event 
   */
 function onSubmitGenerate(event)
 {
    // On commence par bloquer la soumission du formulaire en annulant le comportement par défaut du navigateur
    event.preventDefault();

    /**
     * Je récupère les valeurs des champs du formulaire : taille et nombre de couleurs
     * Moyen le plus moderne : utiliser la classe JavaScript FormData
     */ 
    const formData = new FormData(event.currentTarget);
    const size = formData.get('size');
    const numberOfColors = formData.get('number-of-colors');

    // Construction de l'URL pour la génération d'un nouvel avatar
    const url = `ajax.php?size=${size}&number-of-colors=${numberOfColors}`;

    // Envoi de la requête AJAX avec l'API fetch
    fetch(url)
        .then(response => response.text())
        .then(svg => {
            // On intègre le code SVG de l'avatar à la place de l'avatar existant dans le code HTML
            document.querySelector('.svg-container').innerHTML = svg;
        });
 }

/**
 * Gestion de la soumission du formulaire lié au bouton "ENREGISTRER"
 * @param {*} event 
 */
function onSubmitSave(event)
{
    // On commence par bloquer la soumission du formulaire en annulant le comportement par défaut du navigateur
    event.preventDefault();

    // On récupère les données du formulaire en créant un objet FormData
    const formData = new FormData(event.currentTarget);

    // Envoi de la requête AJAX pour enregistrer l'avatar
    fetch('ajax.php', {
        method: 'post',
        body: formData
    })
    .then(response => response.text())
    .then(response => console.log(response));
}

/**
 * CODE PRINCIPAL
 */
document.getElementById('generate-avatar-form').addEventListener('submit', onSubmitGenerate);
document.getElementById('save-avatar-form').addEventListener('submit', onSubmitSave);
