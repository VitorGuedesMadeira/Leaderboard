import { scoresBox } from './variables.js';

export default class Dynamic {
  static addNewScore(user, score, index) {
    if(score.length > 22){
      score = '+9999999999999999999999'
    }
    const div = document.createElement('div');
    div.setAttribute('class', 'user-score-div');
    const newUser = document.createElement('p');
    newUser.textContent = `${index + 1} ${user}`;
    const newScore = document.createElement('p');
    newScore.textContent = score;
    newUser.setAttribute('class', 'individual-user');
    newScore.setAttribute('class', 'individual-score');
    div.appendChild(newUser);
    div.appendChild(newScore);
    if(index===0){
      div.style.background = 'gold';
      div.style.color = 'black';
    }
    scoresBox.appendChild(div);
  }
}
