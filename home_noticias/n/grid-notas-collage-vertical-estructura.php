<section class="section-main-news">
    <div class="title-head navbar">
        <h1><?= htmlspecialchars($name_category ?? '', ENT_QUOTES, 'UTF-8'); ?></h1>
    </div>
    <div class="container container-main-news">                
        <?php
            include_once get_template_directory() . '/templates/partials/partials/components/slide-three-images.php';?>
    </div>
</section>