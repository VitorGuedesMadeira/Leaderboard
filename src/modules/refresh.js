const refresh = async (ID) => {
    const refreshBtn = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`, {
      method: "GET",
      headers: {
        Accept: 'application/json',
      },
    }).then((data) => {
      return data.json()
    })
    return refreshBtn
  }

  export default refresh;