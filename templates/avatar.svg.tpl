<svg viewBox="0 0 <?=$size;?> <?=$size;?>">
    <?php foreach($matrix as $x => $row): ?>
        <?php foreach($row as $y => $color): ?>
            <rect x="<?=$x?>" y="<?=$y?>" width="<?=$size?>" height="<?=$size?>" fill="<?=$color?>" />
        <?php endforeach; ?>
    <?php endforeach; ?>
</svg>