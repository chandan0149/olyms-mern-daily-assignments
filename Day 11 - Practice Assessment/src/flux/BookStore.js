import Dispatcher from "./Dispatcher";

class BookStore {
  constructor() {
    this.books = [];
    this.listeners = [];

    Dispatcher.register(this.handleActions.bind(this));
  }

  handleActions(action) {

  console.log("Action received:", action);

  if (action.type === "ADD_BOOK") {
    this.books.push(action.payload);

    console.log("Store books:", this.books);

    this.emitChange();
  }
}

  getBooks() {
    return this.books;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  emitChange() {
    this.listeners.forEach(listener => listener());
  }
}

const bookStore = new BookStore();
export default bookStore;