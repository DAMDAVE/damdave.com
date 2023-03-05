$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
      $("#offcanvasBody").collapse('hide');
  });
});

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
    var html = "<div class='text-center gif'>";
    html += "<img src='IMAGES/1485.gif'></div>";
    insertHtml(selector, html);
  };
document.addEventListener("DOMContentLoaded", function (event) {
  showLoading("#main-content")
});