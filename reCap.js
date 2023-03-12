const redux = require("redux");
const createStore = redux.createStore;

const BUY_BOOK = "BUY_BOOK";

//Action
const buyBook = () => {
  return {
    type: BUY_BOOK,
    info: "buyBook",
  };
};

//Reducer
const initBookState = { numOFBooks: 10 };

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfBooks: state.numOfBooks - 1,
      };
    default:
      return State;
  }
};

//Store the State
const store = createStore(bookReducer);
console.log("Intial State: ", store.getState());

const unsubscribe = store.unsubscribe(() =>
  console.log("Updated state ", store.getState())
);

//Dispatch
const num = 20;
for (let i = 0; i < num; i++) {
  store.dispatch(buyBook());
}

unsubscribe;
