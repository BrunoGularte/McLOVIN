document.addEventListener("keydown", sePresionaUnaTecla);

function sePresionaUnaTecla(event) {
  var teclaPresionada = event.key;
  var box = document.querySelector(".box");
  var wasd = document.querySelector(".keyWasd");
  var McLOVIN = document.getElementById("img");

  if (teclaPresionada == "d") {
    box.style.removeProperty("left");
    McLOVIN.src = "img/McLovin.right.jpg";
    wasd.style.top = "auto";
    box.style.right = "0px";
    box.style.animation = "shake 0.1s";
  } else if (teclaPresionada == "a") {
    box.style.removeProperty("right");
    McLOVIN.src = "img/McLovin.left.jpg";
    wasd.style.top = "auto";
    box.style.left = "0px";
  } else if (teclaPresionada == "w") {
    wasd.style.top = "auto";
    box.style.position = "absolute";
    box.style.top = "0px";
  } else if (teclaPresionada == "s") {
    box.style.position = "absolute";
    box.style.removeProperty("top");
    wasd.style.top = "auto";
    box.style.bottom = "0px";
  }
}
