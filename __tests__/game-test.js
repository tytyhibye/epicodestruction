// import '../src/game.js'
import { stateChanger, energyDrink, powerGlove, bionicUpgrade } from "../src/game.js"

describe ("Game", () => {

  test('energy drink should increase strength stat by 1', () => {
    expect(stateChanger(energyDrink)).toEqual({ hp: 10, int: 3, str: 4, agi: 3})
  })

  
})