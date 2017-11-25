var bemMediaComponent = function() {

	Array.prototype.forEach.call(document.querySelectorAll('.jmedia__image'), function(item) {
		var icon = item.firstElementChild;

		// hover icon
		if(icon !== null) {
			item.addEventListener('mouseover', function() {
				icon.style.display = 'inline-block';
			});
			item.addEventListener('mouseout', function() {
				icon.style.display = 'none';
			});
		}

		// open image on full window
		item.addEventListener('click', function() {
			var mediaItem = this.parentElement.parentElement;
			var backdrop = mediaItem.parentElement.lastElementChild;
			var icon = this.firstElementChild;

			// disable
			if(mediaItem.classList.contains('jmedia_open')) {
				mediaItem.classList.remove('jmedia_open');

				backdrop.style.display = 'none';

				icon.classList.remove('fa-search-minus');
				icon.classList.add('fa-search-plus');
			// enable
			} else {
				mediaItem.classList.add('jmedia_open');

				backdrop.style.display = 'block';

				icon.classList.remove('fa-search-plus');
				icon.classList.add('fa-search-minus');
			}
		});

	});

};
bemMediaComponent();