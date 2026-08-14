<div class="title-head navbar">
    <h1><?= htmlspecialchars($name_category ?? '', ENT_QUOTES, 'UTF-8'); ?></h1>
</div>
<section class="section-main-news">
    <div class="container container-main-news">
        <div class="row w-100 row-gap-3 mx-0">
            <div class="col-12 col-md-8 col-main">
                <a class="d-block text-decoration-none" href="<?= htmlspecialchars($link1 ?? '', ENT_QUOTES, 'UTF-8'); ?>">
                    <picture>                                            
                    <!--<source media="(max-width: 680px)" 
                            srcset="https://dummyimage.com/800x475/ccc/fff">
                        <source media="(max-width: 991px)" 
                            srcset="https://dummyimage.com/1366x812/ccc/fff">-->
                        <img class="img-responsive" 
                            src="<?= htmlspecialchars($imagen1 ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                            alt=""/>
                    </picture>
                    <div class="overlay-text"> 
                        <h3 class="h5 mb-0">México y EUA refuerzan alianza binacional</h3> 
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-4 col-columns">
                <a class="d-block text-decoration-none" href="<?= htmlspecialchars($link2 ?? '', ENT_QUOTES, 'UTF-8'); ?>">
                    <picture>                                            
                        <!--<source media="(max-width: 680px)" 
                            srcset="https://dummyimage.com/800x475/ccc/fff">
                        <source media="(max-width: 991px)" 
                            srcset="https://dummyimage.com/1366x812/ccc/fff">-->
                        <img class="img-responsive" 
                            src="<?= htmlspecialchars($imagen2 ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                            alt=""/>
                    </picture>
                    <div class="overlay-text"> 
                        <h3 class="h5 mb-0">México y EUA refuerzan alianza binacional</h3> 
                    </div>
                </a>
                <a class="d-block text-decoration-none" href="<?= htmlspecialchars($link3 ?? '', ENT_QUOTES, 'UTF-8'); ?>">
                    <picture>                                            
                        <!--<source media="(max-width: 680px)" 
                            srcset="https://dummyimage.com/800x475/ccc/fff">
                        <source media="(max-width: 991px)" 
                            srcset="https://dummyimage.com/1366x812/ccc/fff">-->
                        <img class="img-responsive" 
                            src="<?= htmlspecialchars($imagen3 ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                            alt=""/>
                    </picture>
                    <div class="overlay-text"> 
                        <h3 class="h5 mb-0">México y EUA refuerzan alianza binacional</h3> 
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>