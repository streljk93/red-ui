(function() {

	document.querySelectorAll('.jmedia__border').forEach(function(item) {
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

		item.addEventListener('click', function() {
			var media = this.parentElement;
			var icon = this.firstElementChild;
			if(media.classList.contains('jmedia_open')) {
				media.classList.remove('jmedia_open');

				icon.classList.remove('fa-search-minus');
				icon.classList.add('fa-search-plus');
			} else {
				media.classList.add('jmedia_open');

				icon.classList.remove('fa-search-plus');
				icon.classList.add('fa-search-minus');
			}
		});

	});	

}());