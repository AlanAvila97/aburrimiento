<section class="section-images-grid mt-5 container" aria-label="Destacadas">
    <article>
        <img
            src="<?= htmlspecialchars($images[0] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
            alt="Destacada principal">
    </article>

    <div class="section-images-right">
        <article>
            <img
                src="<?= htmlspecialchars($images[1] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                alt="Destacada secundaria 1">
        </article>
        <article>
            <img
                src="<?= htmlspecialchars($images[2] ?? '', ENT_QUOTES, 'UTF-8'); ?>"
                alt="Destacada secundaria 2">
        </article>
    </div>
</section>