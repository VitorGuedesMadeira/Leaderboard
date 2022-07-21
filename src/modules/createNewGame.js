const createNewGame = async () => {
  const newGame = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        name: 'VitorGaming',
      },
    ),
  }).then((data) => data.json()).then((data) => data.result.split(' ')[3]);
  return newGame;
};

const iD = createNewGame();
export default iD;