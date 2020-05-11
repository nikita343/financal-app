
      $(document).on('click', '.dashboard__goals-delete-list', function (e) {
        e.preventDefault();
        row = $(this).closest('div')
        btn = e.target.id;      //get clicked button
        del_id = $(this).attr(btn);
        var formData = {
            'id': btn,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        };

        $.ajax({
            type: 'POST',       
            url: "delete_list/" + formData.id + "/",
            encode: true,
            contentType: 'application/x-www-form-urlencoded',
            crossDomain: false,
            dataType: 'json',
            data: formData,     
            success: function (data) {
              row.fadeOut(300, function () {
                $(this).remove();
            });
           
            },
            error: function (exception) {
                alert('Exeption:' + exception);
            }
          
        });
      });

      $(document).on('click', '.dashboard__item__delete-inc', function (e) {
        e.preventDefault();
        row = $(this).closest('li');
        btn = e.target.id;    
        del_id = $(this).attr(btn);
        var formData = {
            'id': btn,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        };
        $.ajax({
            type: 'POST',       // define the type of HTTP verb we want to use (POST for our form)
            url: "delete_item/" + formData.id + "/",
            encode: true,
            contentType: 'application/x-www-form-urlencoded',
            crossDomain: false,
            dataType: 'json',
            data: formData,     // our data object
            success: function (data) {
       
            
                row.fadeOut(300, function () {
                  $(this).remove();
              });
              
            },

            error: function (exception) {
                alert('Exeption:' + exception);
            }
        });
    });



   $(document).on('click', '.dashboard__spendings-delete', function (e) {
      e.preventDefault();
      row = $(this).closest('div');
      btn = e.target.id;      //get clicked button
      del_id = $(this).attr(btn);
      var formData = {
          'id': btn,
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
      };
      $.ajax({
          type: 'POST',       // define the type of HTTP verb we want to use (POST for our form)
          url: "delete_c/" + formData.id + "/",
          encode: true,
          contentType: 'application/x-www-form-urlencoded',
          crossDomain: false,
          dataType: 'json',
          data: formData,     // our data object
          success: function (data) {
     
          
              row.fadeOut(300, function () {
                $(this).remove();
            });
 
          },
          error: function (exception) {
              alert('Exeption:' + exception);
          }
      });
  });



  
    
    $('#create_incomefrm').submit(function (e) {
      // console.log("Creating the book");
      e.preventDefault();
      // get the form data
      var formData = {
    
          'title': $('#id_title').val(),
          'value': $('#id_value').val(),
          'category': $('#id_category').val(),
          'currency':$('#user-currency').text(),
          'categorytemp': $('#id_category option:selected').text(),
          form_type: $('#income-hidden').val(),
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
          contentType: 'application/x-www-form-urlencoded',
          encode: true,
      };
      $.ajax({
          type: 'POST',
          url: 'create/',
          data: formData,
          dataType: 'json',
      }).done(function (data) {
          $(function () {
    
              $("#dashboardpopup").css({
                "visibility":"hidden",
              }).animate({"opacity": "0"},200);;
              $("#dashboardpopup-1").css({
                "visibility":"hidden",
              }).animate({"opacity": "0"},200);;
              $("#dashboardpopup-2").css({
                "visibility":"hidden",
              }).animate({"opacity": "0"},200);;
    
              $("#add-income").append(
                
                '<li class="dashboard__income__li" id="li-icnome">'+
                '<div class="noneIncomes null-opacity">1</div>'+
                '<div class="dashboard__income__box">'+
                '<p class="dashboard__income__text">'+ data.data['title'] + ' ( ' + formData['categorytemp'] + ' )'+
                '</p>'+
                '<div class="dashboard__income__num-box">'+
                '<p class="dashboard__income__num" >+ <span class="currency">'+ formData['currency'] + '</span><span class="dashboard__currency li-income-val" >' +data.data['value']+'</span></p>'+
                '<p class="dashboard__income__delete-inc" id="'+data.data['id']+'">'+'&times;'+
                '</p>'+
                '</div>'+
            '</div>'+
            '</li>'

    
              )
              budget = $(".budget").text(); 
              let budgetGoalValue = $("#goal_value_goal").text();
              let displayRangeSlider = $("#output-per")
              let rangeSlider= $("#slider-per");
              let budgetGoalLeft = $("#goal_budget_left");
              $("#budget_goal").text(budget);

              let calculatePersentages = budget / budgetGoalValue * 100;
              let newCalculatePersentages = calculatePersentages.toFixed(1);  
              rangeSlider.val(newCalculatePersentages);

              let budgetLeft = budgetGoalValue - budget;

              displayRangeSlider.text(newCalculatePersentages + " %");
              if (budget <= 0){
                displayRangeSlider.text("0  %");
              }
              if (budget >= 0){
                budgetGoalLeft.text(budgetLeft);
              }
              else{
                budgetGoalLeft.text($("#goal_budget_left"));
              }
              $.ajax({
                type: 'POST',
                url: 'update_budget/',
                headers: {"X-CSRFToken":'{{ csrf_token }}'},
                data: {
          
                  budgetchange: parseInt(budget) + data.data['value'],
                  csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
          
               },
            })
          });
        });
      });
    
    

        $('#create_categoryfrm').submit(function (e) {
            // console.log("Creating the book");
            e.preventDefault();
            // get the form data
            var formData = {
                'title_c': $('#id_title_c').val(),
                form_type: $('#category-hidden').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                contentType: 'application/x-www-form-urlencoded',
                encode: true,
            };
            $.ajax({
                type: 'POST',
                url: 'create_cat/',
                data: formData,
                dataType: 'json',
            }).done(function (data) {
                $(function () {
          
                  hideVisibility($("#dashboardpopup"));
                  hideVisibility($("#dashboardpopup-5"));

                    $(".dashboard__select").append(
                      '<option value="'+ data.data['id'] +'">' + data.data['title_c'] + '</option>'
                    )

                    $("#addCategory").append(
                   
                      '<div class="dashboard__spendings-text-box">'+
                      '<div class="dashboard__income__text dashboard__income__text-2 dashboard__spendings-text">'+ data.data['title_c'] +'</div>'+
                      '<div class="noneCategory null-opacity">1</div>'+
                   '<p class="dashboard__income__delete-exp dashboard__spendings-delete"id="'+ data.data['id'] +'">&times;</p>'+
                  '</div>'

                    )
            
                });
              });
            });
    
    
    
      
            $(document).on('click', '.dashboard__income__delete-inc', function (e) {
              e.preventDefault();
              row = $(this).closest('li');
              val = $(this).closest('div').find("span.li-income-val").text()
              btn = e.target.id;      //get clicked button
              del_id = $(this).attr(btn);
              var formData = {
                  'id': btn,
                  csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
              };
              $.ajax({
                  type: 'POST',       // define the type of HTTP verb we want to use (POST for our form)
                  url: "delete/" + formData.id + "/",
                  encode: true,
                  contentType: 'application/x-www-form-urlencoded',
                  crossDomain: false,
                  dataType: 'json',
                  data: formData,     // our data object
                  success: function (data) {
             
                  
                      row.fadeOut(300, function () {
                        $(this).remove();
                    });

               
                    $.ajax({
                      type: 'POST',
                      url: 'update_budget/',
                      headers: {"X-CSRFToken":'{{ csrf_token }}'},
                      data: {
                
                        budgetchange: parseInt(budget) - parseInt(val),
                        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                
                     },
                  })

                  budget = $(".budget").text(); 
                  let budgetGoalValue = $("#goal_value_goal").text();
                  let displayRangeSlider = $("#output-per")
                  let rangeSlider= $("#slider-per");
                  let budgetGoalLeft = $("#goal_budget_left");
                  $("#budget_goal").text(budget);
    
                  let calculatePersentages = budget / budgetGoalValue * 100;
                  let newCalculatePersentages = calculatePersentages.toFixed(1);  
                  rangeSlider.val(newCalculatePersentages);
    
                  let budgetLeft = budgetGoalValue - budget;
    
                  displayRangeSlider.text(newCalculatePersentages + " %");
                  if (budget <= 0){
                    displayRangeSlider.text("0  %");
                  }
                  if (budget >= 0){
                    budgetGoalLeft.text(budgetLeft);
                  }
                  else{
                    budgetGoalLeft.text($("#goal_budget_left"));
                  }

                  },
                  error: function (exception) {
                      alert('Exeption:' + exception);
                  }
              });
          });
    
    
           
          $(document).on('click', '.dashboard__goals-delete', function (e) {
            e.preventDefault();
            row = $(this).closest('div');
            btn = e.target.id;      //get clicked button
            del_id = $(this).attr(btn);
            var formData = {
                'id': btn,
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            };
            $.ajax({
                type: 'POST',       
                url: "delete_goal/" + formData.id + "/",
                encode: true,
                contentType: 'application/x-www-form-urlencoded',
                crossDomain: false,
                dataType: 'json',
                data: formData,     // our data object
                success: function (data) {
           
                
                    row.fadeOut(300, function () {
                      $(this).remove();
                  });
    
                },
                error: function (exception) {
                    alert('Exeption:' + exception);
                }
            });
        });
  
  
          //2
    
          $('#create_expencefrm').submit(function (e) {
               // console.log("Creating the book");
            e.preventDefault();
            // get the form data
            var formData = {
                'title_exp': $('#id_title_exp').val(),
                'value_exp': $('#id_value_exp').val(),
                'category_exp': $('#id_category_exp').val(),
                'currency_exp':$('#user-currency_exp').text(),
                'categorytempexp': $('#id_category_exp option:selected').text(),
                form_type: $('#expence-hidden').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                contentType: 'application/x-www-form-urlencoded',
                encode: true,
                
            };
            $.ajax({
                type: 'POST',
                url: 'create_exp/',
                data: formData,
                dataType: 'json',
            }).done(function (data) {
                $(function () {
                  budget = $(".budget").text(); 
             
             
                    $("#dashboardpopup").css({
                      "visibility":"hidden",
                    }).animate({"opacity": "0"},200);;
                    $("#dashboardpopup-1").css({
                      "visibility":"hidden",
                    }).animate({"opacity": "0"},200);;
                    $("#dashboardpopup-4").css({
                      "visibility":"hidden",
                    }).animate({"opacity": "0"},200);;
                  
                    $("#add-expence").append(
                      '<li class="dashboard__income__li" id="li-icnome">'+
                      '<div class="noneExpence null-opacity">1</div>'+
                      '<div class="dashboard__income__box">'+
                      '<p class="dashboard__income__text">'+ data.data['title_exp'] + ' ( ' + formData['categorytempexp'] + ' )'+
                      '</p>'+
                      '<div class="dashboard__income__num-box">'+
                      '<p class="dashboard__income__num" >- <span class="currency">'+ formData['currency_exp'] + '</span><span class="dashboard__currency li-expence-val" >' +data.data['value_exp']+'</span></p>'+
                      '<p class="dashboard__income__delete-exp" id="'+data.data['id']+'">'+'&times;'+
                      '</p>'+
                      '</div>'+
                  '</div>'+
                  '</li>'
        
                    )
       
   
           
                      $.ajax({
                        type: 'POST',
                        url: 'update_budget/',
                        headers: {"X-CSRFToken":'{{ csrf_token }}'},
                        data: {
                  
                          budgetchange: parseInt(budget) + -(data.data['value_exp']),
                          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                  
                       },
                    })
              


                });
              });
            });
    
          
            $(".dashboard__income__delete-exp").click(function(e) {
              e.preventDefault();
              row = $(this).closest('li');
              btn = e.target.id;      //get clicked button
              val = $(this).closest('div').find("span.li-expence-val").text()
              del_id = $(this).attr(btn);
              var formData = {
                  'id': btn,
                  csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
              };
              $.ajax({
                  type: 'POST',       // define the type of HTTP verb we want to use (POST for our form)
                  url: "delete_exp/" + formData.id + "/",
                  encode: true,
                  contentType: 'application/x-www-form-urlencoded',
                  crossDomain: false,
                  dataType: 'json',
                  data: formData,     // our data object
                  success: function (data) {
                    
    
    
                      row.fadeOut(300, function () {
                        $(this).remove();
                    });
                    
                    budget = $(".budget").text(); 
                    let budgetGoalValue = $("#goal_value_goal").text();
                    let displayRangeSlider = $("#output-per")
                    let rangeSlider= $("#slider-per");
                    let budgetGoalLeft = $("#goal_budget_left");
                    $("#budget_goal").text(budget);
      
                    let calculatePersentages = budget / budgetGoalValue * 100;
                    let newCalculatePersentages = calculatePersentages.toFixed(1);  
                    rangeSlider.val(newCalculatePersentages);
      
                    let budgetLeft = budgetGoalValue - budget;
      
                    displayRangeSlider.text(newCalculatePersentages + " %");
                    if (budget <= 0){
                      displayRangeSlider.text("0  %");
                    }
                    if (budget >= 0){
                      budgetGoalLeft.text(budgetLeft);
                    }
                    else{
                      budgetGoalLeft.text($("#goal_budget_left"));
                    }
           
              $.ajax({
                type: 'POST',
                url: 'update_budget/',
                headers: {"X-CSRFToken":'{{ csrf_token }}'},
                data: {
          
                  budgetchange: parseInt(budget) + parseInt(val),
                  csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
          
               },
            })

    
                  },
                  error: function (exception) {
                      alert('Exeption:' + exception);
                  }
              });
          });
    
    
    //3
    
    
    $('#create_goalfrm').submit(function (e) {
      // console.log("Creating the book");
    e.preventDefault();
    // get the form data
    var formData = {
       'title_goal': $('#id_title_goal').val(),
       'value_goal': $('#id_value_goal').val(),
       'currency_goal':$('#user-currency_goal').text(),
       form_type: $('#goal-hidden').val(),
       csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
       contentType: 'application/x-www-form-urlencoded',
       encode: true,
    
    };
    $.ajax({
       type: 'POST',
       url: 'create_goal/',
       data: formData,
       dataType: 'json',
    }).done(function (data) {
       $(function () {
        $(".noneGoalsHeading").css({
          "opacity":"0",
          "display":"none"
        })
        $("#budget-goals").fadeOut(400, function () {
          $(this).remove();

         });
          hideVisibility($("#dashboardpopup"));
          hideVisibility($("#dashboardpopup-3"));
          $("#add-goal").append(
            '<div class="dashboard__goals" id="budget-goals">'+
            '<div class="noneGoals null-opacity">1</div>'+
            '<p class="dashboard__goals__heading">'+data.data['title_goal']+'</p>'+
    
            '<div class="dashboard__goals__speedometer-box">'+
                '<output class="dashboard__goals__range-label" id="output-per">0 %</output>'+
            '</div>'+
          
            '<div class="dashboard__goals__range">'+
           
            '<div class="dashboard__goals__range-box">'+
    
                
            '<input type="range" class="dashboard__goals__range" id="slider-per" value=".64" disabled  min="0" max="100" step="0.1" >'+
        '</div>'+   
            '<p class="dashboard__goals__text" id="goal_text">Keep going !</p>'+
            '<div class="dashboard__goals__range-label-box">'+
              '<p class="dashboard__goals__range-label-2" id="ebudget__main">+ <span class="currency">'+ formData['currency_goal'] + '</span><span class="dashboard__currency" id="budget_goal">0</span> earned</p>'+

            '<p class="dashboard__goals__range-label-2"><span class="currency">'+ formData['currency_goal'] + '</span><span class="dashboard__currency" id="goal_budget_left">'+data.data['value_goal']+'</span> left</p>'+
        '</div>'+
    '</div>'+
     '<p id="goal_value_goal">'+data.data['value_goal']+'</p>'+
        '</div>'+
        '</div>'
          )
      
       });
     });
    });
    
    

    $(document).on('click', '.dashboard__spendings-delete', function (e) {
      e.preventDefault();
      row = $(this).closest('div');
      btn = e.target.id;      //get clicked button
      del_id = $(this).attr(btn);
      var formData = {
          'id': btn,
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
      };
      $.ajax({
          type: 'POST',       // define the type of HTTP verb we want to use (POST for our form)
          url: "delete_c/" + formData.id + "/",
          encode: true,
          contentType: 'application/x-www-form-urlencoded',
          crossDomain: false,
          dataType: 'json',
          data: formData,     // our data object
          success: function (data) {
     
          
              row.fadeOut(300, function () {
                $(this).remove();
            });
 
          },
          error: function (exception) {
              alert('Exeption:' + exception);
          }
      });
  });
     
     
    
    
    