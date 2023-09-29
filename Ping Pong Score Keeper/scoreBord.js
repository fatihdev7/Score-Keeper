const p1 = {
  score: 0,
  button: document.querySelector("#primary"),
  counter: document.querySelector("#score1"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#success"),
  counter: document.querySelector("#score2"),
};

const restBtn = document.querySelector("#danger");
const finishScore = document.querySelector("#num");

let winningScore = 3;
let isGameOver = false;

function updateScores(actor, opponent) {
  if (!isGameOver) {
    actor.score += 1;
    if (actor.score === winningScore) {
      isGameOver = true;
      actor.counter.classList.add("winner");
      opponent.counter.classList.add("loser");
      actor.button.disabled = true;
      opponent.button.disabled = true;
    }
    actor.counter.innerHTML = actor.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

finishScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

restBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.score = 0;
    p.counter.innerHTML = p.score;
    p.counter.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
}
