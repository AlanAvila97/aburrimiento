<?php
$images = isset($images) && is_array($images) ? array_values($images) : [];
$summarys = isset($summarys) && is_array($summarys) ? array_values($summarys) : [];
$hrfs = isset($hrfs) && is_array($hrfs) ? array_values($hrfs) : [];

$totalItems = max(count($images), count($summarys), count($hrfs));

if ($totalItems < 1) {
	return;
}
?>

<div class="content-items-news grid-notas-info mt-4">
	<?php for ($i = 0; $i < $totalItems; $i++): ?>
		<?php
		$image = $images[$i] ?? 'https://dummyimage.com/800x475/ccc/fff';
		$summary = $summarys[$i] ?? '';
		$href = $hrfs[$i] ?? '#';
		?>
		<a class="item-news grid-notas-info__item" href="<?= htmlspecialchars($href, ENT_QUOTES, 'UTF-8'); ?>">
			<div class="img-new grid-notas-info__media">
				<picture>
					<img
						class="img-responsive"
						src="<?= htmlspecialchars($image, ENT_QUOTES, 'UTF-8'); ?>"
						alt=""
					/>
				</picture>

				<?php if ($summary !== ''): ?>
					<div class="grid-notas-info__overlay">
						<p class="m-0 grid-notas-info__summary">
						<?= htmlspecialchars(html_entity_decode($summary, ENT_QUOTES, 'UTF-8'), ENT_QUOTES, 'UTF-8'); ?>
						</p>
					</div>
				<?php endif; ?>
			</div>
		</a>
	<?php endfor; ?>
</div>
