import { scoresBox } from './variables.js';

export default class Dynamic {
  static addNewScore(user, score, index) {
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
    scoresBox.appendChild(div);
  }
}
