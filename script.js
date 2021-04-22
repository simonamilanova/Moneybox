//Change header color on scroll
let header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


//To top button 
let btnToTop = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
};

btnToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


//Handling prices
$(document).ready(function () {
  let baseUrl2 = "http://api.ipstack.com/77.28.14.118?access_key=ad5de90628b7cd643ce58de917cdf4fe";
  let premiumVal = document.getElementById("premiumValue");
  let businessVal = document.getElementById("businessValue");

  window.addEventListener("load", () => {
    $.ajax ({
      url: baseUrl2,
      success: function (response) {
        if (response.country_code === "GBR" && response.continent_name === "Europe") {
          businessVal.textContent = "£";
          premiumVal.textContent = "£";
        } else if(response.continent_name === "Europe") {
            businessVal.textContent = "€";
            premiumVal.textContent = "€";
        } else {
            businessVal.textContent = "$";
            premiumVal.textContent = "$";
          }
      },
      error: function (error) {
        console.error("Something went wrong");
      }
    })
  })

  let element = $(".contentBasicPlan");
  let btnArrowOne = $("#btnArrowOne");
  let btnArrowTwo = $("#btnArrowTwo");
  let btnArrowThree = $("#btnArrowThree");

  let contentPlanOne = $("#planOne");
  let contentPlanTwo = $("#planTwo");
  let contentPlanThree = $("#planThree");
  $(window).resize(function() {
    if ($(window).width() < 400) {
      $(element).hide();
      $(btnArrowOne).show();
      $(btnArrowTwo).show();
      $(btnArrowThree).show();

    } else if ($(window).width() > 1000) {
      $(element).show();
      $(btnArrowOne).hide();
      $(btnArrowTwo).hide();
      $(btnArrowThree).hide();
    }
  });

  $(btnArrowOne).click(function(){
    $(contentPlanOne).toggle()
  })

  $(btnArrowTwo).click(function(){
    $(contentPlanTwo).toggle()
  })

  $(btnArrowThree).click(function(){
    $(contentPlanThree).toggle()
  })

  

  
});








