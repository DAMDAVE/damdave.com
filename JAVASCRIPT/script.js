var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
    var html = "<div class='text-center gif'>";
    html += "<img src='IMAGES/123.gif'></div>";
    insertHtml(selector, html);
  };

  var homehtml ="HTML/home.html"
 
document.addEventListener("DOMContentLoaded", function (event) {
  showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homehtml, 
      function (responseText){
      document.querySelector("#main-content").innerHTML = responseText
      },
      false
    )
   });
  
   function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunc() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

    const d = new Date ()
    let year = d.getFullYear();
    document.getElementById("year").innerHTML = year;
