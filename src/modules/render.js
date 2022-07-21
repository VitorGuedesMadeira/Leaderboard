import cleanList from './cleanList.js';
import DataClass from './dataStructure.js';
import Dynamic from './dynamic.js';

const render = () => {
  cleanList();
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    const newdataStructure = DataClass.dataStructure[i];
    Dynamic.addNewScore(newdataStructure.user, newdataStructure.score, i);
  }
};

export default render;