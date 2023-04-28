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
    function Chonsonguyento(num){
        if (num % 2 == 0)
        {
            return false;
        }
        for(let i = 2;i<= num/2;i++)
        {
            if(num % i == 0)
            {
                return false;
            }


        }
        return true;

    }
    function Chonsonguyentongaunhien(){
       var random_songuyento;
       do{
            random_songuyento = Math.floor(Math.random() * 9000 + 1000)
       }while(!Chonsonguyento(random_songuyento))
       return random_songuyento;
    }
    function Chonkhoabimat(p){
        return Math.floor(Math.random() * (p-4) +2);

    }
    function GCD(a,b)
    {
        if(a == 0)
        {
            return b;
        }
        else{
            return GCD(b%a,a)
        }


    }
    function KiemTraGCD(a,b)
    {
        return GCD(a,b) == 1;
    }
    function ChonK(p){
        let k;
        do{
            k = Math.floor(Math.random()* (p-3)+1);
        }while(!KiemTraGCD(k,p))
        return k;
    }
    /*lấy số p,a,x */
    $('.key_created').click(function(){
        p = Chonsonguyentongaunhien();
        $('#number_p').text(p);
        a = Math.floor(Math.random()*150+50)
        $('#number_a').text(a);

        x = Chonkhoabimat(p);
        $('#number_x').text(x);
        
        d = publicKeyValue(p,a,x)
        $('.number_d').text(d)
    })
    $('.rechose').click(function(){
        k = ChonK(p)
        $('#number_k').text(k);
        
        y = publicKeyValue(p,a,k)
        $('#number_y').text(y);

    })
})