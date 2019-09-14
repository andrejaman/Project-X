$(document).ready(function () {

    /* prikaz padajuceg menija prilikom prelaska misem preko polja "O nama"*/
    $('.navigacija li').hover(function () {
        $(this).find('ul').fadeToggle();
    });

    $(".prijava").hide();
    $(".sec1").show();
    $(".omeni").hide();
    $(".drugi").hide();
    $("#treci").hide();
    $(".registracija").hide();
    $(".footer").show();

    /* skrolovanje na odredjeno polje stranice prilikom klika na neko od polja navigacije ili logo */
    // Početna stranica

    $('#pocetna a').on('click', function () {

        /*if (this.hash !== "") {

            event.preventDefault();

            let izbor = this.hash;

            console.log(izbor);

            /*$('html, body').animate({
                scrollTop: $(hash).offset().top
            },600);
        }*/

        //event.preventDefault();

        let izbor = this.hash;

        console.log(izbor);

        if (izbor == "#prijava") {

            //$(".nav-item").addClass("active");
            $(".navbar").css("margin-bottom", 100 + "px");
            $(".prijava").show();
            $(".sec1").hide();
            $(".omeni").hide();
            $(".drugi").hide();
            $("#treci").hide();
            $(".registracija").hide();
            $(".footer").show().css("margin-top", 270 + "px");

            // Ovde treba da bude provera da li je kliknuto dugme "Zaboravljena lozinka"

            $('.prijava input').on('click', function () {

                event.preventDefault();

                let zaboravioLozinku = this.hash;

                console.log(zaboravioLozinku);

            });
        }

        else if (izbor == "#registracija") {

            $(".navbar").css("margin-bottom", 100 + "px");
            $(".registracija").show();
            $(".sec1").hide();
            $(".omeni").hide();
            $(".drugi").hide();
            $("#treci").hide();
            $(".prijava").hide();
            $(".footer").show().css("margin-top", 10 + "px");
        }

        else if (izbor == "#prvi") {

            $(".navbar").css("margin-bottom", 100 + "px");
            $(".omeni").show();
            $(".sec1").hide();
            $(".drugi").hide();
            $("#treci").hide();
            $(".prijava").hide();
            $(".registracija").hide();
            $(".footer").hide();

        }

        else if (izbor == "#drugi") {

            $(".navbar").css("margin-bottom", 100 + "px");
            $(".drugi").show();
            $(".sec1").hide();
            $(".omeni").hide();
            $("#treci").hide();
            $(".prijava").hide();
            $(".registracija").hide();
            $(".footer").hide();

        }

        else if (izbor == "#treci") {

            $(".navbar").css("margin-bottom", 100 + "px");
            $("#treci").show();
            $(".sec1").hide();
            $(".omeni").hide();
            $(".drugi").hide();
            $(".prijava").hide();
            $(".registracija").hide();
            $(".footer").hide();

        }

        else if (izbor == "#pocetna") {

            $(".prijava").hide();
            $(".sec1").show();
            $(".omeni").hide();
            $(".drugi").hide();
            $("#treci").hide();
            $(".registracija").hide();
            $(".footer").show();
            $(".navbar").css("margin-bottom", 10 + "px");
        }

    });

    // Stranica za prijavu kvara računara

    $(".dobro-dosli").show();
    $(".ucionica-1").hide();
    $(".ucionica-2").hide();
    $(".ucionica-3").hide();
    $(".footer").css("margin-top", 200 + "px");

    $("#racunari a").on('click', function () {

        let izborPc = this.hash;

        if (izborPc == "#ucionica-1") {

            $(".dobro-dosli").hide();
            $(".ucionica-1").show();
            $(".ucionica-2").hide();
            $(".ucionica-3").hide();
        }

        else if (izborPc == "#ucionica-2") {

            $(".dobro-dosli").hide();
            $(".ucionica-1").hide();
            $(".ucionica-2").show();
            $(".ucionica-3").hide();
        }

        else if (izborPc == "#ucionica-3") {

            $(".dobro-dosli").hide();
            $(".ucionica-1").hide();
            $(".ucionica-2").hide();
            $(".ucionica-3").show();
        }

        else if (izborPc == "#prijava-kvara") {

            $(".dobro-dosli").show();
            $(".ucionica-1").hide();
            $(".ucionica-2").hide();
            $(".ucionica-3").hide();

        }
    })

});



