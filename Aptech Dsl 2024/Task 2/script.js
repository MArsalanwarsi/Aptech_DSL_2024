function toggleDisplay() {
  const elem1 = document.getElementById("light");
  const elem2 = document.getElementById("dark");

  elem1.style.display = elem1.style.display === "none" ? "block" : "none";
  elem2.style.display = elem2.style.display === "block" ? "none" : "block";
  document.body.style.backgroundColor =
    elem1.style.display === "block" ? "white" : "black";
  document.getElementById("circle2").style.backgroundColor =
    elem1.style.display === "block" ? "white" : "black";
  document.getElementById("text").style.color =
    elem1.style.display === "block" ? "black" : "white";
  document.getElementById("heading").style.color =
    elem1.style.display === "block" ? "black" : "white";
}

function modechange() {
  toggleDisplay("light", "dark", "white", "black");
}

// ********************** mode change-end *******************************

// ********************** Random number generator *******************************
function random() {
  let numberdata = document.getElementById("randomno");
  const min = 1;
  const max = 10;
  let Randomnumber = Math.floor(Math.random() * max) + min;
  console.log(Randomnumber);
  numberdata.innerHTML = Randomnumber;
}

// ********************** Random number generator-end *******************************