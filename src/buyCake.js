const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Second redux action",
  };
};

//State
const initialState = {
  numOfCakes: 10,
};

//Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

//Store the state
const store = createStore(reducer);
console.log("Intial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

//Dispatch
const num = 20;
for (let i = 0; i < num; i++) {
  store.dispatch(buyCake());
}

unsubscribe;
