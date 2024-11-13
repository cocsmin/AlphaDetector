function handleResponse(answer) {
    if (answer === "Yes") {
      window.open("https://cocsmin.github.io/AlphaYes/", "_blank", "width=400,height=200");
    } else {
      window.open("https://cocsmin.github.io/AlphaNo/", "_blank", "width=400,height=200");
    }
  }
  
document.getElementById("butonda").addEventListener("click", function(){
    var sound = document.getElementById("auuu");
    sound.play();
});