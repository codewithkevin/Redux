const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

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

const byIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Fourth redux action",
  };
};

//Reducers
// (previousState, action) => newState
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//Store the state
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Intial state: ", store.getState());

//Register Listner
const unsubscribe = store.subscribe(() => {});

//Dispatch
const num = 10;
for (let i = 0; i < num; i++) {
  store.dispatch(buyCake());
  store.dispatch(byIceCream());
}
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());

// store.dispatch(byIceCream());
// store.dispatch(byIceCream());
// store.dispatch(byIceCream());
// store.dispatch(byIceCream());

// store.dispatch(addCake());
// store.dispatch(addCake());
// store.dispatch(addCake());

// store.dispatch({ type: "MUL_CAKE"});
// store.dispatch({ type: "MUL_CAKE"});
// store.dispatch({ type: "MUL_CAKE"});

unsubscribe;
