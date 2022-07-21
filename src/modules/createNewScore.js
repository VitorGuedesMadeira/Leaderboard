const createNewScore = async (ID, user, score) => {
    const newScore = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      { 
        user,
        score
      })
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log("3", data)
    })
  return newScore
  }

export default createNewScore;