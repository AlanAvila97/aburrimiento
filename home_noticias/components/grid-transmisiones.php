<?php
$images = $images ?? [];
$summarys = $summarys ?? [];
$hrfs = $hrfs ?? [];
$items = $items ?? [];

$totalDefault = max(count($images), count($summarys), count($hrfs), count($items));
$total = isset($length) && is_numeric($length) ? max(0, (int)$length) : $totalDefault;
?>

<div class="row row-gap-3 c-media-grid">
    <?php for ($i = 0; $i < $total; $i++): ?>
        <?php
        $item = $items[$i] ?? [];
        $href = $hrfs[$i] ?? ($item['href'] ?? '#');
        $img = $images[$i] ?? ($item['img'] ?? 'https://dummyimage.com/400x225/ccc/fff');
        $title = $summarys[$i] ?? ($item['title'] ?? '');
        ?>

        <div class="col-12 col-md-6 col-lg-3">
            <a class="c-media-grid__card d-block text-decoration-none h-100" href="<?= htmlspecialchars($href, ENT_QUOTES, 'UTF-8'); ?>">
                <figure class="c-media-grid__figure m-0">
                    <img
                        class="c-media-grid__image"
                        src="<?= htmlspecialchars($img, ENT_QUOTES, 'UTF-8'); ?>">
                </figure>

                <?php if ($title !== ''): ?>
                    <div class="c-media-grid__body">
                        <h3 class="c-media-grid__title m-0"><?= htmlspecialchars(html_entity_decode($title, ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></h3>
                    </div>
                <?php endif; ?>
            </a>
        </div>
    <?php endfor; ?>
</div>
