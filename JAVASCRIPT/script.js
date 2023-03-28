var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
    var html = "<div class='text-center gif'>";
    html += "<img src='IMAGES/123.gif'></div>";
    insertHtml(selector, html);
};


const certificate = "HTML/certificate.html"
const connect = "HTML/connect.html"
const home = "HTML/home.html"
const previous = "HTML/previous.html"
const works = "HTML/works.html"

const linkHome = document.querySelector(".home");
const linkCertificate = document.querySelector(".certificate");
const linkPrevious = document.querySelector(".previous");
const linkWorks = document.querySelector(".works");
const linkConnect = document.querySelector(".connect");

document.addEventListener("DOMContentLoaded", function (event) {
    loadpageHome()
});

var a = document.querySelector(".myLinks");

linkHome.addEventListener("click", loadpageHome)
linkCertificate.addEventListener("click", loadpageCertificate)
linkPrevious.addEventListener("click", loadpagePrevious)
linkWorks.addEventListener("click", loadpageWorks)
linkConnect.addEventListener("click", loadpageConnect)

function loadpageHome () {
      showLoading("#main-content");
      a.scrollLeft = -10;
      linkHome.style.color ="#8e158a";
      linkHome.style.borderBottom = "solid 2px #8e158a";
      linkCertificate.style.color ="#e6a3e4";
      linkCertificate.style.borderBottom = "transparent";
      linkPrevious.style.color ="#e6a3e4";
      linkPrevious.style.borderBottom = "transparent";
      linkWorks.style.color ="#e6a3e4";
      linkWorks.style.borderBottom = "transparent";
      linkConnect.style.color ="#e6a3e4";
      linkConnect.style.borderBottom = "transparent";
      
      
      
      $ajaxUtils.sendGetRequest(
        home,
        function (responseText) {
          document.querySelector("#main-content").innerHTML = responseText
        },
       false
      );

      var newLink = document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.href = "CSS/style.css";
      document.getElementsByTagName('head')[0].appendChild(newLink);
  };

  function loadpageCertificate () {
    showLoading("#main-content");
    a.scrollLeft = 20;
    linkCertificate.style.color ="#1f158e";
    linkCertificate.style.borderBottom = "solid 2px #1f158e";
    linkHome.style.color ="#a9a3e6";
    linkHome.style.borderBottom= "transparent";
    linkPrevious.style.color ="#a9a3e6";
    linkPrevious.style.borderBottom= "transparent";
    linkWorks.style.color ="#a9a3e6";
    linkWorks.style.borderBottom = "transparent";
    linkConnect.style.color ="#a9a3e6";
    linkConnect.style.borderBottom = "transparent";
  
  
  
    $ajaxUtils.sendGetRequest(
      certificate,
      function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText
      },
     false
    );

  var newLink = document.createElement("link");
   newLink.rel = "stylesheet";
   newLink.href = "CSS/certificate.css";
   document.getElementsByTagName('head')[0].appendChild(newLink);
   
};
 

function loadpagePrevious () {
  showLoading("#main-content");
  a.scrollLeft = 200;
  linkPrevious.style.color ="#158e47";
  linkPrevious.style.borderBottom = "solid 2px #158e47";
  linkHome.style.color ="#a3e6b4";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="#a3e6b4";
  linkCertificate.style.borderBottom = "transparent";
  linkWorks.style.color ="#a3e6b4";
  linkWorks.style.borderBottom = "transparent";
  linkConnect.style.color ="#a3e6b4";
  linkConnect.style.borderBottom = "transparent";

  $ajaxUtils.sendGetRequest(
    previous,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  );
  
  var newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = "CSS/previous.css";
  document.getElementsByTagName('head')[0].appendChild(newLink);
};

function loadpageWorks () {
  showLoading("#main-content");
  a.scrollLeft = 400;
  linkWorks.style.color ="#888e15";
  linkWorks.style.borderBottom = "solid 2px #888e15";
  linkHome.style.color ="#e6e0a3";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="#e6e0a3";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="#e6e0a3";
  linkPrevious.style.borderBottom = "transparent";
  linkConnect.style.color ="#e6e0a3";
  linkConnect.style.borderBottom = "transparent";

  $ajaxUtils.sendGetRequest(
    works,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )

  var newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = "CSS/works.css";
  document.getElementsByTagName('head')[0].appendChild(newLink);
};


function loadpageConnect () {
  showLoading("#main-content");
  a.scrollLeft = 575;
  linkConnect.style.color ="#8e1515";
  linkConnect.style.borderBottom = "solid 2px #8e1515";
  linkHome.style.color ="#e6a3a3";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="#e6a3a3";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="#e6a3a3";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="#e6a3a3";
  linkWorks.style.borderBottom = "transparent";

  $ajaxUtils.sendGetRequest(
    connect,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )

  var newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = "CSS/connect.css";
  document.getElementsByTagName('head')[0].appendChild(newLink);
};


  let mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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
