



function updateFunctions(){

    $.fn.multiline = function(text){
      this.text(text);
      this.html(this.html().replace(/\n/g,'<br/>'));
      return this;
  }

  function calculateIncome(){
    var incomeSum =0;
    $('.li-income-val').each(function() {
      incomeSum = incomeSum + parseInt($(this).text());
    });
    $("#budget-income").text(incomeSum);
  
  };
  
  function calculateExpence(){
    var expenceSum = 0;
    $('.li-expence-val').each(function() {
      expenceSum = expenceSum + parseInt($(this).text());
    });
    $("#budget-expence").text(expenceSum);
  };
  
  calculateIncome();
  calculateExpence();
  
  let plusOrMinusSign = $(".dashboard__plus");
  let plusOrMinusSign2 = $(".dashboard__minus");

  
  function calculateBudget(){
    var budget = 0;
    var income = 0;
    var expence = 0;
    $('.li-income-val').each(function() {
      income = income + parseInt($(this).text());
    });
    $('.li-expence-val').each(function() {
      expence = expence + parseInt($(this).text());
    });
    budget = income - expence;

    $(".budgetPost").val(budget);
    $(".budget").text(budget);
    $("#budget_goal").text(budget);
    


    if (budget <= 0){
      plusOrMinusSign.text("");
    }
    
    else{
      plusOrMinusSign.text("+ ");
    }
    
   
    if(budget >= 0){
      plusOrMinusSign2.text("- ");
    }

    else{
      plusOrMinusSign2.text("");
    }
   
  }
  if ($(".noneExpence").text() >= 1 ){
    $(".noneExpenceHeading").css({
      "opacity":"0",
      "display":"none"
    })

  }
  else{
    $(".noneExpenceHeading").css({
      "opacity":"1",
      "display":"block"
    })
  }



  if ($(".noneIncomes").text() >= 1 ){
    $(".noneIncomesHeading").css({
      "opacity":"0",
      "display":"none"
    })

  }
  else{
    $(".noneIncomesHeading").css({
      "opacity":"1",
      "display":"block"
    })
  }
  

  if ($(".noneGoals").text() >= 1 ){
    $(".noneGoalsHeading").css({
      "opacity":"0",
      "display":"none"
    })

  }
  else{
    $(".noneGoalsHeading").css({
      "opacity":"1",
      "display":"block"
    })
  }



  if ($(".noneCategory").text() >= 1 ){
    $(".noneCategoryHeading").css({
      "opacity":"0",
      "display":"none"
    })

  }
  else{
    $(".noneCategoryHeading").css({
      "opacity":"1",
      "display":"block"
    })
  }



  
  calculateBudget();


  function formatMoney(){
    $('.dashboard__currency').text((i, t) => parseFloat(t).toFixed(2));
    $('.dashboard__currency-temp').text((i, t) => parseFloat(t).toFixed(2));
  }
  formatMoney();

  }


setInterval(function() {
  updateFunctions();
}, 100);