<div class="row w-100 row-gap-3 mx-0">
    <div class="col-12">
        <a class="d-block text-decoration-none" href="<?= htmlspecialchars($hrfs[0] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
            <picture>                                            
                <source media="(max-width: 680px)" 
                    srcset="https://dummyimage.com/800x475/ccc/fff">
                <source media="(max-width: 991px)" 
                    srcset="https://dummyimage.com/1366x812/ccc/fff">
                <img class="img-responsive" 
                     src="<?= htmlspecialchars($images[0] ?? '', ENT_QUOTES, 'UTF-8'); ?>"  
                    alt=""/>
            </picture>
        </a>
    </div>
    <div class="col-12 col-md-6">
        <a class="d-block text-decoration-none" href="<?= htmlspecialchars($hrfs[1] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
            <picture>                                            
               <source media="(max-width: 680px)" 
                    srcset="https://dummyimage.com/800x475/ccc/fff">
                <source media="(max-width: 991px)" 
                    srcset="https://dummyimage.com/1366x812/ccc/fff">
                <img class="img-responsive" 
                    src="<?= htmlspecialchars($images[1] ?? '', ENT_QUOTES, 'UTF-8'); ?>"  
                    alt=""/>
            </picture>
        </a>
    </div>
     <div class="col-12 col-md-6">
        <a class="d-block text-decoration-none" href="<?= htmlspecialchars($hrfs[2] ?? '', ENT_QUOTES, 'UTF-8'); ?>">
            <picture>                                            
               <source media="(max-width: 680px)" 
                    srcset="https://dummyimage.com/800x475/ccc/fff">
                <source media="(max-width: 991px)" 
                    srcset="https://dummyimage.com/1366x812/ccc/fff"> 
                <img class="img-responsive" 
                    src="<?= htmlspecialchars($images[2] ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                    alt=""/>
            </picture>
        </a>
    </div>
</div>