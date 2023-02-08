const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";

// Action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Second redux action",
  };
};

const addCake = () => {
  return {
    type: ADD_CAKE,
    info: "Third redux action",
  };
};

//Reducers
// (previousState, action) => newState
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};

//Store the state
const store = createStore(reducer);
console.log("Intial state: ", store.getState());

//Register Listner
const unsubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

//Dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(addCake());
store.dispatch(addCake());
store.dispatch(addCake());

unsubscribe;
