


$(function () {



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


    
    $("#scrolldown").click(function(){
      $("html, body").animate({ scrollTop: 700 }, 1000);
    });



    
    
    $(".dashboard__open").click(function(event){
      $(".dashboard__sidebar").animate({
        "marginLeft": "0",
      },400,'easeInOutQuint');
    
      hideVisibility($(".dashboard__open"));
    });
    
    $("#dashboard-close").click(function(event){
      $(".dashboard__sidebar").animate({
        "marginLeft": "-200px",
      },400,'easeInOutQuint');
      visibility($(".dashboard__open"));
    });

    
    
    if($(".settings__box").hasClass("schemeblack")){
      hideVisibility($("#white"))
      visibility($("#black"))
    }
    
    if($(".settings__box").hasClass("schemewhite")){
      hideVisibility($("#black"))
      visibility($("#white"))
    }
    
    
    



    $(".navbar__close").click(function(event){
      $(".navbar__mobile-background-1").animate({
        "marginLeft": "-100%",
      },600,'easeInOutQuint');
      $(".navbar__mobile-background-2").animate({
        "marginLeft": "200%",
      },600,'easeInOutQuint');
      $(".navbar__mobile-background-3").animate({
        "marginLeft": "-100%",
      },600,'easeInOutQuint');
      $(".navbar__mobile-background-4").animate({
        "marginLeft": "200%",
      },600,'easeInOutQuint');
     
      visibility($(".navbar__open"));
      hideVisibility($(".navbar__close"));
  $(".navbar__mobile-box").delay(600).queue( function(next){ 
    $(this).css({
      "visibility":"hidden",
      "opacity": "0",
    }) 
    next(); 
  });


    });


    $(".navbar__open").click(function(event){
      $(".navbar__mobile-background-1").animate({
        "marginLeft": "0",
      },600,'easeInOutQuint');
      $(".navbar__mobile-background-2").animate({
        "marginLeft": "0",
      },600,'easeInOutQuint');
      $(".navbar__mobile-background-3").animate({
        "marginLeft": "0",
      },600,'easeInOutQuint');
      $(".navbar__mobile-background-4").animate({
        "marginLeft": "0",
      },600,'easeInOutQuint');

      hideVisibility($(".navbar__open"));
      visibility($(".navbar__mobile-box"));
      visibility($(".navbar__close"));
     
    });
    






    'use strict';
    

  

    var formValid = {
    
        email: false,
        password: false,
        repeatpassword:false   
      };
      
      // Function to check if fields have passed validation
      function checkValidation() {
        // Check if username and email inputs are valid
        if (formValid.email && formValid.password && formValid.repeatpassword) {
          $('#submitButton').removeAttr('disabled'); // Allow submitting of form
        } else {
    
          $('#submitButton').attr('disabled', true); // Block form from being submitted
        }
      }
      
      // Validation for Username input field
   
      // Validation for E-mail Input
      $('#email').on('input', function() {
        var email = $(this).val(); // Assign input value to a variable
      

        var usernameValue = $("#email").val()
        $("#username").val(usernameValue)

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
          $('.email').addClass('fa-times');
          $('.email').removeClass('fa-envelope');
          checkValidation(); // Perform validation check
        } else {
          hide(); // Hide previous error message
          $('.email').addClass('fa-envelope');
          $('.email').removeClass('fa-times');
          formValid.email = true; // Set input as valid
          checkValidation(); // Perform validation check
          var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/); // Regular Expression to test against e-mail value
          // Check if e-mail value passes regular expression test
          if (!testExp.test(email)) {
            msg('Must be a valid e-mail'); // Return custom error message
            formValid.email = false; // Set input as invalid
            $('.email').addClass('fa-times');
            $('.email').removeClass('fa-envelope');
            checkValidation(); // Perform validation check
          } else {
            hide(); // Hide previous error messages
            formValid.email = true; // Set input as invalid
            checkValidation(); // Perform validation check
            // Check if e-mail value meets length requirements
            if (email.length < 3 || email.length > 30) {
              msg('Must be at least 3 characters but no more than 30'); // Return custom error message to DOM
              formValid.email = false; // Set input as invalid
              $('.email').addClass('fa-times');
              $('.email').removeClass('fa-envelope');
              checkValidation(); // Perform validation check
            } else {
              hide(); // Hide previous error message
              formValid.email = true; // Set input as valid
              $('.email').addClass('fa-envelope');
              $('.email').removeClass('fa-times');
              checkValidation(); // Perform validation check
            }
          }
        }
      });
      
    
          
      // Validation for E-mail Input
      $('#passwordReg').on('input', function() {
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
          $('.passwordFirst').addClass('fa-times');
          $('.passwordFirst').removeClass('fa-eye');
          checkValidation(); // Perform validation check
        }
           else {
            hide(); // Hide previous error messages
            formValid.password = true; // Set input as invalid
            $('.passwordFirst').addClass('fa-eye');
            $('.passwordFirst').removeClass('fa-times');
            checkValidation(); // Perform validation check
            // Check if e-mail value meets length requirements
            if (password.length < 8) {
              $('.passwordFirst').addClass('fa-times');
              $('.passwordFirst').removeClass('fa-eye');
              msg('Must be at least 8 characters'); // Return custom error message to DOM
              formValid.password = false; // Set input as invalid
              checkValidation(); // Perform validation check
            
            } else {
              hide(); // Hide previous error message
              formValid.password = true; // Set input as valid
              $('.passwordFirst').addClass('fa-eye');
              $('.passwordFirst').removeClass('fa-times');
              checkValidation(); // Perform validation check
            }
           }        
      });


     $(".passwordFirst").click( function() {
        var x = document.getElementById("passwordReg");
        if (x.type === "password") {
          x.type = "text";
          $('.passwordFirst').addClass('fa-eye-slash');
          $('.passwordFirst').removeClass('fa-eye');
        
        } else {
          x.type = "password";
          $('.passwordFirst').addClass('fa-eye');
          $('.passwordFirst').removeClass('fa-eye-slash');
        }
      })


      $(".passwordLog").click( function() {
        var x = document.getElementById("passwordLog");
        if (x.type === "password") {
          x.type = "text";
          $('.passwordLog').addClass('fa-eye-slash');
          $('.passwordLog').removeClass('fa-eye');
        
        } else {
          x.type = "password";
          $('.passwordLog').addClass('fa-eye');
          $('.passwordLog').removeClass('fa-eye-slash');
        }
      })

      $(".passwordRepeat").click( function() {
        var x = document.getElementById("repeatpassword");
        if (x.type === "password") {
          x.type = "text";
          $('.passwordRepeat').addClass('fa-eye-slash');
          $('.passwordRepeat').removeClass('fa-eye');
        
        } else {
          x.type = "password";
          $('.passwordRepeat').addClass('fa-eye');
          $('.passwordRepeat').removeClass('fa-eye-slash');
        }
      })
  
      
      $('#repeatpassword').on('input', function() {
        var repeartpassword = $(this).val(); // Assign input value to a variable
        var password = $('#passwordReg').val();
        // Function to assign message to paragraph tag
        function msg(body) {
            $('#repeatpassword-feedback').text(body).delay(100).show(200);
          };
        
          // Function to hide paragraph tag
          function hide() {
            $('#repeatpassword-feedback').delay(100).hide(0);
          };
      
        // Check if e-mail value is at least 1 character
        if (repeartpassword != password) {
          msg('Passwords do not match.'); // Assign error message to DOM.
          formValid.repeatpassword = false; // Set input as invalid
          $('.passwordRepeat').addClass('fa-times');
          $('.passwordRepeat').removeClass('fa-eye');

          checkValidation(); // Perform validation check
        }
           else {
            hide(); // Hide previous error messages
            formValid.repeatpassword = true; // Set input as invalid
            $('.passwordRepeat').addClass('fa-eye');
            $('.passwordRepeat').removeClass('fa-times');

            checkValidation(); // Perform validation check
            // Check if e-mail value meets length requirements
        
          }
        
      });
      
    
 

  



   $('#backgroundimage').bind('change', function() {
    $('#submit-image').removeAttr('disabled');
    });
 











    function checkValidationLogIn() {
      // Check if username and email inputs are valid
      if (formValidLogIn.email && formValidLogIn.password ) {
        $('#logInButton').removeAttr('disabled'); // Allow submitting of form
      } else {
        $('#logInButton').attr('disabled', true); // Block form from being submitted
      }
    }

    var formValidLogIn = {
        email:false,
        password:false
    };

      $("#email").on('input', function() {
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
          $('.emailLog').addClass('fa-times');
          $('.emailLog').removeClass('fa-envelope');
          checkValidationLogIn(); // Perform validation check
        } else {
          hide(); // Hide previous error message
          formValidLogIn.email = true; // Set input as valid
          checkValidationLogIn(); // Perform validation check
          var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/); // Regular Expression to test against e-mail value
          // Check if e-mail value passes regular expression test
          if (!testExp.test(email)) {
            msg('Must be a valid e-mail'); // Return custom error message
            formValidLogIn.email = false; // Set input as invalid
            $('.emailLog').addClass('fa-times');
            $('.emailLog').removeClass('fa-envelope');
            checkValidationLogIn(); // Perform validation check
          } else {
            hide(); // Hide previous error messages
            formValidLogIn.email = true; // Set input as invalid
            checkValidationLogIn(); // Perform validation check
            // Check if e-mail value meets length requirements
            if (email.length < 3 || email.length > 30) {
              msg('Must be at least 3 characters but no more than 30'); // Return custom error message to DOM
              formValidLogIn.email = false; // Set input as invalid
              $('.emailLog').addClass('fa-times');
              $('.emailLog').removeClass('fa-envelope');
              checkValidationLogIn(); // Perform validation check
            } else {
              hide(); // Hide previous error message
              formValidLogIn.email = true; // Set input as valid
              $('.emailLog').addClass('fa-envelope');
              $('.emailLog').removeClass('fa-times');
              checkValidationLogIn(); // Perform validation check
            }
          }
        }
  

    });


    

    $("#passwordLog").on('input', function() {
      var password = $(this).val(); 
      
      function msgUpdate(body) {
          $('#password-feedback').text(body).show();
        };
      
        function hideUpdate() {
          $('#password-feedback').hide();
        };
    
      if (password.length < 1) {
        msgUpdate('This field is required'); 
        formValidLogIn.password = false; 
        $('.passwordLog').addClass('fa-times');
        $('.passwordLog').removeClass('fa-eye');
        
        checkValidationLogIn(); // Perform validation check
      }  else {
        hideUpdate();
        formValidLogIn.password = true; 
        $('.passwordLog').addClass('fa-eye');
        $('.passwordLog').removeClass('fa-times');

        checkValidationLogIn(); 
        }
  });


  
  function checkValidationResetPassword() {
    // Check if username and email inputs are valid
    if (formValidLogIn.email) {
      $('#resetButton').removeAttr('disabled'); // Allow submitting of form
    } else {
      $('#resetButton').attr('disabled', true); // Block form from being submitted
    }
  }

  var formValidLogIn = {
      email:false,
     
  };

    $("#email").on('input', function() {
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
        $('.emailReset').addClass('fa-times');
        $('.emailReset').removeClass('fa-envelope');
        checkValidationResetPassword(); // Perform validation check
      } else {
        hide(); // Hide previous error message
        formValidLogIn.email = true; // Set input as valid
        $('.emailReset').addClass('fa-envelope');
        $('.emailReset').removeClass('fa-times');
        checkValidationLogIn(); // Perform validation check
        var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/); // Regular Expression to test against e-mail value
        // Check if e-mail value passes regular expression test
        if (!testExp.test(email)) {
          msg('Must be a valid e-mail'); // Return custom error message
          formValidLogIn.email = false; // Set input as invalid
          $('.emailReset').addClass('fa-times');
          $('.emailReset').removeClass('fa-envelope');
          checkValidationResetPassword(); // Perform validation check
        } else {
          hide(); // Hide previous error messages
          $('.emailReset').addClass('fa-envelope');
          $('.emailReset').removeClass('fa-times');
          formValidLogIn.email = true; // Set input as invalid
          checkValidationResetPassword(); // Perform validation check
          // Check if e-mail value meets length requirements
          if (email.length < 3 || email.length > 30) {
            msg('Must be at least 3 characters but no more than 30'); // Return custom error message to DOM
            formValidLogIn.email = false; // Set input as invalid
            $('.emailReset').addClass('fa-times');
            $('.emailReset').removeClass('fa-envelope');
            checkValidationResetPassword(); // Perform validation check
          } else {
            hide(); // Hide previous error message
            formValidLogIn.email = true; // Set input as valid
            $('.emailReset').addClass('fa-envelope');
            $('.emailReset').removeClass('fa-times');
            checkValidationResetPassword(); // Perform validation check
          }
        }
      }


  });


    $(".main__about-click-1").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Custom Background that User Choose !').fadeIn(500);
      })
    });


    $(".main__about-click-2").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Smart Income Calculations !').fadeIn(500);
      })
    });

    
    $(".main__about-click-3").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Smart Balance Calculations !').fadeIn(500);
      })
    });

    
    $(".main__about-click-4").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Smart Expence Calculations !').fadeIn(500);
      })
    });

    
    $(".main__about-click-5").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text("User's custom categories !").fadeIn(500);
      })
    });

    
    $(".main__about-click-6").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Dark and Light Themes !').fadeIn(500);
      })
    });

    $(".main__about-click-7").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Custom Colour That User Choose !').fadeIn(500);
      })
    });



    
    $(".main__about-click-9").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Smart Money Goals !').fadeIn(500);
      })
    });

    
    $(".main__about-click-10").mouseover(function(event){
      $(".main__about-text").fadeOut(function(){
        $(this).text('Categories for Labels !').fadeIn(500);
      })
    });






