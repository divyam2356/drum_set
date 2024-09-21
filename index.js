var number_of_drums=document.querySelectorAll(".drum").length
                                          

 for (var i=0 ; i<number_of_drums; i++)
 {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() 
    {
        var buttoninner=this.innerHTML; //this is used to store the particular element that triggered the event 
        makesound(buttoninner)
        button_animation(buttoninner)
    })

    document.addEventListener("keydown",function(event1){
        makesound(event1.key);
        button_animation(event1.key)
    })


}
    function makesound(key)

        {
            

            switch (key)
            {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break

                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break

                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break

                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break

                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break
                
                case "k":
                    var kickbass = new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break

                case "l":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break

            }

 }

 function button_animation(currentkey)
  {
    var active_button=document.querySelector("."+currentkey)
    active_button.classList.add("pressed")
    setTimeout(function(){
        active_button.classList.remove("pressed")
    },100)
  }