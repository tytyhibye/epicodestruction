// import './game.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { computerResponse, powerUps, initChar, initComp, char1State, computerState, hacked, hackAttack } from "../src/game.js";

const statUpdate = () => {
  const playerState = char1State(initChar);
  const compState = computerState(initComp);
  $('#player-mf').text("player's mental fortitude: "+ playerState.mf);
  $('#player-int').text("player's intellect: "+ playerState.int);
  $('#comp-sec').text("computer's security: "+ compState.security);
  $('#comp-int').text("computer's intellect: "+ compState.int);
};

const checkStatus = () => {
  const playerState = char1State(initChar);
  const compState = computerState(initComp);
  if (playerState.mf <= 0 && compState.security <=0){
    $('#winDisplay').text("DR4W!");
  }else if (playerState.mf <= 0) {
    $('#winDisplay').text("You LOSE!");
  }else if (compState.security <= 0) {
    $('#winDisplay').text("You WIN!");
  }else if (playerState.mf <=5){
    $('#powerUp').fadeIn(1000);
  }
};

$(document).ready(function () {


  $('#start').click(function(){
    char1State(initChar);
    computerState(initComp);
    // console.log("after start", playerState);
    statUpdate();
  });

  $('#hack').click(function(){
    const playerState = char1State(initChar);
    console.log("players intellect", playerState.int);
    computerState(hacked(-Math.abs(playerState.int)));
    computerResponse();
    // console.log("after hack", compState.security);
    // console.log("response", randomSelector);
    checkStatus();
    statUpdate();
    
  });

  $('#powerUp').click(function(){
    powerUps();
    checkStatus();
    statUpdate();
    $('#powerUp').fadeOut(1000);
  });
});