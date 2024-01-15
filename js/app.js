(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

    // Tab Content
    function changeTab(tabId) {
      // Hide all tabs
      var tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
      });
  
      // Show the selected tab
      var selectedTab = document.getElementById(tabId);
      selectedTab.classList.add('active-tab');
    }


// Counter Count Down
$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 96,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 320,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 180,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 96,duration: 2500});



/* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('h2').addClass('trans');
    }, function(){
        $('.authorWindowWraper').stop().fadeOut('fast').find('h2').removeClass('trans');
    });

// Counter Count Down

// Top Button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
