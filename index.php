<?php

require 'vendor/autoload.php';

$size = 5;
$colors = ['red', 'blue'];

$matrix = []; 

for ($y = 0; $y < $size; $y++){
 
    for ($x = 0; $x < $size / 2; $x++){

        $colorRandomIndex = rand(0, count($colors) - 1);
        $matrix[$x][$y] = $matrix[$size - $x -1][$y] = $colors[$colorRandomIndex];
    }    
}

ksort($matrix);

dump($matrix);
