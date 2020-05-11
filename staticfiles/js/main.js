


$(function () {

  $("body").css("background-color", "#AA5500");

var currentSlide=1;
var $slider = $(".main__slides");
var slideCount = $slider.children().length;
var slideTime=6000;
var animationTime=800;

setInterval(function(){
$slider.animate({

marginLeft: '-=1200px'

}, animationTime, function(){
currentSlide ++;


if(currentSlide == slideCount){
 currentSlide = 1;
 $(this).css("margin-left" , "0px");
}


});

}, slideTime);


  

$("#settings-click-1").click(function(event) {
  $("#settings-click-1").addClass("current");
  $("#settings-click-2").removeClass("current");
  $("#settings-click-3").removeClass("current");
  $("#settings-click-4").removeClass("current");
  $("#settings-1").animate({
    "marginTop": "-30px",
    "opacity": "1",
  }, 500);
  $("#settings-2").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-3").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-4").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);

});




$("#settings-click-2").click(function(event) {
  $("#settings-click-2").addClass("current");
  $("#settings-click-1").removeClass("current");
  $("#settings-click-3").removeClass("current");
  $("#settings-click-4").removeClass("current");
  $("#settings-2").animate({
    "marginTop": "-30px",
    "opacity": "1",
  }, 500);
  $("#settings-1").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-3").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-4").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
});




$("#settings-click-3").click(function(event) {
  $("#settings-click-3").addClass("current");
  $("#settings-click-1").removeClass("current");
  $("#settings-click-2").removeClass("current");
  $("#settings-click-4").removeClass("current");
  $("#settings-3").animate({
    "marginTop": "-30px",
    "opacity": "1",
  }, 500);
  $("#settings-1").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-2").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-4").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
});


$("#settings-click-4").click(function(event) {
  $("#settings-click-4").addClass("current");
  $("#settings-click-1").removeClass("current");
  $("#settings-click-2").removeClass("current");
  $("#settings-click-3").removeClass("current");
  $("#settings-4").animate({
    "marginTop": "-30px",
    "opacity": "1",
  }, 500);
  $("#settings-1").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-2").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
  $("#settings-3").animate({
    "marginTop": "-300px",
    "opacity": "0",
  }, 500);
});



$( function() {
  $( "#budget-sidebar,#budget-drag,#budget-income,#budget-expence,#budget-add,#budget-goals,#budget-calendar,#budget-calendar-2,#budget-settings" ).draggable({
    containment: "window"
  });
} );

$(".dashboard__open").click(function(event){
  $(".dashboard__sidebar").animate({
    "marginLeft": "0",
  },500);
});

$("#dashboard-close").click(function(event){
  $(".dashboard__sidebar").animate({
    "marginLeft": "-150px",
  },500);
});

// var persvalue = $(".dashboard__goals__range").val(100);
// $(".dashboard__goals__range-label").text(persvalue);




$("#topbarbtn").click(function(event){
console.log("gdgsffsf")
  $("#dashboardpopup").css({
    "visibility":"visible",
  }).animate({"opacity": "1"},200);;


 

});


$(".dashboard__popup-type").click(function(event){
  $(".dashboard__popup-1").css({
    "visibility":"hidden",
  }).animate({"opacity": "0"},200);
  $(".dashboard__popup-2").css({
    "visibility":"visible",
  }).animate({"opacity": "1"},200);
  $(".dashboard__popup-input").focus();
});






$("#settings__link").click(function(event){
  $("#settingscolor").css({
    "visibility":"visible",
  }).animate({"opacity": "1"},200);
});

$("#color-close").click(function(event){
  $("#settingscolor").css({
    "visibility":"hidden",
  }).animate({"opacity": "0"},200);
});




$("#small").click(function(event){
 $('body').addClass("scheme-white")
 $('body').removeClass("scheme-black")
 $('#large').prop('checked', false);
 $("#theme-light-click").click(function( event ) {
 
  event.preventDefault();
});
});

$("#large").click(function(event){
  $('body').addClass("scheme-black")
  $('body').removeClass("scheme-white")
  $('#small').prop('checked', false);
  $("#theme-dark-click").click(function( event ) {
 
    event.preventDefault();
  });
 });
 
 





