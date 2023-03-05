$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
      $("#offcanvasBody").collapse('hide');
  });
});
var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='IMAGES/1485.gif'></div>";
    insertHtml(selector, html);
  };
  showLoading("#main-content");