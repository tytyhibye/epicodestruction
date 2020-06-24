export const initialCharacterState = { mf: 10, int: 3 };
export const initialComputerState = { security: 10, int: 3 };


const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const char1State = storeState(initialCharacterState);
export const computerState = storeState(initialComputerState);

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// Computer related state changes
export const hacked = changeState('security');
export const hackAttack = changeState('security')(Math.floor(Math.random()*(5) -5));
export const initComp = changeState('security')(0);


// character related state changes

export const initChar = changeState('mf')(0);
const feedbackLoop = changeState('mf')(-1);
const firewall = changeState('mf')(-2);
const ddos = changeState('mf')(-5);
const energyDrink = changeState('mf')(1);
const powerGlove = changeState('int')(1);
const bionicUpgrade = changeState('int')(1);

export const computerResponse = () => {
    const responseOptions = [feedbackLoop, firewall, ddos];
    const response = Math.floor(Math.random()*(responseOptions.length));
    console.log(response);
    const playerState = char1State(responseOptions[response]);
    return playerState;
  };

  export const powerUps = () => {
    const responseOptions = [energyDrink, powerGlove, bionicUpgrade];
    const response = Math.floor(Math.random()*(responseOptions.length));
    console.log(response);
    const playerState = char1State(responseOptions[response]);
    return playerState;
  };


  // export const compResponseArr = [feedbackLoop, firewall, ddos];
  
  // const randomSelector = (responseArr, target) => {
  //   const responseOptions = responseArr;
  //   const response = Math.floor(Math.random()*(responseOptions.length));
  //   console.log(response);
  //   const something = target
  //   const state = something(responseOptions[response]);
  //   return state;
  // };
  
  // export const computerSelector = randomSelector(compResponseArr, char1State)