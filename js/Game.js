class Game {
  constructor(){

  }


  play(){
    score++;
    textSize(32);
    text("Score:- "+score,100,100)
    if( score % 100 === 0){
      newGrnd();
    }
  }

  end(){
    console.log("Game Ended");
    console.log("You Score is " + score);
    score = 0;
  }
}
