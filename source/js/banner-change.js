/**
 * Created by aleksandr on 26.01.18.
 */

(function(){

  var imgHead = [
    'assets/img/banner-1.png',
    'assets/img/banner-2.png'
    // 'images/imgCsaHead/img2.jpg',
    // 'images/imgCsaHead/img3.jpg'
  ], i=1;

  var block = $('#header');

  setInterval(function() {
    if(i > (imgHead.length-1)){
      block.animate({'opacity':'0'}, 200,  function(){
        i=1;
        block.css({'background':'url('+imgHead[0]+')'});
      });
      block.animate({'opacity':'1'}, 200);
    }else{
      block.animate({'opacity':'0'}, 200, function(){
        block.css({'background':'url('+imgHead[i]+')'});
        i++;
      });
      block.animate({'opacity':'1'},200);
    }

  }, 1000);
})();

