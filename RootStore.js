import { observable, autorun, computed, reaction } from "mobx";
import LocalStore from "./LocalStore";

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.todoStore = new TodoStore(this);
    let transportLayer = new LocalStore();
    this.agendaStore = new AgendaStore(this, transportLayer);
  }
}

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  getTodos(user) {
    // access todoStore through the root store
    return this.rootStore.todoStore.todos.filter(todo => todo.author === user);
  }
}

class TodoStore {
  @observable todos = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

class AgendaStore {
  // authorStore;
  transportLayer;
  @observable agendas = [];
  @observable isLoading = true;

  constructor(rootStore, transportLayer) {
    // this.authorStore = authorStore; // Store that can resolve authors for us
    this.transportLayer = transportLayer; // Thing that can make server requests for us
    this.transportLayer.onReceiveAgendaUpdate(updatedAgenda =>
      this.updateAgendaFromServer(updatedAgenda)
    );
    this.loadAgendas();
  }

  /**
   * Fetches all agendas from the server
   */
  loadAgendas() {
    this.isLoading = true;
    this.transportLayer.fetchAgendas().then(fetchedAgendas => {
      fetchedAgendas.forEach(json => this.updateAgendaFromServer(json));
      this.isLoading = false;
    });
  }

  /**
   * Update a agenda with information from the server. Guarantees a agenda
   * only exists once. Might either construct a new agenda, update an existing one,
   * or remove a agenda if it has been deleted on the server.
   */
  updateAgendaFromServer(json) {
    var agenda = this.agendas.find(agenda => agenda.id === json.id);
    if (!agenda) {
      agenda = new Agenda(this, json.id);
      this.agendas.push(agenda);
    }
    if (json.isDeleted) {
      this.removeAgenda(agenda);
    } else {
      agenda.updateFromJson(json);
    }
  }

  /**
   * Creates a fresh agenda on the client and server
   */
  createAgenda() {
    var agenda = new Agenda(this);
    this.agendas.push(agenda);
    console.log("created: " + agenda.id);
    return agenda;
  }

  /**
   * A agenda was somehow deleted, clean it from the client memory
   */
  removeAgenda(agenda) {
    this.agendas.splice(this.agendas.indexOf(agenda), 1);
    agenda.dispose();
  }
}

class Agenda {
  /**
   * unique id of this agenda, immutable.
   */
  id = null;

  @observable title = "";
  @observable completed = false;
  @observable tasks = [];
  /**
   * reference to an Author object (from the authorStore)
   */
  @observable author = null;

  store = null;

  /**
   * Indicates whether changes in this object
   * should be submitted to the server
   */
  autoSave = true;

  /**
   * Disposer for the side effect that automatically
   * stores this Agenda, see @dispose.
   */
  saveHandler = null;

  constructor(store, id = uuidv4()) {
    this.store = store;
    this.id = id;

    this.saveHandler = reaction(
      // observe everything that is used in the JSON:
      () => this.asJson,
      // if autoSave is on, send json to server
      json => {
        if (this.autoSave) {
          console.log("saving:" + json);
          this.store.transportLayer.saveAgenda(json);
        }
      }
    );
  }

  /**
   * Remove this agenda from the client and server
   */
  delete() {
    this.store.transportLayer.deleteAgenda(this.id);
    this.store.removeAgenda(this);
  }

  @computed get asJson() {
    return {
      title: this.title,
      id: this.id,
      completed: this.completed,
      tasks: this.tasks,
      authorId: this.author ? this.author.id : null
    };
  }

  /**
   * Update this agenda with information from the server
   */
  updateFromJson(json) {
    // make sure our changes aren't sent back to the server
    this.autoSave = false;
    this.completed = json.completed;
    this.task = json.task;
    // this.author = this.store.authorStore.resolveAuthor(json.authorId);
    this.autoSave = true;
  }

  dispose() {
    // clean up the observer
    this.saveHandler();
  }
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
