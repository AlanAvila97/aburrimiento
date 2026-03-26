<?php 
$total = isset($length) && is_numeric($length) ? max(0, (int)$length) : 0;
$notes = $notes ?? [];
$hrfs = $hrfs ?? [];
?>

<div class="items-related-notes mt-4">
    <ol class="list-related-notes">
         <?php for ($i = 0; $i < $total; $i++): ?>
            <?php
            $note = $notes[$i] ?? '';
            ?>
            <li class="item h4 fw-bold">
                <a class="text-decoration-none" href="<?= htmlspecialchars($hrfs[$i] ?? '#', ENT_QUOTES, 'UTF-8'); ?>">
                    <p class="m-0 text-black text-elipsis-vertical">
                        <?= htmlspecialchars($note, ENT_QUOTES, 'UTF-8'); ?>
                    </p>
                </a>
            </li>
        <?php endfor; ?>
    </ol>
</div>