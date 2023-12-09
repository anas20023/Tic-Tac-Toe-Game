let n_1, n_2, p_1, p_2, turn, st_game, reset_game;
let draw = 0;

// Start Game Button
st_game = document.querySelector("#stg");
reset_game = document.querySelector("#rest_g");
new_game = document.querySelector("#newg");

// Start Game Button
st_game.addEventListener("click", () => {
  document.getElementById("alt_stg").style.display = "none";
  n_1 = prompt("Enter 1'st Player Name");
  n_2 = prompt("Enter 2nd Player Name");

  while (
    n_1 === "" ||
    n_2 === "" ||
    n_1 === null ||
    n_2 === null ||
    n_1 === " " ||
    n_2 === " "
  ) {
    alert("Enter a Valid Name !!");
    n_1 = prompt("Enter 1'st Player Name");
    n_2 = prompt("Enter 2nd Player Name");
  }
  //Player's Name's Word
  p_1 = n_1[0].toUpperCase();
  p_2 = n_2[0].toUpperCase();
  document.getElementById("rest_g").style.display = "block";
});

// New Game Button
new_game.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = false;
  });
  document.getElementById("alt").style.display = "none";
});

turn = true;

// Wining Patterns
let WinP = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

/// Button Object

let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    draw++;
    if (turn) {
      btn.textContent = p_1;
      turn = !turn;
    } else {
      btn.textContent = p_2;
      turn = !turn;
    }

    btn.disabled = true;
    MatchWinner();
  });
});

// Reset Button

buttons.forEach((btn) => {
  reset_game.addEventListener("click", () => {
    draw = 0;
    p_1 = n_1[0].toUpperCase();
    p_2 = n_2[0].toUpperCase();
    btn.textContent = "";
    btn.disabled = false;
  });
});

// Matching Pattern

let MatchWinner = () => {
  if (draw == 9) {
    document.getElementById("win_msg").innerHTML = `<h1>Match Draw</h1>`;
    document.getElementById("alt").style.display = "flex";
    draw = 0;
  } else {
    for (let i of WinP) {
      let t_1 = buttons[i[0]].innerHTML;
      let t_2 = buttons[i[1]].innerHTML;
      let t_3 = buttons[i[2]].innerHTML;
      if (t_1 != "" && t_2 != "" && t_3 != "") {
        if (t_1 == t_2 && t_2 == t_3) {
          if (t_1 == p_1) {
            document.getElementById("rest_g").style.display = "none";
            document.getElementById(
              "win_msg"
            ).innerHTML = `<h1>${n_1} <br> Won the Game</h1>`;
            draw = 0;
          } else {
            document.getElementById("rest_g").style.display = "none";
            document.getElementById(
              "win_msg"
            ).innerHTML = `<h1>${n_2} <br> Won the Game</h1>`;
            draw = 0;
          }
          document.getElementById("alt").style.display = "flex";
        }
      }
    }
  }
};

function Reset() {
  st_game.addEventListener("click", () => {
    document.getElementById("alt_stg").style.display = "none";
    n_1 = prompt("Enter 1'st Player Name");
    n_2 = prompt("Enter 2nd Player Name");

    while (n_1 === "" || n_2 === "" || n_1 === null || n_2 === null) {
      alert("Enter a Valid Name !!");
      n_1 = prompt("Enter 1'st Player Name");
      n_2 = prompt("Enter 2nd Player Name");
    }
    //Player's Name's Word
    p_1 = n_1[0].toUpperCase();
    p_2 = n_2[0].toUpperCase();
    document.getElementById("rest_g").style.display = "block";
  });
}
