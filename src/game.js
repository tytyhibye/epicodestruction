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
export const hacked = changeState('security')(-3);
export const hackAttack = changeState('security')(Math.floor(Math.random()*(5) -5));
export const initComp = changeState('security')(0);


// character related state changes

export const feedbackLoop = changeState('mf')(-1);
export const firewall = changeState('mf')(-2);
export const ddos = changeState('mf')(-5);
export const initChar = changeState('mf')(0);
export const energyDrink = changeState('mf')(1);
export const powerGlove = changeState('int')(1);
export const bionicUpgrade = changeState('int')(1);

export const computerResponse = () => {
  const responseOptions = [feedbackLoop, firewall, ddos];
  const response = Math.floor(Math.random()*(computerResponse.length) + 1);
  const playerState = char1State(responseOptions[response]);
  return playerState;
};