const initialCharacterState = { hp: 10, int: 3, str: 3, agi: 3}
const initialComputerState = { security: 3, hp: 3}


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateChanger = storeState(); //initialCharacterState
const stateChanger2 = storeState(); // initialComputerState

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// Non character related state changes
const hack = changeState('security');
const hacked = changeState('security')(-3)

// character related state changes

export const energyDrink = changeState('str')(1);

