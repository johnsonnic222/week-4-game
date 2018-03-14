$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);
    
    var pink= Math.floor(Math.random()*11+1)
    var blue= Math.floor(Math.random()*11+1)
    var green= Math.floor(Math.random()*11+1)
    var purple= Math.floor(Math.random()*11+1)
    
    var userScore= 0; 
    var wins= 0;
    var losses = 0;
   
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
 
  function Reset(){
        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);

        Pink= Math.floor(Math.random()*11+1);
        Blue= Math.floor(Math.random()*11+1);
        Green= Math.floor(Math.random()*11+1);
        Purple= Math.floor(Math.random()*11+1);
        userScore= 0;
        $('#finalScore').text(userScore);
        } 
  
  function Winning(){
    wins++; 
    $('#numberWins').text(wins);
    Reset();
  }
  function Losing(){
    losses++;
    $('#numberLosses').text(losses);
    Reset()
  }
  
  $('#pink').click(function(){
    userScore = userScore + pink;
    $('#finalScore').text(userScore); 
      
          if (userScore === Random){
          Winning();
        }
        else if (userScore > Random){
          Losing();
        }
  });  

    $('#blue').click(function(){
        userScore = userScore + blue;
        $('#finalScore').text(userScore); 
          
              if (userScore === Random){
              Winning();
            }
            else if (userScore > Random){
              Losing();
            }
      });  

    $('#green').click(function(){
        userScore = userScore + green;
        $('#finalScore').text(userScore); 
          
              if (userScore === Random){
              Winning();
            }
            else if (userScore > Random){
              Losing();
            }
      }); 

    $('#purple').click(function(){
      userScore = userScore + purple;
      $('#finalScore').text(userScore); 
        
            if (userScore === Random){
            Winning();
          }
          else if (userScore > Random){
            Losing();
          }
    });   
  }); 