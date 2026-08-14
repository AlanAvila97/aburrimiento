  
<article class="lead-block mt-4 row-gap-3">
    <a class="text-decoration-none" href="<?= $link1 ?? '#'?>">
        <figure class="thumb m-0">
            <img src="<?= htmlspecialchars($image ?? '', ENT_QUOTES, 'UTF-8'); ?>" alt="<?= htmlspecialchars(html_entity_decode($title ?? '', ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?>">
            <figcaption class="lead-caption pt-2"> <?= htmlspecialchars(html_entity_decode($principalContent ?? '', ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?>
            </figcaption>
            <div class="separator-red"></div>
        </figure>
    </a>
    <div class="lead-copy">
        <a class="text-decoration-none" href="<?= $link2 ?? '#'?>">
            <div>
                <h4 class="fw-bold text-uppercase"><?= htmlspecialchars(html_entity_decode($subtitle1 ?? '', ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></h4>
                <p><?= htmlspecialchars(html_entity_decode($summary1 ?? '', ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></p>
            </div>
        </a>
        <div class="separator-red"></div>
        <a class="text-decoration-none" href="<?= $link3 ?? '#'?>">
            <div>
                <h4 class="fw-bold text-uppercase"><?= htmlspecialchars(html_entity_decode($subtitle2 ?? '', ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></h4>
                <p><?= htmlspecialchars(html_entity_decode($summary2 ?? '', ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></p>
            </div>
        </a>
    </div>
</article>

