<?php

class ColorHelper {

    /**
     * Génère une couleur aléatoire au format RGB 
     */
    public static function getRandomColor()
    {
        $red = rand(0,255);
        $green = rand(0,255);
        $blue = rand(0,255);

        return "rgb($red, $green, $blue)";
    }

    /**
     * Génère un tableau de couleurs aléatoires
     * @param int $numberOfColors - le nombre de couleurs souhaitées
     */
    public static function getRandomColors(int $numberOfColors)
    {
        $colors = array_fill(0, $numberOfColors, null);

        return array_map(function(){
            return self::getRandomColor();
        }, $colors);
    }
}