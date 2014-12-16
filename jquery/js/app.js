function priceCalculation(){
	var type = +$('input[name=type]:checked').data('price');
	var pate = +$('input[name=pate]:checked').data('price');
	var slices = +$('.nb-parts input').val();
	var extra = total = 0;
	$('input[name=extra]:checked').each(function() {
		extra += $(this).data('price');
	});

	var nb_pizza = slices/6;
	// Arrondi du totla à l'euro supérieur
	var total = (nb_pizza* (type + pate + extra)).toFixed(2);
	$('.stick-right p').text(total+'€');
}

// DRY : D'ont Repeat Yourself
function showDescription(){
	$(this).find('.description').toggle();
}


jQuery(document).ready(function(){

	// Calcul le prix au chargement de la page
	priceCalculation();

	// Affiche la description d'une pizza
	$('.pizza-type label').hover(showDescription, showDescription);

	// Affiche le bon nombre de parts
	$('.nb-parts input').on('keyup', function(){
		// Suppression de toutes les pizzas, pour repartir de zero
		$('.pizza-pict').remove();
		// On enregirstre dans une variable l'élément HTML qu'on va dupliquer
		var pizza = $('<span class="pizza-pict"></span>');

		slices = +$(this).val();
		// Clone permet de dupliquer l'élément HTML, sinon ce serait toujours le même
		for(i = 0; i < slices/6; i++) $(this).after(pizza.clone().addClass('pizza-6'));
		// La dernière pizza n'est peut-etre pas complête : on affiche juste le bon nombre de parts
		if(slices%6 != 0) $('.pizza-pict').last().removeClass('pizza-6').addClass('pizza-'+slices%6);
		// Recalcul du prix total
		priceCalculation();
	});

	// Affiche les infos client au clic sur le premier bouton
	$('button.next-step').click(function(){
		$('.infos-client').slideDown();
		// Supprime le bouton du DOM, pour qu'on ne puisse plus cliquer dessus
		$(this).remove();
	});

	// Ajoute un champ adresse complémentaire
	$('button.add').click(function(){
		var input = $('<br/><input type="text"/>');
		$(this).before(input);
	});

	// Efface toute la page, et affiche un message de remerciement 
	$('button.done').click(function(){
		$('.stick-right').remove();
		$('.main').html("<h3>Merci "+$('.infos-client').find('input').first().val()+" !<br/>C'est livré dans 15 minutes.</h3>");
	});

	// Actualise le prix du panier
	$("input").on('click', function(){
		priceCalculation();
	});
});