let n_1, n_2, p_1, p_2, turn, st_game, reset_game;

// Start Game Button
st_game = document.querySelector("#stg");
reset_game = document.querySelector("#rest_g");
st_game.addEventListener("click", () => {
  document.getElementById("alt_stg").style.display = "none";
  n_1 = prompt("Enter 1'st Player Name");
  n_2 = prompt("Enter 2nd Player Name");

  while (n_1 === "" || n_2 === "") {
    alert("Enter a Valid Name !!");
    n_1 = prompt("Enter 1'st Player Name");
    n_2 = prompt("Enter 2nd Player Name");
  }
  //Player's Name's Word
  p_1 = n_1[0].toUpperCase();
  p_2 = n_2[0].toUpperCase();
  document.getElementById("rest_g").style.display = "block";
});

turn = true;

// Wining Patterns
let WinP = [[0, 1, 2]];

/// Button Object

let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn) {
      btn.textContent = p_1;
      btn.style.color = "#004b23";
      turn = !turn;
    } else {
      btn.textContent = p_2;
      turn = !turn;
    }
    btn.disabled = true;
  });
});
