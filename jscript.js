function handleResponse(answer) {
    if (answer === "Yes") {
      window.open("https://cocsmin.github.io/AlphaYes/", "_blank", "width=1200,height=800");
    } else {
      window.open("https://cocsmin.github.io/AlphaNo/", "_blank", "width=1200,height=800");
    }
  }
  
document.getElementById("butonda").addEventListener("click", function(){
    var sound = document.getElementById("auuu");
    sound.play();
});

document.getElementById("butonnu").addEventListener("click", function(){
    var sound = document.getElementById("stinky");
    sound.play();
});