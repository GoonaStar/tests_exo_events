//Fonctionalité 1 + 1-bis

var footer1 = document.querySelector('footer')
var count = 0

footer1.addEventListener("click", function (){

	console.log(`T'ES TROP FORT T'AS REUSSI A CLIQUER SuR Un FoOtEr: c'est ton click n° ${count++}`)
	
});


//Fonctionnalité 2 

var navbarHeader = document.getElementById('navbarHeader');
  
var navbarToggler = document.getElementsByClassName('navbar-toggler');
 
navbarToggler[0].addEventListener("click", function() {
navbarHeader.classList.toggle("collapse");
});

// Fonctionalité 3

  var edit = document.getElementsByClassName('btn-outline-secondary');

edit[0].addEventListener("click", function() {
  document.getElementsByClassName('card-text')[0].style.color = 'red';
});

//Fonctionnalité 4 


  var edit = document.getElementsByClassName('btn-outline-secondary');
  edit[1].addEventListener("click", function() {
  
  var cardtext = document.getElementsByClassName('card-text')[1]

  if (cardtext.style.color === 'green') {
    cardtext.style.color = '';
  }

  else {
    cardtext.style.color = 'green';
  }
});

//Fonctionnalité 5
  var link = document.querySelector('link')
 
  var header = document.querySelector('header');
  
header.addEventListener("dblclick", function() {
  link.disabled = true;
});