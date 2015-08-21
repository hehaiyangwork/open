// Custom user scripts

// Quote marks fix
+function addMarginFix() {
  var para = document.querySelectorAll("p, li");

  for (var i = 0; i < para.length; i++) {
    var firstLetter = para[i].innerHTML.trim().charAt(0);
    var regex = /「|『|“/;

    if (firstLetter.match(regex)) {
      para[i].className += ' ' + "leading-indent-fix";
    }
  }
}();

// GA tracking code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42629236-5', 'auto');
ga('send', 'pageview');
