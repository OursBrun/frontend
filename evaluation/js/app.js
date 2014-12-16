jQuery(document).ready(function(){
	
	// Compte le nombre de lignes
	$('header .number').text($('article').length);

	// Compte le nombre de stations pour chaque lignes
	$('article .count').each(function(){
		$(this).text($(this).closest('article').find('ul li').length + " stations");
	});
	
	// Determine le premier et le dernier arret
	$('article h2').each(function(){
		$(this).text($(this).closest('article').find('ul li').first().text() + " - " + $(this).closest('article').find('ul li').last().text());
	});

	// Boutton voir plus
	$('article button').on('click', function(){
		$(this).closest('article').find('ul').slideToggle();
	});

	// Boutton voir plus
	$('form input').on('keyup', function(){
		var search = $(this).val();
		$('article').show();
		$('article li').removeClass('highlight');
		// Affiche la recherche en cours
		if(search == '') $('header .search-text').text('Tous');
		else {
			$('header .search-text').text(search);

			// Effectue la recherche
			$('article').each(function(){
				var display = false
				$(this).find('li').each(function(){
					if($(this).text().toLowerCase().indexOf(search.toLowerCase()) > -1) {
						$(this).addClass('highlight');
						display = true;
					}
				});
				if(display == false) $(this).hide();
			});
		}
		$('header .number').text($("article:visible").length);
	});
	

});