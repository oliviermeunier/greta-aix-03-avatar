<?php

require __DIR__ . '/../vendor/autoload.php';

$size = 4;
$colors = ['royalblue', 'crimson']; // On pourrait ici tirer des couleurs aléatoires...

$avatar = new AvatarMatrix($size, $colors);
$renderer = new SvgRenderer();

$svg = $renderer->render($avatar);

include __DIR__ . '/../templates/index.phtml';