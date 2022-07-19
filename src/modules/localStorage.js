import DataClass from './dataStructure.js';

const setLocalStorage = () => {
  localStorage.setItem('scores', JSON.stringify(DataClass.dataStructure));
};

export default setLocalStorage;