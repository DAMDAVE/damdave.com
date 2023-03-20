var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
    var html = "<div class='text-center gif'>";
    html += "<img src='IMAGES/123.gif'></div>";
    insertHtml(selector, html);
  };

const blog = "HTML/blog.html"
const certificate = "HTML/certificate.html"
const conds = "HTML/conds.html"
const connect = "HTML/connect.html"
const credits = "HTML/credits.html"
const developer = "HTML/developer.html"
const home = "HTML/home.html"
const hosting = "HTML/hosting.html"
const previous = "HTML/previous.html"
const sign = "HTML/sign.html"
const support = "HTML/support.html"
const works = "HTML/works.html"

const linkHome = document.querySelector(".home");
const linkCertificate = document.querySelector(".certificate");
const linkPrevious = document.querySelector(".previous");
const linkWorks = document.querySelector(".works");
const linkHosting = document.querySelector(".hosting");
const linkConnect = document.querySelector(".connect");
const linkBlog = document.querySelector(".blog");
const linkConds = document.querySelector(".conds");
const linkSign = document.querySelector(".sign");
const linkDeveloper = document.querySelector(".developer");
const linkCredits = document.querySelector(".credits");
const linkSupport = document.querySelector(".support");


  document.addEventListener("DOMContentLoaded", function (event) {
   loadpageHome()
  });

   linkHome.addEventListener("click", loadpageHome)
   linkCertificate.addEventListener("click", loadpageCertificate)
   linkPrevious.addEventListener("click", loadpagePrevious)
   linkWorks.addEventListener("click", loadpageWorks)
   linkHosting.addEventListener("click", loadpageHosting)
   linkConnect.addEventListener("click", loadpageConnect)
   linkBlog.addEventListener("click", loadpageBlog)
   linkConds.addEventListener("click", loadpageConds)
   linkSign.addEventListener("click", loadpageSign)
   linkDeveloper.addEventListener("click", loadpageDeveloper)
   linkCredits.addEventListener("click", loadpageCredits)
   linkSupport.addEventListener("click", loadpageSupport)

function loadpageHome () {
      showLoading("#main-content");
      linkHome.style.color ="#8e158a";
      linkHome.style.borderBottom = "solid 2px #8e158a";
      linkCertificate.style.color ="#e6a3e4";
      linkCertificate.style.borderBottom = "transparent";
      linkPrevious.style.color ="#e6a3e4";
      linkPrevious.style.borderBottom = "transparent";
      linkWorks.style.color ="#e6a3e4";
      linkWorks.style.borderBottom = "transparent";
      linkHosting.style.color ="#e6a3e4";
      linkHosting.style.borderBottom = "transparent";
      linkConnect.style.color ="#e6a3e4";
      linkConnect.style.borderBottom = "transparent";
      linkBlog.style.color ="#e6a3e4";
      linkBlog.style.borderBottom = "transparent";
      linkConds.style.color ="#e6a3e4";
      linkConds.style.borderBottom = "transparent";
      linkSign.style.color ="#e6a3e4";
      linkSign.style.borderBottom = "transparent";
      linkDeveloper.style.color ="#e6a3e4";
      linkDeveloper.style.borderBottom = "transparent";
      linkCredits.style.color ="#e6a3e4";
      linkCredits.style.borderBottom = "transparent";
      linkSupport.style.color ="#e6a3e4";
      linkSupport.style.borderBottom = "transparent";
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
      document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(142, 82, 154)")
  };

  function loadpageCertificate () {
    showLoading("#main-content");
    linkCertificate.style.color ="#1f158e";
    linkCertificate.style.borderBottom = "solid 2px #1f158e";
    linkHome.style.color ="#a9a3e6";
    linkHome.style.borderBottom= "transparent";
    linkPrevious.style.color ="#a9a3e6";
    linkPrevious.style.borderBottom= "transparent";
    linkWorks.style.color ="#a9a3e6";
    linkWorks.style.borderBottom = "transparent";
    linkHosting.style.color ="#a9a3e6";
    linkHosting.style.borderBottom = "transparent";
    linkConnect.style.color ="#a9a3e6";
    linkConnect.style.borderBottom = "transparent";
    linkBlog.style.color ="#a9a3e6";
    linkBlog.style.borderBottom = "transparent";
    linkConds.style.color ="#a9a3e6";
    linkConds.style.borderBottom = "transparent";
    linkSign.style.color ="#a9a3e6";
    linkSign.style.borderBottom = "transparent";
    linkDeveloper.style.color ="#a9a3e6";
    linkDeveloper.style.borderBottom = "transparent";
    linkCredits.style.color ="#a9a3e6";
    linkCredits.style.borderBottom = "transparent";
    linkSupport.style.color ="#a9a3e6";
    linkSupport.style.borderBottom = "transparent";
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
   document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(19, 19, 133)")
};
 

function loadpagePrevious () {
  linkPrevious.style.color ="#158e47";
  linkPrevious.style.borderBottom = "solid 2px #158e47";
  linkHome.style.color ="#a3e6b4";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="#a3e6b4";
  linkCertificate.style.borderBottom = "transparent";
  linkWorks.style.color ="#a3e6b4";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="#a3e6b4";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="#a3e6b4";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="#a3e6b4";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="#a3e6b4";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="#a3e6b4";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="#a3e6b4";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="#a3e6b4";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="#a3e6b4";
  linkSupport.style.borderBottom = "transparent";
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    previous,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
  var newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = "CSS/previous.css";
  document.getElementsByTagName('head')[0].appendChild(newLink);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(82, 154, 123)")
};

function loadpageWorks () {
  showLoading("#main-content");
  linkWorks.style.color ="#8e158a";
  linkWorks.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    works,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageHosting () {
  showLoading("#main-content");
  linkHosting.style.color ="#8e158a";
  linkHosting.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    hosting,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageConnect () {
  showLoading("#main-content");
  linkConnect.style.color ="#8e158a";
  linkConnect.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    connect,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageBlog () {
  showLoading("#main-content");
  linkBlog.style.color ="#8e158a";
  linkBlog.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    blog,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageConds () {
  showLoading("#main-content");
  linkConds.style.color ="#8e158a";
  linkConds.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    conds,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageSign () {
  showLoading("#main-content");
  linkSign.style.color ="#8e158a";
  linkSign.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    sign,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageDeveloper () {
  showLoading("#main-content");
  linkDeveloper.style.color ="#8e158a";
  linkDeveloper.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    developer,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageCredits () {
  showLoading("#main-content");
  linkCredits.style.color ="#8e158a";
  linkCredits.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    credits,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
};

function loadpageSupport () {
  showLoading("#main-content");
  linkSupport.style.color ="#8e158a";
  linkSupport.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
  linkPrevious.style.color ="initial";
  linkPrevious.style.borderBottom = "transparent";
  linkWorks.style.color ="initial";
  linkWorks.style.borderBottom = "transparent";
  linkHosting.style.color ="initial";
  linkHosting.style.borderBottom = "transparent";
  linkConnect.style.color ="initial";
  linkConnect.style.borderBottom = "transparent";
  linkBlog.style.color ="initial";
  linkBlog.style.borderBottom = "transparent";
  linkConds.style.color ="initial";
  linkConds.style.borderBottom = "transparent";
  linkSign.style.color ="initial";
  linkSign.style.borderBottom = "transparent";
  linkDeveloper.style.color ="initial";
  linkDeveloper.style.borderBottom = "transparent";
  linkCredits.style.color ="initial";
  linkCredits.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    support,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
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
