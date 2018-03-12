$( document ).ready(function() {
var randomNumber = math.floor(Math.random()*101+19)
console.log(randomNumber);
$('#number').text(randomNumber);


var wins = 0;
var losses = 0;
var total = 0;
var newNumber = [];

$('#numberWins').text(wins); //displays to page
$('#numberLosses').text(losses);
}