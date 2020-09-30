<?php

class SvgRenderer {
   
    public function render(AvatarMatrix $avatar)
    {
        $size = $avatar->getSize();
        $matrix = $avatar->getMatrix();

        ob_start();
        include '../templates/avatar.svg.tpl';
        return ob_get_clean();
    }
}