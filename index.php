<?php

require 'vendor/autoload.php';
require 'src/AvatarMatrix.php';

$size = 5;
$colors = ['red', 'blue'];

$avatar = new AvatarMatrix($size, $colors);

dump($avatar->genRandomMatrix());
