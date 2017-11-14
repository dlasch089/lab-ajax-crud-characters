class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  getOneRegister(characterId) {
    const id = characterId;
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      // .then(response => console.log(response.data))
      .then(response => showOneCharacter(response.data))
      .catch(error => console.log(error));
  }

  createOneRegister(newCharacter) {
    axios
      .post(`${this.BASE_URL}/characters/`, newCharacter)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  updateOneRegister(characterInfo) {
    axios
      .patch(`${this.BASE_URL}/characters/${characterInfo.id}`, characterInfo)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  deleteOneRegister(characterId) {
    const id = characterId;
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }
}

function showOneCharacter(res) {
  const characterInfo = res;
  document.getElementById(
    "name"
  ).innerHTML = `Character Name: ${characterInfo.name}`;
  document.getElementById(
    "occupation"
  ).innerHTML = `Occupation: ${characterInfo.occupation}`;
  document.getElementById("debt").innerHTML = `Debt: ${characterInfo.debt}`;
  document.getElementById(
    "weapon"
  ).innerHTML = `Weapon: ${characterInfo.weapon}`;
}
