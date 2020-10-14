<?php

require __DIR__ . '/../vendor/autoload.php';

// Initialisation des valeurs des options taille et nombre de couleurs
$size = 4;
$numberOfColors = 2; // On pourrait ici tirer des couleurs aléatoires...

// Si le formulaire est soumis, on va récupérer les données 
if(!empty($_GET)){

    $size = $_GET['size'];
    $numberOfColors = $_GET['number-of-colors'];
}

// Création d'un tableau de couleurs aléatoires
$colors = ColorHelper::getRandomColors($numberOfColors);

$avatar = new AvatarMatrix($size, $colors);
$renderer = new SvgRenderer();

$svg = $renderer->render($avatar);

include __DIR__ . '/../templates/index.phtml';