$(".alert__button").click(function(){
  $(".alert__container").fadeOut(300, function () {
    $(this).remove();
});
})
 













function checkValidationNewPassword() {
  // Check if username and email inputs are valid
  if (formValidNewPassword.password && formValidNewPassword.repeatpassword ) {
    $('#submitNewButton').removeAttr('disabled'); // Allow submitting of form
  } else {
    $('#submitNewButton').attr('disabled', true); // Block form from being submitted
  }
}

var formValidNewPassword = {
    password:false,
    repeatpassword:false
};








         
      // Validation for E-mail Input
      $('#newpassword').on('input', function() {
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
          formValidNewPassword.password = false; // Set input as invalid
          $('.passwordNew').addClass('fa-times');
          $('.passwordNew').removeClass('fa-eye');
          checkValidationNewPassword(); // Perform validation check
        }
           else {
            hide(); // Hide previous error messages
            formValidNewPassword.password = true; // Set input as invalid
            $('.passwordNew').addClass('fa-eye');
            $('.passwordNew').removeClass('fa-times');
            checkValidationNewPassword(); // Perform validation check
            // Check if e-mail value meets length requirements
            if (password.length < 8) {
              $('.passwordNew').addClass('fa-times');
              $('.passwordNew').removeClass('fa-eye');
              msg('Must be at least 8 characters'); // Return custom error message to DOM
              formValidNewPassword.password = false; // Set input as invalid
              checkValidationNewPassword(); // Perform validation check
            
            } else {
              hide(); // Hide previous error message
              formValidNewPassword.password = true; // Set input as valid
              $('.passwordNew').addClass('fa-eye');
              $('.passwordNew').removeClass('fa-times');
              checkValidationNewPassword(); // Perform validation check
            }
           }        
      });



      $(".passwordNew").click( function() {
        var x = document.getElementById("newpassword");
        if (x.type === "password") {
          x.type = "text";
          $('.passwordNew').addClass('fa-eye-slash');
          $('.passwordNew').removeClass('fa-eye');
        
        } else {
          x.type = "password";
          $('.passwordNew').addClass('fa-eye');
          $('.passwordNew').removeClass('fa-eye-slash');
        }
      })

      $(".passwordRepeatNew").click( function() {
        var x = document.getElementById("newrepeatpassword");
        if (x.type === "password") {
          x.type = "text";
          $('.passwordRepeatNew').addClass('fa-eye-slash');
          $('.passwordRepeatNew').removeClass('fa-eye');
        
        } else {
          x.type = "password";
          $('.passwordRepeatNew').addClass('fa-eye');
          $('.passwordRepeatNew').removeClass('fa-eye-slash');
        }
      })
  
      
      $('#newrepeatpassword').on('input', function() {
        var repeartpassword = $(this).val(); // Assign input value to a variable
        var password = $('#newpassword').val();
        // Function to assign message to paragraph tag
        function msg(body) {
            $('#repeatpassword-feedback').text(body).delay(100).show(200);
          };
        
          // Function to hide paragraph tag
          function hide() {
            $('#repeatpassword-feedback').delay(100).hide(0);
          };
      
        // Check if e-mail value is at least 1 character
        if (repeartpassword != password) {
          msg('Passwords do not match.'); // Assign error message to DOM.
          formValidNewPassword.repeatpassword = false; // Set input as invalid
          $('.passwordRepeatNew').addClass('fa-times');
          $('.passwordRepeatNew').removeClass('fa-eye');

          checkValidationNewPassword(); // Perform validation check
        }
           else {
            hide();
            formValidNewPassword.repeatpassword = true; 
            $('.passwordRepeatNew').addClass('fa-eye');
            $('.passwordRepeatNew').removeClass('fa-times');

            checkValidationNewPassword(); 

        
          }
        
      });



  });



