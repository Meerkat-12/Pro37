class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     title.hide();
     button . hide();
     input1.hide();
     input2.hide();
    //write code to change the background color here
     background("pink");
    //write code to show a heading for showing the result of Quiz
        
    //call getContestantInfo( ) here
     contestant.getContestantInfo();


    //write condition to check if contestantInfor is not undefined
      for (var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){

      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