'use strict';
function checkPopuptext() {
  // Check if username and email inputs are valid
  if (popupValid.popuptext) {
    $('#popup-button-1').removeAttr('disabled'); // Allow submitting of form
  } else {
    $('#popup-button-1').attr('disabled', true); // Block form from being submitted
  }
}

var popupValid = {
  popuptext : false,
};


$('.dashboard__popup-input').on('input', function() {
  var popuptext = $(this).val();

  if (popuptext.length < 1) {
  
    popupValid.username = false; // Set valid status to false

 
    checkValidation(); // Perform validation check
   
  } else {

    popupValid.username = true; // Set username as valid up to this point
    $(".dashboard__popup-button").click(function(event){
      $(".dashboard__popup-2").css({
        "visibility":"hidden",
      }).animate({"opacity": "0"},200);;
      $(".dashboard__popup-3").css({
        "visibility":"visible",
      }).animate({"opacity": "1"},200);;
      $(".dashboard__popup-input").focus();
    });
    checkValidation(); // Perform validation check
  
  }
});

 


'use strict';

// Perform functions when form is submitted
$('#regForm').on('submit', function(e) {
  // Check if the form was previously submitted
  if ($(this).hasClass('form-submitted')) {
    e.preventDefault(); // Prevent form from being submitted again
  } else {
    $(this).addClass('form-submitted'); // Add a class to identify form as being submitted already
    $('#username').attr('readonly', true); // Lock username field
    $('#email').attr('readonly', true); 
    $('#password').attr('readonly', true); // Lock username field 
    $('#submitButton').attr('disabled', true); // Lock submit button
  }
});


$('#logForm').on('submit', function(e) {
    // Check if the form was previously submitted
    if ($(this).hasClass('form-submitted')) {
      e.preventDefault(); // Prevent form from being submitted again
    } else {
      $(this).addClass('form-submitted'); // Add a class to identify form as being submitted alread
      $('#email').attr('readonly', true); 
      $('#password').attr('readonly', true); // Lock username field 
      $('#submitButton').attr('disabled', true); // Lock submit button
    }
  });


