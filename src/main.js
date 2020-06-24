// import './game.js'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import $ from "jquery";
import { initChar, initComp, char1State, computerState, energyDrink, powerGlove, bionicUpgrade, hacked, hackAttack } from "../src/game.js"

$(document).ready(function () {


  $('start').click(function(){
    const playerState = char1State(initChar)
    const compState = computerState(initComp)
  });
});