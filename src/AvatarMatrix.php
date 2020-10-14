<?php

class AvatarMatrix {

    // Définition des constantes de classes
    const DEFAULT_SIZE = 2;
    const DEFAULT_COLORS = ['white', 'black'];

    // Définition des propriétés
    private $size;
    private $colors;
    private $matrix;

    /**
     * Constructeur
     */
    public function __construct(int $size = null, array $colors = null) {

        // Définition des propriétés size et colors
        $this->size = $size ?? self::DEFAULT_SIZE; // Si le paramètre $size est null, je prends la constante de classe DEFAULT_SIZE
        $this->colors = $colors ?? self::DEFAULT_COLORS; // Si le paramètre $colors est null, je prends la constante de classe DEFAULT_COLORS 
        
        // On génère la matrice et on la stocke dans la propriété matrix
        $this->matrix = $this->genRandomMatrix();
    }

    /**
     * Génère une matrice aléatoire
     */
    private function genRandomMatrix(): array
    {
        // Création d'un tableau vide
        $matrix = []; 

        // Je parcours les lignes de ma grille
        for ($y = 0; $y < $this->size; $y++){
        
            // Je parcours la moitié des colonnes, y compris celle du milieu en cas de taille impaire
            for ($x = 0; $x < $this->size / 2; $x++){

                // On tire un indice aléatoire pour le tableau de couleurs
                $colorRandomIndex = rand(0, count($this->colors) - 1);

                // On remplit la case courante et la case symétrique avec la couleur
                $matrix[$x][$y] = $matrix[$this->size - $x -1][$y] = $this->colors[$colorRandomIndex];
            }    
        }

        // On remet les indices du tableau dans l'ordre
        ksort($matrix);

        return $matrix;
    }

    public function getSize(): int 
    {
        return $this->size;
    }

    public function setSize(int $size)
    {
        $this->size = $size;
    }

    public function getColors(): array 
    {
        return $this->colors;
    }

    public function setColors(array $colors)
    {
        $this->colors = $colors;
    }

    public function getMatrix()
    {
        return $this->matrix;
    }
}