import Dispatcher from "./Dispatcher";

const BookActions = {
  addBook(book) {
    Dispatcher.dispatch({
      type: "ADD_BOOK",
      payload: book
    });
  }
};

export default BookActions;