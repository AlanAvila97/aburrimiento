<div class="section-content-grid">
                            <div class="title-notes text-center w-100 mb-md-4">
                                <h2 class="h1 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                    <?= htmlspecialchars($title ?? '', ENT_QUOTES, 'UTF-8'); ?>
                                </h2>
                            </div>

                            <article class="lead-block mt-4 row-gap-3">
                                <figure class="thumb m-0">
                                    <img src="<?= htmlspecialchars($image ?? '', ENT_QUOTES, 'UTF-8'); ?>" alt="<?= htmlspecialchars($title ?? '', ENT_QUOTES, 'UTF-8'); ?>">
                                    <figcaption class="lead-caption pt-2"> <?= htmlspecialchars($principalContent ?? '', ENT_QUOTES, 'UTF-8'); ?>
                                    </figcaption>
                                    <div class="separator-red"></div>
                                </figure>

                                <div class="lead-copy">
                                    <div>
                                        <h4 class="fw-bold text-uppercase"><?= htmlspecialchars($subtitle1 ?? '', ENT_QUOTES, 'UTF-8'); ?></h4>
                                        <p><?= htmlspecialchars($summary1 ?? '', ENT_QUOTES, 'UTF-8'); ?></p>
                                    </div>
                                    <div class="separator-red"></div>
                                    <div>
                                        <h4 class="fw-bold text-uppercase"><?= htmlspecialchars($subtitle2 ?? '', ENT_QUOTES, 'UTF-8'); ?></h4>
                                        <p><?= htmlspecialchars($summary2 ?? '', ENT_QUOTES, 'UTF-8'); ?></p>
                                    </div>
                                </div>
                            </article>
                        </div>