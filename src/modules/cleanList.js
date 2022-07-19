import { scoresBox } from './variables.js';

const cleanList = () => {
  while (scoresBox.firstChild) {
    scoresBox.removeChild(scoresBox.lastChild);
  }
};

export default cleanList;