<?php
/**
 * Componente dinámico de etiquetas / badges de categorías
 *
 * Variables admitidas:
 * @var array|null  $tags        Array de nombres ['Cultura', 'Tendencias'] o array asociativo [['name' => 'Cultura', 'href' => '#']]
 * @var array|null  $hrfs        Array opcional de URLs para los tags cuando $tags son strings
 * @var string|null $class       Clases CSS adicionales para el contenedor
 * @var string|null $badgeClass  Clases CSS adicionales para cada badge individual
 */

$rawTags = isset($tags) && is_array($tags) && !empty($tags) ? $tags : ['Cultura', 'Tendencias'];
$hrfs = isset($hrfs) && is_array($hrfs) ? $hrfs : [];
$class = isset($class) ? (string)$class : '';
$badgeClass = isset($badgeClass) ? (string)$badgeClass : '';

$badgeItems = [];
foreach ($rawTags as $index => $item) {
    if (is_array($item)) {
        $name = $item['name'] ?? $item['text'] ?? $item['title'] ?? $item['label'] ?? '';
        $href = $item['href'] ?? $item['url'] ?? $item['link'] ?? '#';
    } else {
        $name = (string)$item;
        $href = $hrfs[$index] ?? '#';
    }

    if ($name !== '') {
        $badgeItems[] = [
            'name' => $name,
            'href' => $href !== '' ? $href : '#'
        ];
    }
}

if (empty($badgeItems)) {
    return;
}
$wrapperClass = trim('category-badges ' . $class);
$itemBadgeClass = trim('category-badge ' . $badgeClass);
?>
<div class="<?= htmlspecialchars($wrapperClass, ENT_QUOTES, 'UTF-8'); ?>">
    <?php foreach ($badgeItems as $item): ?>
        <a href="<?= htmlspecialchars($item['href'], ENT_QUOTES, 'UTF-8'); ?>" class="<?= htmlspecialchars($itemBadgeClass, ENT_QUOTES, 'UTF-8'); ?>"><?= htmlspecialchars(html_entity_decode($item['name'], ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?></a>
    <?php endforeach; ?>
</div>
