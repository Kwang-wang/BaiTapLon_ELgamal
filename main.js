var p;
var a;
var x;
var d;
var k;
var y;




$(document).ready(function() {
    function publicKeyValue(p,a,x){
        let result = 1
        for (let i = 1;i<=x;i++)
        {
            result = (result*a) % p;
        }
        return result
    }
    /*lấy số p,a,x */
    $('.key_created').click(function(){
        p = parseInt($('#number_p').val());
        a = parseInt($('#number_a').val());
        x = parseInt($('#number_x').val());
        
        d = publicKeyValue(p,a,x)
   
        $('.number_d').text(d)
    })
    $('#number_k').change(function(){
        k = parseInt($(this).val());
        y = publicKeyValue(p,a,k);
        console.log(y);
        $('.number_y').text(y);
    })
    $('.rechose').click(function(){
        k = 0;
        $('.number_y').text('0');
        $('.number_k').text('0');


    })
    
})