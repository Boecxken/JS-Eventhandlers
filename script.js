const alertButton = document.querySelector("#mybutton");

alertButton.addEventListener("click", function () {
    alert("button clicked");
});

const toggleRedBackground = function () {
    const body = document.body;
    body.classList.toggle("red-background");
  };
  const changeBackgroundColorButton = function () {
    const changeBackgroundButton = document.querySelector("#change-background");
    changeBackgroundButton.addEventListener("click", function () {
      toggleRedBackground();
    });
  };
 
  changeBackgroundColorButton();


