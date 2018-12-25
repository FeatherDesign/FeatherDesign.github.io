$(function() {

    var btnF = $('span.F');

    function editWeight(t,s,r,i){
        for(1==t?s.css({"font-weight":300}):0==t&&s.css({"font-weight":r}),n=0;n<i;)
            setTimeout(function(){w=s.css("font-weight"),
                1==t?w=Number(w)+100:0==t&&(w=Number(w)-100),
                s.css({"font-weight":w})},30*n),n++
    };
    btnF.click(function() {
        // $('span.F').css({'position': 'absolute'});
        if ($('span.e').css('font-weight') == '300') {
            editWeight(true, $('span.e'), 800, 5);
        }
        else if ($('span.e').css('font-weight') == '800') {
            editWeight(false, $('span.e'), 800, 5);
        } 

        if ($('span.a').css('font-weight') == '300') {
            editWeight(true, $('span.a'), 700, 4);
        }
        else if ($('span.a').css('font-weight') == '700') {
            editWeight(false, $('span.a'), 700, 4);
        } 

        if ($('span.t').css('font-weight') == '300') {
            editWeight(true, $('span.t'), 600, 3);
        }
        else if ($('span.t').css('font-weight') == '600') {
            editWeight(false, $('span.t'), 600, 3);
        } 

        if ($('span.h').css('font-weight') == '300') {
            editWeight(true, $('span.h'), 500, 2);
        }
        else if ($('span.h').css('font-weight') == '500') {
            editWeight(false, $('span.h'), 500, 2);
        } 
        if ($('span.e2').css('font-weight') == '300') {
            editWeight(true, $('span.e2'), 400, 1);
        }
        else if ($('span.e2').css('font-weight') == '400') {
            editWeight(false, $('span.e2'), 400, 1);
        } 
    });
    // $('.other span').hover(function(){
    //     editWeight(true, $(this), 800, 5);
    // });

    
});
