<?php 
$total = isset($length) && is_numeric($length) ? max(0, (int)$length) : 0;
$items = $items ?? [];
 ?>
  
  <div class="grid-news-vertical">
     <?php for ($i = 0; $i < $total; $i++): ?> 
        <?php $item = $items[$i] ?? []; $img = $item['img'] ?? 'https://dummyimage.com/320x210/ccc/fff'; $alt = $item['alt'] ?? 'Nota al momento ' . ($i + 1); $titulo = $item['titulo'] ?? 'Titulo'; $sumario = $item['sumario'] ?? 'Sumario'; ?> 
        <article class="item-news"> 
            <img src="<?= htmlspecialchars($img, ENT_QUOTES, 'UTF-8'); ?>"
             alt="<?= htmlspecialchars($alt, ENT_QUOTES, 'UTF-8'); ?>">
              <div> 
                <h4 class="fw-bold text-uppercase"><?= htmlspecialchars(html_entity_decode($titulo, ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></h4>
                <p><?= htmlspecialchars(html_entity_decode($sumario, ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></p>
             </div> 
            </article> <?php endfor; ?>
         </div>
                       