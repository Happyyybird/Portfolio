var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#video button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Play";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
vid.pause();
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Play";
  }
})



    function viewdiv(id) {
        var el = document.getElementById(id);
        var link = document.getElementById('toggleLink');
        if (el.style.display == "block") {
          
            el.style.display = "none";
            link.innerText = link.getAttribute('data-text-hide');
        } else {
            el.style.display = "block";
            link.innerText = link.getAttribute('data-text-show');
        }
    }



var simpleValidation = function(){

  var validateForm = $('form.validate-form');
  validateForm.each(function(){
    var validateForm = $(this);
    var validate = {};
    var validateThis = $(this).find('.validate');
    var validatingLength = $(this).find('.validate').length;
    var submitBtn = $(this).find('.submit');
    for(var i = 1; i <= validatingLength; i++){
      validate['input'+i] = false;
    }

    $('.validate').blur(function(){
      var index =  $(this).prevAll().length+1;
      var validateThisVal = $(this).val();
      var validateThisType = $(this).attr('type');
      if(validateThisType === "email"){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!validateThisVal.match(re)){
          $(this).addClass('not-valid');
          $(this).removeClass('is-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('is-valid');
          $(this).removeClass('not-valid');
          return validate['input'+index] = true;
        }
      } else{
        if(validateThisVal == ""){
          $(this).addClass('not-valid');
          $(this).removeClass('is-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('is-valid');
          $(this).removeClass('not-valid');
          return validate['input'+index] = true;
        }
      }
    });

    validateForm.submit(function(event){
      event.preventDefault();
      var falseCtn = 0;
      for(var i = 1; i <= validatingLength; i++){
        if(validate['input'+i] == false){
          falseCtn++;
        }
      }
      if(falseCtn > 0){
        $(this).unbind('submit').submit();
        $(this).click();
      } else{
      }
    });

  });

};
simpleValidation()






