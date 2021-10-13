const p1 = {
  score: 0,
  button: document.querySelector('#playerOneBtn'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#playerTwoBtn'),
  display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector('#playto');
// 최대 점수를 기본적으로 설정 = 6
let winningScore = parseInt(winningScoreSelect.value);
// 게임이 끝났는지를 확인하는 변수
let isGameOver = false;

// winningScoreSelect의 값이 변경되면 점수 최대치를 제한하기 위해 작성
winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  // winningScore를 설정하면 게임을 초기화
  reset();
})

function updateScores(player, opponent) {
  if(!isGameOver) {
    // player 1의 점수를 1 올린다.
    player.score += 1;
    console.log(player.score);
    // 점수가 최대치에 도달하면 게임 종료!
    if(player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
})

function reset() {
  isGameOver = false;
  // [ p1, p2 ] 로 배열을 바로 생성!
  for(let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}

resetBtn.addEventListener('click', reset);
