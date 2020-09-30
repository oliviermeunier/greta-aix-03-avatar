<?php

require 'vendor/autoload.php';
require 'src/AvatarMatrix.php';

$size = 4;
$colors = ['red', 'blue'];

$avatar = new AvatarMatrix($size, $colors);

dump($avatar->getMatrix());
