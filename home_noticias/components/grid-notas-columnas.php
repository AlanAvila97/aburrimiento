<div class="content-items-news mt-4">
    <a class="item-news" href="<?= htmlspecialchars($hrfs[0] ?? '#', ENT_QUOTES, 'UTF-8'); ?>">
        <div class="img-new">
            <picture>
                <img class="img-responsive" 
                    src="<?= htmlspecialchars($images[0] ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                    alt=""/>
            </picture>    
        </div>
        <div class="text mt-2">
            <p class="m-0 text-elipsis-vertical">
                <?= htmlspecialchars($summarys[0] ?? '', ENT_QUOTES, 'UTF-8'); ?>
            </p>
        </div>
    </a>
    <a class="item-news" href="<?= htmlspecialchars($hrfs[1] ?? '#', ENT_QUOTES, 'UTF-8'); ?>">
        <div class="img-new">
            <picture>
                <img class="img-responsive" 
                    src="<?= htmlspecialchars($images[1] ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                    alt=""/>
            </picture>    
        </div>
        <div class="text mt-2">
            <p class="m-0 text-elipsis-vertical">
                <?= htmlspecialchars($summarys[1] ?? '', ENT_QUOTES, 'UTF-8'); ?>
            </p>
        </div>
    </a>
    <a class="item-news" href="<?= htmlspecialchars($hrfs[2] ?? '#', ENT_QUOTES, 'UTF-8'); ?>">
        <div class="img-new">
            <picture>
                <img class="img-responsive" 
                    src="<?= htmlspecialchars($images[2] ?? '', ENT_QUOTES, 'UTF-8'); ?>" 
                    alt=""/>
            </picture>    
        </div>
        <div class="text mt-2">
            <p class="m-0 text-elipsis-vertical">
                <?= htmlspecialchars($summarys[2] ?? '', ENT_QUOTES, 'UTF-8'); ?>
            </p>
        </div>
    </a>
</div>