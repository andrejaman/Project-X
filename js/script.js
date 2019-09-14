$(document).ready(function(){

/* prikaz padajuceg menija prilikom prelaska misem preko polja "O nama"*/
    $('.navigacija li').hover(function(){
        $(this).find('ul').fadeToggle();
    });
   
/* skrolovanje na odredjeno polje stranice prilikom klika na neko od polja navigacije ili logo */
    $('#pocetna a').on('click',function(e){
        if(this.hash !== ''){
            e.preventDefault();

            const hash = this.hash;

                /*console.log(hash);*/

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },600);
        };
    });

   

});



