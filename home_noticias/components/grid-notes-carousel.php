<?php
$images = isset($images) && is_array($images) ? array_values($images) : [];
$hrfs = isset($hrfs) && is_array($hrfs) ? array_values($hrfs) : [];
$totalItems = max(count($images), count($hrfs));

if ($totalItems < 1) {
	return;
}
?>

<div class="grid-notes-carousel" data-grid-notes-carousel>
	<button
		type="button"
		class="grid-notes-carousel__nav grid-notes-carousel__nav--prev"
		data-carousel-prev
		aria-label="Anterior"
	>&lsaquo;</button>

	<div class="grid-notes-carousel__viewport" data-carousel-viewport>
		<div class="grid-notes-carousel__track">
			<?php for ($i = 0; $i < $totalItems; $i++): ?>
				<?php
				$image = $images[$i] ?? 'https://dummyimage.com/800x475/ccc/fff';
				$href = $hrfs[$i] ?? '#';
				$alt = 'Programa ' . ($i + 1);
				?>
				<a class="grid-notes-carousel__item" href="<?= htmlspecialchars($href, ENT_QUOTES, 'UTF-8'); ?>">
					<div class="grid-notes-carousel__image">
						<img
							class="img-responsive"
							src="<?= htmlspecialchars($image, ENT_QUOTES, 'UTF-8'); ?>"
							alt="<?= htmlspecialchars($alt, ENT_QUOTES, 'UTF-8'); ?>"
						>
					</div>
				</a>
			<?php endfor; ?>
		</div>
	</div>

	<button
		type="button"
		class="grid-notes-carousel__nav grid-notes-carousel__nav--next"
		data-carousel-next
		aria-label="Siguiente"
	>&rsaquo;</button>
</div>

<script>
	(function () {
		if (window.__gridNotesCarouselInit) {
			window.__gridNotesCarouselInit();
			return;
		}

		window.__gridNotesCarouselInit = function () {
			document.querySelectorAll('[data-grid-notes-carousel]').forEach(function (root) {
				if (root.dataset.carouselReady === 'true') {
					return;
				}

				root.dataset.carouselReady = 'true';

				var viewport = root.querySelector('[data-carousel-viewport]');
				var track = root.querySelector('.grid-notes-carousel__track');
				var prevButton = root.querySelector('[data-carousel-prev]');
				var nextButton = root.querySelector('[data-carousel-next]');

				if (!viewport || !track || !prevButton || !nextButton) {
					return;
				}

				var getStep = function () {
					var item = track.querySelector('.grid-notes-carousel__item');

					if (!item) {
						return viewport.clientWidth;
					}

					var gap = parseFloat(window.getComputedStyle(track).gap || '0') || 0;

					return item.getBoundingClientRect().width + gap;
				};

				prevButton.addEventListener('click', function () {
					track.scrollBy({ left: -getStep(), behavior: 'smooth' });
				});

				nextButton.addEventListener('click', function () {
					track.scrollBy({ left: getStep(), behavior: 'smooth' });
				});
			});
		};

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', window.__gridNotesCarouselInit, { once: true });
		} else {
			window.__gridNotesCarouselInit();
		}
	})();
</script>
