function hideVisibility(item){
    item.css({
      "visibility":"hidden",
    }).animate({"opacity": "0"},300);;
  }
  function visibility(item){
    item.css({
      "visibility":"visible",
    }).animate({"opacity": "1"},300);;
  }
  
  
    
    
  let addIncome = $(".addIncome");
  let addExpence = $(".addExpence");
  let addGoal = $(".addGoal");
  let addCategory = $(".addCategory");
  let addList = $(".addList")
  let addListItem = $(".addListItem")
  let closeButton = $("#closeButton");
  let titleFocus = $(".titlefocus");
  
  
  addGoal.click(function(event){
    visibility($("#dashboardpopup"));
    visibility($("#dashboardpopup-3"));
    titleFocus.focus();
  });
  
  
  addList.click(function(event){
    visibility($("#dashboardpopup"));
    visibility($("#addListForm"));
    titleFocus.focus();
  });

  addListItem.click(function(event){
    visibility($("#dashboardpopup"));
    visibility($("#addListItemForm"));
    titleFocus.focus();
  });

  addCategory.click(function(event){
    visibility($("#dashboardpopup"));
    visibility($("#dashboardpopup-5"));
    titleFocus.focus();
  });
  
  
  
  addExpence.click(function(event){
    visibility($("#dashboardpopup"));
    visibility($("#dashboardpopup-4"));
    titleFocus.focus();
  });
  
  addIncome.click(function(event){
    visibility($("#dashboardpopup"));
    visibility($("#dashboardpopup-2"));
    titleFocus.focus();
  });
  
  
  closeButton.click(function(event){
    hideVisibility($("#addListForm"));
    visibility($("#OkMessage"));
    hideVisibility($("#dashboardpopup"));
    hideVisibility($("#dashboardpopup-2"));
    hideVisibility($("#dashboardpopup-3"));
    hideVisibility($("#dashboardpopup-4"));
    hideVisibility($("#dashboardpopup-5"));
    hideVisibility($("#addListItemForm-5"));
  });