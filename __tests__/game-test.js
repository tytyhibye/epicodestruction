// import '../src/game.js'
import { char1State, computerState, energyDrink, powerGlove, bionicUpgrade, hacked, hackAttack } from "../src/game.js"

describe ("Game", () => {

  test('energy drink should increase mental fortitude stat by 1', () => {
    expect(char1State(energyDrink)).toEqual({ mf: 11, int: 3, })
  })

  test('power glove should increase intellect stat by 1', () => {
    expect(char1State(powerGlove)).toEqual({ mf: 11, int: 4, })
  })

  test('bionic upgrade should increase intellect stat by 1', () => {
    expect(char1State(bionicUpgrade)).toEqual({ mf: 11, int: 5, })
  })

  test('hacked ability should decrease computers security property by 3', () => {
    const test = computerState(hacked);
    expect(test.security).toEqual(7)
  })
  
  test('hackAttack ability should decrease computers security property by a random amount between 1 and 5', () => {
    const test = computerState(hackAttack);
    expect(test.security).toBeLessThan(7)
    expect(test.security).toBeGreaterThan(2)
  }) 
})