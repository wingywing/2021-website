// var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
// $(document).ready(function(){
//     if (width > 992) {
//         $('.projLink').mouseover(function() {
//             myvar = this.id;
//             $(".projectImg").fadeOut("50", "swing");
//              $('#div'+myvar).fadeIn("100", "swing");
             
//       });
//     }
// }); To fade in and out from nothing


//To fade to 100 opacity from 20% on hover
var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
$(document).ready(function(){
    if (width > 992) {
        $('.projLink').mouseover(function() {
            myvar = this.id;
            $(".projectImg").fadeTo("fast", .20);
            $('#div'+myvar).fadeTo("fast", 1.0);
      });
    }
});