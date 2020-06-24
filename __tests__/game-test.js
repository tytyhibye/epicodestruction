// import '../src/game.js'
import { char1State, computerState, energyDrink, powerGlove, bionicUpgrade, hacked } from "../src/game.js"

describe ("Game", () => {

  test('energy drink should increase strength stat by 1', () => {
    expect(char1State(energyDrink)).toEqual({ hp: 10, int: 3, str: 4, agi: 3})
  })

  test('power glove should increase agility stat by 1', () => {
    expect(char1State(powerGlove)).toEqual({ hp: 10, int: 3, str: 4, agi: 4})
  })

  test('bionic upgrade should increase intelligence stat by 1', () => {
    expect(char1State(bionicUpgrade)).toEqual({ hp: 10, int: 4, str: 4, agi: 4})
  })

  test('hacked ability should decrease computers security property by 3', () => {
    expect(computerState(hacked)).toEqual({ security: 0, hp: 3})
  })
})