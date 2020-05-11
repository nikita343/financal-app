

$(function () {

  function hideVisibility(item){
    item.css({
      "visibility":"hidden",
    }).animate({"opacity": "0"},200);;
  }
  function visibility(item){
    item.css({
      "visibility":"visible",
    }).animate({"opacity": "1"},200);;
  }
  function moveRightToLeft(item){
      item.animate({
        "marginLeft" : "0"
      },900,'easeInOutQuint')
  }
  function moveLeftToLeft(item){
    item.animate({
      "marginLeft" : "-100vw"
    },700,'easeInOutQuint')
}
function moveRightToRight(item){
  item.animate({
    "marginLeft" : "100vw"
  },700,'easeInOutQuint')
}
$("#nextToBg").click(function(){

  moveRightToLeft($(".persinalization__child-2"))
  moveLeftToLeft($(".persinalization__child-1"))
})




$("#backToUser").click(function(){

  moveRightToLeft($(".persinalization__child-1"))
  moveRightToRight($(".persinalization__child-2"))
})

$("#backToBg").click(function(){

  moveRightToLeft($(".persinalization__child-2"))
  moveRightToRight($(".persinalization__child-3"))
})

$("#nextToColour").click(function(){
  moveRightToLeft($(".persinalization__child-3"))
  moveLeftToLeft($(".persinalization__child-2"))

});

$("#backToColour").click(function(){
  moveRightToLeft($(".persinalization__child-3"))
  moveRightToRight($(".persinalization__child-4"))

});
$("#nextToTheme").click(function(){
  moveRightToLeft($(".persinalization__child-4"))
  moveLeftToLeft($(".persinalization__child-3"))

});
$("#nextToFinal").click(function(){
  moveRightToLeft($(".persinalization__child-6"))
  moveLeftToLeft($(".persinalization__child-5"))

});
$("#nextToLanguage").click(function(){
  moveRightToLeft($(".persinalization__child-5"))
  moveLeftToLeft($(".persinalization__child-4"))

});
$("#backToLanguage").click(function(){
  moveRightToLeft($(".persinalization__child-5"))
  moveRightToRight($(".persinalization__child-6"))

});
$("#backToTheme").click(function(){
  moveRightToLeft($(".persinalization__child-4"))
  moveRightToRight($(".persinalization__child-5"))

});


$('#backgroundimage').bind('change', function() {
  $('#submit-image').removeAttr('disabled');
});

hideVisibility($("#black-span"))
hideVisibility($("#white-span"))

  

$("#black_select").click(function(){
  hideVisibility($("#white-span"))
  visibility($("#black-span"))
  $("#theme").val("schemeblack")
});


$("#white_select").click(function(){
  hideVisibility($("#black-span"))
  visibility($("#white-span"))
  $("#theme").val("schemewhite")
});


    'use strict';
var formValid = {
    username: false,
};
      
      // Function to check if fields have passed validation
      function checkValidation() {
        // Check if username and email inputs are valid
        if (formValid.username) {
          $('#submitButton').removeAttr('disabled'); // Allow submitting of form
        } else {
    
          $('#submitButton').attr('disabled', true); // Block form from being submitted
        }
      }
      
      // Validation for Username input field
   
      // Validation for E-mail Input
      $('#username').on('input', function() {
        var username = $(this).val(); // Assign input value to a variable
    

        // Function to assign message to paragraph tag
        function msg(body) {
            $('#username-feedback').text(body).show();
          };
        
          // Function to hide paragraph tag
          function hide() {
            $('#username-feedback').hide();
          };
      
        // Check if e-mail value is at least 1 character
        if (username.length < 1) {
          msg('This field is required.'); // Assign error message to DOM.
          formValid.username = false; // Set input as invalid
          $('.username').addClass('fa-times');
          $('.username').removeClass('fa-user');
          checkValidation(); // Perform validation check
        } else {
          hide(); // Hide previous error message
          $('.username').addClass('fa-user');
          $('.username').removeClass('fa-times');
          formValid.username = true; // Set input as valid
          checkValidation(); // Perform validation check
       
          
        }
      });
      
    




      $('#createUserNameFrm').submit(function (e) {
        // console.log("Creating the book");
        e.preventDefault();
        // get the form data
        var formData = {
      
            'username': $('#username').val(),
            form_type: $('#username-hidden').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            contentType: 'application/x-www-form-urlencoded',
            encode: true,

        };
        $.ajax({
            type: 'POST',
            url: '/update_username/',
            data: formData,
            dataType: 'json',
        }).done(function (data) {
            $(function () {
    
              moveRightToLeft($(".persinalization__child-2"))
              moveLeftToLeft($(".persinalization__child-1"))
          
            });
          });
        });



        $('#updatThemeFrm').submit(function (e) {
          // console.log("Creating the book");
          e.preventDefault();
          // get the form data
          var formData = {
        
              'colorscheme': $('#theme').val(),
              form_type: $('#theme-hidden').val(),
              csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
              contentType: 'application/x-www-form-urlencoded',
              encode: true,
  
          };
          $.ajax({
              type: 'POST',
              url: '/update_theme/',
              data: formData,
              dataType: 'json',
          }).done(function (data) {
              $(function () {
      
                moveRightToLeft($(".persinalization__child-5"))
                moveLeftToLeft($(".persinalization__child-4"))
            
              });
            });
          });

          
  

          $('#updatColourFrm').submit(function (e) {
            // console.log("Creating the book");
            e.preventDefault();
            // get the form data
            var formData = {
          
                'color': $('#color').val(),
                form_type: $('#color-hidden').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                contentType: 'application/x-www-form-urlencoded',
                encode: true,
    
            };
            $.ajax({
                type: 'POST',
                url: '/update_color/',
                data: formData,
                dataType: 'json',
            }).done(function (data) {
                $(function () {
        
                  moveRightToLeft($(".persinalization__child-4"))
                  moveLeftToLeft($(".persinalization__child-3"))
              
                });
              });
            });
    


     $("#language").change(function (e) {
        // console.log("Creating the book");
        e.preventDefault();
        // get the form data
        var formData = {
      
            'language': $('#language').val(),
            form_type: $('#language-hidden').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
            contentType: 'application/x-www-form-urlencoded',
            encode: true,

        };
        $.ajax({
            type: 'POST',
            url: '/update_language/',
            data: formData,
            dataType: 'json',
        }).done(function (data) {
            $(function () {
    
              moveRightToLeft($(".persinalization__child-3"))
              moveLeftToLeft($(".persinalization__child-2"))    
          
            });
          });
        });

        



});