// Custom object to track if inputs are valid or not
var formValid = {
    username: false, // Username field
    email: false,
    password: false
   
  };
  
  // Function to check if fields have passed validation
  function checkValidation() {
    // Check if username and email inputs are valid
    if (formValid.username && formValid.email && formValid.password) {
      $('#submitButton').removeAttr('disabled'); // Allow submitting of form
    } else {
      $('#submitButton').attr('disabled', true); // Block form from being submitted
    }
  }
  
  // Validation for Username input field
  $('#username').on('input', function() {
    var username = $(this).val(); // Assign the input value to a variable to perform validation
  
    // Function to set a custom message
    function msg(body) {
      $('#name-feedback').text(body).show();
    };
  
    // Function to hide paragraph tag
    function hide() {
      $('#name-feedback').hide();
    };
  
    // Check if username has at least one charactar
    if (username.length < 1) {
      msg('This field is required.'); // Assign an error message
      formValid.username = false; // Set valid status to false
      $('.username').addClass('icon-2');
      $('.username').removeClass('icon-1');
      checkValidation(); // Perform validation check
     
    } else {
      hide(); // Hide previous error message
      formValid.username = true; // Set username as valid up to this point
      checkValidation(); // Perform validation check
      var testExp = new RegExp(/^[a-zA-Z0-9]+$/); // Create regular expression to check against username input
      // Check if username is alphanumeric
      if (!testExp.test(username)) {
        msg('Must not have any special characters'); // Return custom error message
        formValid.username = false; // Set field to invalid
        $('.username').addClass('icon-2');
        $('.username').removeClass('icon-1');
        checkValidation(); // Perform validation check
      } else {
        hide(); // Hide previous error message
        formValid.username = true; // Set username field as valid
        $('.username').addClass('icon-2');
        $('.username').removeClass('icon-1');
        checkValidation(); // Perform validation check
        // Check if username meets length requirements
        if (username.length < 3 || username.length > 10) {
          msg('Must be at least 3 characters but no more than 10'); // Return error message
          formValid.username = false; // Set input field as invalid
          $('.username').addClass('icon-2');
          $('.username').removeClass('icon-1');
          checkValidation(); // Perform validation check
        } else {
          hide(); // Hide previous error message
          $('.username').addClass('icon-1');
          $('.username').removeClass('icon-2');
          formValid.username = true; // Set input as valid
          checkValidation(); // Perform validation check
        }
      }
    }
  });
  
  // Validation for E-mail Input
  $('#email').on('input', function() {
    var email = $(this).val(); // Assign input value to a variable
  
    // Function to assign message to paragraph tag
    function msg(body) {
        $('#email-feedback').text(body).show();
      };
    
      // Function to hide paragraph tag
      function hide() {
        $('#email-feedback').hide();
      };
  
    // Check if e-mail value is at least 1 character
    if (email.length < 1) {
      msg('This field is required.'); // Assign error message to DOM.
      formValid.email = false; // Set input as invalid
      $('.email').addClass('icon-2');
      $('.email').removeClass('icon-5');
      checkValidation(); // Perform validation check
    } else {
      hide(); // Hide previous error message
      formValid.email = true; // Set input as valid
      checkValidation(); // Perform validation check
      var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/); // Regular Expression to test against e-mail value
      // Check if e-mail value passes regular expression test
      if (!testExp.test(email)) {
        msg('Must be a valid e-mail'); // Return custom error message
        formValid.email = false; // Set input as invalid
        $('.email').addClass('icon-2');
        $('.email').removeClass('icon-5');
        checkValidation(); // Perform validation check
      } else {
        hide(); // Hide previous error messages
        formValid.email = true; // Set input as invalid
        checkValidation(); // Perform validation check
        // Check if e-mail value meets length requirements
        if (email.length < 3 || email.length > 30) {
          msg('Must be at least 3 characters but no more than 30'); // Return custom error message to DOM
          formValid.email = false; // Set input as invalid
          $('.email').addClass('icon-2');
          $('.email').removeClass('icon-5');
          checkValidation(); // Perform validation check
        } else {
          hide(); // Hide previous error message
          formValid.email = true; // Set input as valid
          $('.email').addClass('icon-5');
          $('.email').removeClass('icon-2');
          checkValidation(); // Perform validation check
        }
      }
    }
  });
  

      
  // Validation for E-mail Input
  $('#password').on('input', function() {
    var password = $(this).val(); // Assign input value to a variable
  
    // Function to assign message to paragraph tag
    function msg(body) {
        $('#password-feedback').text(body).show(0);
      };
    
      // Function to hide paragraph tag
      function hide() {
        $('#password-feedback').hide(0);
      };
  
    // Check if e-mail value is at least 1 character
    if (password.length < 1) {
      msg('This field is required.'); // Assign error message to DOM.
      formValid.password = false; // Set input as invalid
      $('.password').addClass('icon-2');
      $('.password').removeClass('icon-3');
      checkValidation(); // Perform validation check
    }
       else {
        hide(); // Hide previous error messages
        formValid.password = true; // Set input as invalid
        $('.password').addClass('icon-2');
        $('.password').removeClass('icon-3');
        checkValidation(); // Perform validation check
        // Check if e-mail value meets length requirements
        if (password.length < 8) {
          msg('Must be at least 8 characters'); // Return custom error message to DOM
          formValid.password = false; // Set input as invalid
          checkValidation(); // Perform validation check
          $('.password').addClass('icon-2');
          $('.password').removeClass('icon-3');
        } else {
          hide(); // Hide previous error message
          formValid.password = true; // Set input as valid
          $('.password').addClass('icon-3');
          $('.password').removeClass('icon-2');
          checkValidation(); // Perform validation check
        }
      }
    
  });
  


});
function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      $('.icon-3').addClass('icon-4');
      $('.icon-3').removeClass('icon-3');
    
    } else {
      x.type = "password";
      $('.icon-4').addClass('icon-3');
      $('.icon-4').removeClass('icon-4');
    }
  }










  $(document).ready(function() {
    // Making 2 variable month and day
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    
    // make single object
    var newDate = new Date();
    // make current time
    newDate.setDate(newDate.getDate());
    // setting date and time
    $('#Date').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);
    
    setInterval( function() {
    // Create a newDate() object and extract the seconds of the current time on the visitor's
    var seconds = new Date().getSeconds();
    // Add a leading zero to seconds value
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);
    
    setInterval( function() {
    // Create a newDate() object and extract the minutes of the current time on the visitor's
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes value
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
    
    setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000); 
    });




    function sliderChange(val) {
      document.getElementById('output-per').innerHTML = val + " %";
    }













