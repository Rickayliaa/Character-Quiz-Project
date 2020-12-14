var counter = 0;


$(".submit").click(function() {
    counter = counter + 1;
    $(".counter").text("This quiz has been taken " + counter + " times");
    var daily = $(".daily").val();
    var place = $(".place").val();
    var money = $(".money").val();
    var mathInput = Number($(".mathInput").val());
   

    
        // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE

if (mathInput >= 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "working" && money.toLowerCase() === "spending") {
      $(".results").text("You are Spongebob!");
    $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png">');
  }
    
    else if (mathInput <= 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "working" && money.toLowerCase() === "spending") {
      $(".results").text("You are Spongebob!");
    $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png">');
  }    
    
    
 else if (mathInput >= 17 && daily.toLowerCase() === "antisocial" && place.toLowerCase() === "sleeping" && money.toLowerCase() === "saving") {
      $(".results").text ("You are Squidward!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png">');
  }
    
     else if (mathInput >= 17 && daily.toLowerCase() === "antisocial" && place.toLowerCase() === "sleeping" && money.toLowerCase() === "spending") {
      $(".results").text ("You are Squidward!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png">');
  }
    
    
 else if (mathInput >= 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "working" && money.toLowerCase() === "saving") {
  	  $(".results").text ("You are Mr.Krabs!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png">');
  } 
    
     else if (mathInput < 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "working" && money.toLowerCase() === "saving") {
  	  $(".results").text ("You are Mr.Krabs!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png">');
  } 
    
  else if (mathInput >= 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "sleeping" && money.toLowerCase() === "saving") {
  	  $(".results").text ("You are Mr.Krabs!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png">');
  } 
    
     else if (mathInput <= 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "sleeping" && money.toLowerCase() === "saving") {
  	  $(".results").text ("You are Patrick!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg">');
  } 
    
    else if (mathInput > 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "sleeping" && money.toLowerCase() === "saving") {
  	  $(".results").text ("You are Patrick!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg">');
  } 
    
    
 else if (mathInput >= 18 && daily.toLowerCase() === "social" && place.toLowerCase() === "sleeping" && money.toLowerCase() === "spending") {
      $(".results").text("You are Patrick!");
     $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg">');
  }
    
    
 else if (mathInput <= 18 && daily.toLowerCase() === "antisocial" && place.toLowerCase() === "working" && money.toLowerCase() === "spending") {
      $(".results").text("You are Plankton!");
     $(".results").append('<img src="https://www.pinclipart.com/picdir/middle/546-5462813_transparent-background-plankton-transparent-clipart.png">');
  }
    
    else if (mathInput >= 20 && daily.toLowerCase() === "antisocial" && place.toLowerCase() === "working" && money.toLowerCase() === "saving") {
      $(".results").text("You are Mrs.Puff!"); 
        $(".results").append('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png">');
  }
    
    else if (mathInput === "" && daily === "" && place === "" && money === "") {
      $(".results").text ("Enter Information.");
  }
});