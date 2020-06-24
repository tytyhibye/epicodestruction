// import '../src/game.js'
import { stateChanger, energyDrink } from "../src/game.js"

describe ("Game", () => {

  test('energy drink should increase strength stat by 1', () => {
    expect(stateChanger(energyDrink)).toEqual({"str": 1}); //"hp": 10, "int": 3, 4, "agi": 3
  })
})