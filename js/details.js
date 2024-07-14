class Detilas {
  constructor() {}
  async detailsData(id) {
    try {
      let api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "2b6d9ae4femsh7d33cc6942bdb64p1c302bjsnc48c0aaf5c90",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      if (!api.ok) throw new Error("fail to fatch data");
      return await api.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export let fetchDetilas = new Detilas();
