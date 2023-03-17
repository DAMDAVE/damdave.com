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
      linkSupport.style.color ="initial";
      linkSupport.style.borderBottom = "transparent";
      $ajaxUtils.sendGetRequest(
        home,
        function (responseText) {
          document.querySelector("#main-content").innerHTML = responseText
        },
       false
      )
  };

  function loadpageCertificate () {
    showLoading("#main-content");
    linkCertificate.style.color ="#8e158a";
    linkCertificate.style.borderBottom = "solid 2px #8e158a";
    linkHome.style.color ="initial";
    linkHome.style.borderBottom= "transparent";
    linkPrevious.style.color ="initial";
    linkPrevious.style.borderBottom= "transparent";
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
    linkSupport.style.color ="initial";
    linkSupport.style.borderBottom = "transparent";
    $ajaxUtils.sendGetRequest(
      certificate,
      function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText
      },
     false
    )
};

function loadpagePrevious () {
  showLoading("#main-content");
  linkPrevious.style.color ="#8e158a";
  linkPrevious.style.borderBottom = "solid 2px #8e158a";
  linkHome.style.color ="initial";
  linkHome.style.borderBottom = "transparent";
  linkCertificate.style.color ="initial";
  linkCertificate.style.borderBottom = "transparent";
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
  linkSupport.style.color ="initial";
  linkSupport.style.borderBottom = "transparent";
  $ajaxUtils.sendGetRequest(
    previous,
    function (responseText) {
      document.querySelector("#main-content").innerHTML = responseText
    },
   false
  )
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
