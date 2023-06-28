<?php

require __DIR__ . '/../vendor/autoload.php';

// On stocke dans une constante le nom du dossier dans lequel on enregistre les fichiers SVG
const AVATAR_DIRECTORY = 'avatars';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

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
