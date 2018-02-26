// // /**
// //  * Created by aleksandr on 26.01.18.
// //  */
// //
// (function(){
//
//   var block = $('#header .header__background');
//   var item = $('#header .header__background .main-pic');
//
//   setInterval(function() {
//     for(var i = 0;  i < item.length; i++) {
//       if(i < item.length){
//         block.animate({'opacity':'0'}, 1000,  function(){
//           i=1;
//           block.css({'background':'url('+imgHead[0]+')'});
//         });
//         block.animate({'opacity':'1'}, 1000);
//       }else{
//         block.animate({'opacity':'0'}, 200, function(){
//           block.css({'background':'url('+imgHead[i]+')'});
//           i++;
//         });
//         block.animate({'opacity':'1'},200);
//       }
//     }
//
//
//
//   }, 8000);
// })();
//
//
// $(function () {}
//
//
// );
//


var total_pics_num = 4; // колличество изображений
var interval = 5000;    // задержка между изображениями
var time_out = 1;       // задержка смены изображений
var i = 0;
var timeout;
var opacity = 100;
function fade_to_next() {
  opacity--;
  var k = i + 1;
  var image_now = 'image_' + i;
  if (i == total_pics_num) k = 1;
  var image_next = 'image_' + k;
  document.getElementById(image_now).style.opacity = opacity/100;
  document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
  document.getElementById(image_next).style.opacity = (100-opacity)/100;
  document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
  timeout = setTimeout("fade_to_next()",time_out);
  if (opacity==1) {
    opacity = 100;
    clearTimeout(timeout);
  }
}
setInterval (
    function() {
      i++;
      if (i > total_pics_num) i=1;
      fade_to_next();
    }, interval
);
