<?php

require 'vendor/autoload.php';

$size = 5;
$colors = ['red', 'blue'];

// Création d'un tableau vide
$matrix = []; 

// Je parcours les lignes de ma grille
for ($y = 0; $y < $size; $y++){
 
    // Je parcours la moitié des colonnes, y compris celle du milieu en cas de taille impaire
    for ($x = 0; $x < $size / 2; $x++){

        // On tire un indice aléatoire pour le tableau de couleurs
        $colorRandomIndex = rand(0, count($colors) - 1);

        // On remplit la case courante et la case symétrique avec la couleur
        $matrix[$x][$y] = $matrix[$size - $x -1][$y] = $colors[$colorRandomIndex];
    }    
}

// On remet les indice du tableau dans l'ordre
ksort($matrix);

dump($matrix);
