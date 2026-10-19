<?php
/**
 * Componente dinámico de Migajas de Pan (Breadcrumbs)
 *
 * Variables admitidas:
 * @var array|null   $breadcrumbs   Lista de migas de pan. Puede ser:
 *                                  - Array de arrays: [['name' => 'Inicio', 'href' => './index.php', 'icon' => 'fa-solid fa-house'], ['name' => 'Cultura']]
 *                                  - Array asociativo: ['Inicio' => './index.php', 'Cultura' => '']
 *                                  - Array de textos: ['Inicio', 'Cultura'] (usando $hrfs opcional)
 * @var array|null   $items         Alias de $breadcrumbs
 * @var array|null   $migajas       Alias de $breadcrumbs
 * @var array|null   $hrfs          Array de URLs si se pasa un array simple de textos
 * @var bool|null    $showHomeIcon  Si es true (default), agrega ícono de casa al primer elemento si su nombre es "Inicio" o "Home"
 * @var string|null  $separatorIcon Clases de FontAwesome para el separador (default: 'fa-solid fa-chevron-right')
 * @var string|null  $class         Clases CSS adicionales para el elemento <nav>
 * @var string|null  $listClass     Clases CSS adicionales para la lista <ol>
 */

$rawItems = $breadcrumbs ?? $items ?? $migajas ?? null;
$hrfs = isset($hrfs) && is_array($hrfs) ? $hrfs : [];
$showHomeIcon = $showHomeIcon ?? true;
$separatorIcon = $separatorIcon ?? 'fa-solid fa-chevron-right';
$class = isset($class) ? (string)$class : '';
$listClass = isset($listClass) ? (string)$listClass : '';

if (empty($rawItems) || !is_array($rawItems)) {
    $rawItems = [
        ['name' => 'Inicio', 'href' => './index.php', 'icon' => 'fa-solid fa-house'],
        ['name' => 'Cultura', 'href' => '']
    ];
}

$parsedItems = [];
$isAssoc = array_keys($rawItems) !== range(0, count($rawItems) - 1);

if ($isAssoc) {
    $idx = 0;
    foreach ($rawItems as $name => $href) {
        $parsedItems[] = [
            'name' => (string)$name,
            'href' => (string)$href,
            'icon' => ($idx === 0 && $showHomeIcon && in_array(mb_strtolower((string)$name), ['inicio', 'home'])) ? 'fa-solid fa-house' : null
        ];
        $idx++;
    }
} else {
    foreach ($rawItems as $index => $item) {
        if (is_array($item)) {
            $name = $item['name'] ?? $item['title'] ?? $item['text'] ?? $item['label'] ?? '';
            $href = $item['href'] ?? $item['url'] ?? $item['link'] ?? '';
            $icon = $item['icon'] ?? null;
        } else {
            $name = (string)$item;
            $href = $hrfs[$index] ?? '';
            $icon = null;
        }

        if ($icon === null && $index === 0 && $showHomeIcon && in_array(mb_strtolower(trim((string)$name)), ['inicio', 'home'])) {
            $icon = 'fa-solid fa-house';
        }

        if ($name !== '') {
            $parsedItems[] = [
                'name' => $name,
                'href' => (string)$href,
                'icon' => $icon
            ];
        }
    }
}

$total = count($parsedItems);
if ($total === 0) {
    return;
}

$wrapperClass = trim('breadcrumb-nav ' . $class);
$olClass = trim('breadcrumb-custom ' . $listClass);
?>
<nav aria-label="breadcrumb" class="<?= htmlspecialchars($wrapperClass, ENT_QUOTES, 'UTF-8'); ?>">
    <ol class="<?= htmlspecialchars($olClass, ENT_QUOTES, 'UTF-8'); ?>">
        <?php foreach ($parsedItems as $i => $item): ?>
            <?php
            $isLast = ($i === $total - 1);
            $hasLink = !empty($item['href']) && !$isLast;
            $name = htmlspecialchars(html_entity_decode($item['name'], ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8');
            $iconClass = !empty($item['icon']) ? htmlspecialchars($item['icon'], ENT_QUOTES, 'UTF-8') : '';
            ?>
            <li class="breadcrumb-item<?= $isLast ? ' active' : ''; ?>"<?= $isLast ? ' aria-current="page"' : ''; ?>>
                <?php if ($hasLink): ?>
                    <a href="<?= htmlspecialchars($item['href'], ENT_QUOTES, 'UTF-8'); ?>">
                        <?php if ($iconClass !== ''): ?>
                            <i class="<?= $iconClass; ?> breadcrumb-icon"></i>
                        <?php endif; ?>
                        <span><?= $name; ?></span>
                    </a>
                <?php else: ?>
                    <?php if ($iconClass !== ''): ?>
                        <i class="<?= $iconClass; ?> breadcrumb-icon"></i>
                    <?php endif; ?>
                    <span><?= $name; ?></span>
                <?php endif; ?>
            </li>
            <?php if (!$isLast): ?>
                <li class="breadcrumb-separator" aria-hidden="true">
                    <i class="<?= htmlspecialchars($separatorIcon, ENT_QUOTES, 'UTF-8'); ?>"></i>
                </li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ol>
</nav>
