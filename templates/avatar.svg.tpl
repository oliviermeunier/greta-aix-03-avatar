<svg viewBox="0 0 <?=$size;?> <?=$size;?>">
    <?php foreach($matrix as $x => $col): ?>
        <?php foreach($col as $y => $color): ?>
            <rect x="<?=$x?>" y="<?=$y?>" width="<?=$size?>" height="<?=$size?>" fill="<?=$color?>" />
        <?php endforeach; ?>
    <?php endforeach; ?>
</svg>