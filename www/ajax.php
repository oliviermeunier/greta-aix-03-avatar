<?php

require __DIR__ . '/../vendor/autoload.php';

// On stocke dans une constante le nom du dossier dans lequel on enregistre les fichiers SVG
const AVATAR_DIRECTORY = 'avatars';

/**
 * Si on est en GET, c'est la requête AJAX de génération de l'avatar qui est demandée
 */
if($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Initialisation des valeurs des options taille et nombre de couleurs
    $size = 4;
    $numberOfColors = 2; // On pourrait ici tirer des couleurs aléatoires...

    // Si le formulaire est soumis, on va récupérer les données 
    if(!empty($_GET)){

        $size = $_GET['size'];
        $numberOfColors = $_GET['numberOfColors'];
    }

    // Création d'un tableau de couleurs aléatoires
    $colors = ColorHelper::getRandomColors($numberOfColors);

    $avatar = new AvatarMatrix($size, $colors);
    $renderer = new SvgRenderer();

    $svg = $renderer->render($avatar);

    // On envoi directement le code source SVG en réponse au client (réponse de la requête AJAX)
    echo $svg;
    die;
}

/**
 * Si on est en POST on sait que c'est la requête AJAX de sauvegarde de l'avatar
 */
else if($_SERVER['REQUEST_METHOD'] == 'POST') {

    // On récupère le code source SVG
    $svg = $_POST['svg'];

    // Génération d'un nom de fichier aléatoire et unique
    $filename =  md5(uniqid(rand(), true)) . '.svg';

    // On vérifie si le dossier avatars/ existe bien, sinon on le crée
    if (!is_dir(AVATAR_DIRECTORY)) {
        mkdir(AVATAR_DIRECTORY);
    }

    // Enregistrement du fichier dans un dossier avatars/
    file_put_contents(AVATAR_DIRECTORY . "/$filename", $svg);

    // On renvoie au client le nom du fichier SVG
    echo $filename;
}