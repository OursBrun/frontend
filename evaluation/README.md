Envoyez les TPs à : `francois@kiliweb.fr` avec les noms de votre groupe

Heure limite : **12h20** 

Les TPs rendus au-delà ne seront pas acceptés

Conseil : réaliser les spécifications dans l'ordre (#1, #2, etc.)

### HTML5 
_5 points_
***
* Déclarer le DOCTYPE, le charset UTF-8, le title, 3 feuilles de styles (reset.css, global.css, responsive.css), 2 fichiers javascript (jquery-2.1.1.min.js et app.js)
* Utiliser les balises HTML5 (header, main, figure, article, section)
* Utiliser les nouveaux attributs de form (required, placeholder, autofocus)
* Utiliser `<div class="clear"></div>` pour les `float`
* Mettre en place la structure HTML correspondante aux maquettes

### CSS3
_5 points_
***
* Faire un dégradé du blanc vers le gris `#efefef` sur l'en-tête, avec une ombre externe
* Faire un arrondi et une ombre interne sur le champ de recherche
* Mettre en place un bouton arrondi `Lire la suite`, avec une ombre au survol
* Utiliser la propriété `box-sizing` lorsque c'est nécessaire
* Utiliser la notation `hsl` pour les couleurs
* Utiliser la police `Lucida Grande` pour tous les textes
* Coder le CSS correspondant aux maquettes

### Responsive web design
_5 points_
***
* Mettre en place une mise en page fluide, sur toute la largeur de l'écran disponible (width en % plutôt qu'en px)
* Exprimer toutes les tailles de police en `em` plutôt qu'en `px`
* Rendre les images des lignes de métro promotionnelles à l'espace disponible : la taille du logo doit varier en fonction de la taille de la fenêtre
* Faire une mise en page pour les mobiles correspondant aux maquettes : 
 * Réduire a taille de toutes le polices automatiquement
 * Centrer le logo et la barre de recherche
 * Centrer le logo de la ligne de métro et les autres informations
 * Alterner le fond des lignes de métro (gris / blanc) en utilisant les pseudo-classes CSS3
 * Agrandir le bouton `Voir la liste`
 * Masquer le texte du nom de la ligne (Ligne 1, Ligne 2, etc.)
* S'assurer que la présentation est propre à n'importe quel résolution

### jQuery
_5 points_
***
* Afficher la liste des stations uniquement au clic sur `Voir la liste` (animation déplié / replié)
* Afficher automatiquement le nombre de stations par ligne
* Afficher automatiquement les terminus de ligne
* Rendre le champs de recherche opérationnel : recherche par nom de **stations de métro**
* Afficher en surbrillance les noms de station correspondants à la recherche (cf maquette)
* Afficher la recherche et le nombre de lignes correspondantes au dessus de la liste des lignes

### Code snippets
***
* Liste des stations de métro : voir le fichier `stations.html`
* jQuery : utiliser `each` pour parcourir chaque élément du DOM

***
    // Example
    $('article h1').each(function(){
        console.log($(this).text());
    });