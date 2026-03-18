<?php
$total = isset($numColms) && is_numeric($numColms) ? max(0, (int)$numColms) : 0;
$images = $images ?? [];
$title = $title ?? 'Notas destacadas';
?>

<section class="container ns-featured" aria-label="<?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?>">
    <?php for ($i = 0; $i < $total; $i++): ?>
        <?php
        $image = $images[$i] ?? 'https://dummyimage.com/560x220/ccc/fff';
        $alt = 'Destacada ' . ($i + 1);
        ?>
        <article>
            <img src="<?= htmlspecialchars($image, ENT_QUOTES, 'UTF-8'); ?>" alt="<?= htmlspecialchars($alt, ENT_QUOTES, 'UTF-8'); ?>">
        </article>
    <?php endfor; ?>
</section>