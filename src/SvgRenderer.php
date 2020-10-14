<?php

class SvgRenderer {

    /**
     * On injecte en paramètre de la méthode render un objet AvatarMatrix
     */
    public function render(AvatarMatrix $avatar)
    {
        // On extrait de l'objet AvatarMatrix la taille de la matrice et la matrice elle-même 
        $size = $avatar->getSize();
        $matrix = $avatar->getMatrix();

        // On démarre la tamporisation de sortie pour éviter que l'inclusion du fichier de template envoie tout de suite le code au client
        ob_start();
        include '../templates/avatar.svg.tpl';

        // On retourne le contenu du tampon de sortie (et on le vide par la même occasion)
        return ob_get_clean();
    }
}