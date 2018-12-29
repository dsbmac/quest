import store from "react-native-simple-store";

const femaleArtist = {
  name: "Lady Gaga",
  age: 31,
  gender: "female"
};

export default class LocalStore {
  onReceiveAgendaUpdate() {
    store.get("agendas").then(res => {
      if (res === null) {
        let agendas = [];
        store.save("agendas", agendas);
        return agendas;
      } else {
        return res;
      }
    });
  }

  saveAgenda(agenda) {
    console.log("saving:" + agenda);
    store.push("agendas", agenda);
  }

  fetchAgendas() {
    // Get updated object
    return store.get("agendas");
  }

  addAgenda() {
    // Save an array to the users device. We will give it the key 'shoppingList' for easy retrieval
    store.push("agendas", "C2K");
  }
}
