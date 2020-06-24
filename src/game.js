export const initialCharacterState = { hp: 10, int: 3 }
export const initialComputerState = { security: 3, hp: 3 }


const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const char1State = storeState(initialCharacterState);
export const computerState = storeState(initialComputerState);

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// Computer related state changes
export const hacked = changeState('security')(-3)
export const hackAttack = changeState('security')(Math.floor(Math.random()*(5) -5))
export const initComp = changeState('hp')(0);


// character related state changes

export const initChar = changeState('str')(0);
export const energyDrink = changeState('hp')(1);
export const powerGlove = changeState('int')(1);
export const bionicUpgrade = changeState('int')(1);

