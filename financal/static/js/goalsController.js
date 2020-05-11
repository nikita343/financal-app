
$(function () {
    let budget = $(".budget").text();
    let plusOrMinusSign = $(".dashboard__plus");
    let plusOrMinusSign2 = $(".dashboard__minus");
    let budgetGoalValue = $("#goal_value_goal").text();
    let displayRangeSlider = $("#output-per")
    let rangeSlider = $("#slider-per");
    let budgetGoalLeft = $("#goal_budget_left");
    $("#budget_goal").text(budget);
function displayPersenteges(){
    let  budgetLeft = budgetGoalValue - budget;
    let calculatePersentages = budget / budgetGoalValue * 100;
    let newCalculatePersentages = calculatePersentages.toFixed(1);  
    rangeSlider.val(newCalculatePersentages);
    if (budget < budgetLeft){
      budgetGoalLeft.text(budgetLeft);
    }
    else{
      budgetGoalLeft.text(0.00);
    }
    
    displayRangeSlider.text(newCalculatePersentages + " %");
    if (budget <= 0){
      displayRangeSlider.text("0  %");
    }
    if ( 0 == newCalculatePersentages ){
      $("#goal_text").text("Let's Start !");
    }
    if ( 50 == newCalculatePersentages ){
      $("#goal_text").text("Half Of The Way !");
    }
    if ( 1 <= newCalculatePersentages  && 25 >= newCalculatePersentages ){
      $("#goal_text").text("Nice Start !");
    }
    if ( 25 <= newCalculatePersentages && 49 >= newCalculatePersentages ){
      $("#goal_text").text("You Are On The Right Way !");
    }

    if ( 51 <= newCalculatePersentages && 75 >= newCalculatePersentages ){
      $("#goal_text").text("Keep Going !");
    }
    if ( 75 <= newCalculatePersentages && 99 >= newCalculatePersentages ){
      $("#goal_text").text("Almost Done !");
    }
    if (100 <= newCalculatePersentages && 10000000000000 >= newCalculatePersentages){
      $("#goal_text").css({
        "line-height":"40px",
        "padding-top": "50px"
      }).multiline("Congratulations ! \n You Complete This Goal !")
      $(".goalsAppend").css({
        "opacity":"1",
        "display":"block"
      })


      $("#goalsDelete").fadeOut(400, function () {
       $(this).remove();

      });

    }
  }
  if (budget <= 0){
    plusOrMinusSign.text("");
  }
  
  else{
    plusOrMinusSign.text("+ ");
  }
  
  if(budget >= 0){
    plusOrMinusSign2.text("");
  }

  else{
    plusOrMinusSign2.text("- ");
  }

  displayPersenteges()


});