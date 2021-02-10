/*main.js*/


/* $(function(){
    2depth 메뉴 액션*/
  /*  $('#gnb > ul > li').hover(
    function(){
        //마우스호버
        $(this)
            .find('.depth2')
            .addClass('show');     
    },
      function(){
          //마우스아웃
          $(this) 
            .find('.depth2')
        .removeClass('show');
      }  
    )
}); //end $ */


$(function(){
    /*2depth 메뉴 액션*/
    $('#gnb > ul > li').hover(
    function(){
        //마우스호버
         $('#gnb > ul > li')
            .find('.depth2')
            .addClass('show');     
    },
      function(){
          //마우스아웃
        $('#gnb > ul > li')
            .find('.depth2')
            .removeClass('show');
      }  
    )
}); //end $