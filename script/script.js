
//On créé la variable globale qui contient le player et ses attributs
var player = $('video')[0],
    label_play = $('p.play').attr('data-play'),
    label_pause = $('p.play').attr('data-pause'),
    bool_video = false;


// Jouer ou mettre en pause la vidéo, en cliquant sur le bouton. Mettre à jour le texte
$('.dot').click(function(){
    // Si la vidéo est en pause, mettre en lecture
    if (!bool_video) {
        player.play(); //Lancer la lecture        
        // changer le texte
        $('p.play').text(label_pause);
        bool_video = true;
    } 
    // Si la vidéo était déjà en lecture, mettre en pause
    else if (bool_video){
        player.pause();
         $('p.play').text(label_play);
        bool_video = false;
    }

});

// Si l'utilisateur met la souris sur le bouton menu, l'aggrandir et faire bouger les barres
$('.nav-icon1').hover(function(){
  // On ajoute ou enlève les classes qui animent les éléments du bouton menu
  $(this).toggleClass('hovering'); 
  $("#dotMenu").toggleClass('hovering');
});
// Si l'utilisateur clique sur le bouton menu pour l'ouvrir
$('.nav-icon1').click(function(){
    $(this).toggleClass('open'); //Mettre ou enlever la classe open qui gère la transformation de l'icone
//    Deux lignes pour gérer l'apparition du menu
    $("#mySidenav").toggleClass("apparitionMenu");
    $("#mySidenav").toggleClass("disparitionMenu");
});


//Si l'utilisateur clique sur l'un des liens du menu, le fermer et remettre à zéro l'icone
$('#mySidenav a').click(function(){
    $('.nav-icon1').toggleClass('open');
    $("#mySidenav").toggleClass("apparitionMenu");
    $("#mySidenav").toggleClass("disparitionMenu");

});

// init Flickity with jQuery
var $carousel = $('.main-carousel').flickity({
    "imagesLoaded": true,
    "percentPosition": false
  });
  
  var $carousel2 = $('.main-carousel2').flickity({
    "imagesLoaded": true,
    "percentPosition": false
  });
  var $carousel2R = $('.main-carousel2Responsive').flickity({
    "imagesLoaded": true,
    "percentPosition": false
  });

// Solution prise de tête pour gérer la lecture de chaque vidéo indépendemment, en changeant dynamiquement la variable player 
// Comme ça on met autant de vidéos que l'on souhaite sans avoir besoin de toucher le javascript

// Si flickity détecte qu'on change de cellule
  $carousel.on('change.flickity', function(event, index) {
    // $('div#count span:first-of-type').text(index+1);
    player.pause();
    $('p.play').text(label_play);
    bool_video = false;
    // On va modifier la variable globale player, en lui mettant comme vidéo celle correspondant à l'index actuel de la cellule
    // Quand on va sur la cellule 1 (la deuxième), "player" va se concentrer sur la vidéo dans la case 1 du tableau, et ainsi de suite
    player = $('video')[index],
    label_play = $('p.play').attr('data-play'),
    label_pause = $('p.play').attr('data-pause');
  });

  // Bouton pour passer à la slide suivante, ça boucle à la dernière pour revenir au début
  $('.button--next-wrapped').on( 'click', function() {
    $carousel.flickity( 'next', true );  
    
  });

  $('.button--previous').on( 'click', function() {
    $carousel2.flickity( 'previous', true );     
    $carousel2R.flickity( 'previous', true );  
  });
  $('.button--next').on( 'click', function() {
    $carousel2.flickity( 'next', true );      
    $carousel2R.flickity( 'next', true ); 
  });





