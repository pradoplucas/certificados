function sendForm(){
    var xhr = new XMLHttpRequest();

    data_ = new FormData();
    data_.set("entry.2040877914", document.getElementById("textarea-suggestion").value);

    xhr.open('POST', 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSf_raIxj0YaZolffmMCSbutPnLnwxAqCORKKZnKEewle84YdA/formResponse', true);
    xhr.send(data_);

    console.log('Dá erro, mas dá certo..')

    document.getElementById("send-suggestion").style = ""
}

var getNames = true;
var allNames = [];

function searchName(){
    var s = document.getElementById("input-search").value;

    if((s.length == 1) && getNames){
        getNames = false
        allNames = Object.keys(data)
    }

    if(s.length > 3){
        var inputName = s.toUpperCase();
        var matchNames = [];
        var resultDivs = "";

        allNames.forEach((value, _index, array) => {
            if(value.includes(inputName)){
                matchNames.push(value);
            }
        });

        console.log(matchNames);

        if(matchNames.length > 5){
            matchNames = matchNames.slice(0,5);
        }

        matchNames.forEach((value, _index, array) => {

            var p1 = "<a href=\"#\" onClick=\"searchCertificates(\'";
            var p2 = "\')\"><div class=\"div-inside\">";
            var p3 = "</div></a>";

            resultDivs += p1 + value + p2 + value + p3;

        });

        //<a href=""><div class="div-inside">heeey</div></a>

        document.getElementById("div-res").innerHTML = resultDivs;
    }

    else{
        document.getElementById("div-res").innerHTML = "";
    }
}

function searchCertificates(nome) {
    document.getElementById("input-search").value = nome;
    document.getElementById("div-res").innerHTML = "";
    document.getElementById("div-text-verifica").style = "display: none;";
    document.getElementById("div-search").style = "margin-bottom: 2rem;";
    document.getElementById("div-main-row").style = "";
    document.getElementById("certificates-by-year").style = "height: 80%;";

    var partInit = "<div class=\"container-fluid p-0 h-100\"><div class=\"row h-100 align-items-center justify-content-center text-center\">",
        part1yl = "<div class=\"col-lg-3 col-md-3 col-sm-4 col-5 div-year\"><a class=\"certificates-by-year-box a-cert\" href=\"#div-cert-",
        part3yl = "\" onclick=\"showCertificates(\'",
        part5yl = "\')\"><img class=\"img-fluid img-year\" src=\"assets/",
        part7yl = ".png\"/><div class=\"certificates-by-year-box-caption div-year-inside\"><div class=\"project-category text-white-50\">N# Certificados</div><div class=\"project-name\" style=\"font-size:4rem;\">",
        part9yl = "</div></div></a></div>";

    var part1cl = "<div class=\"container py-3 mfp-hide\" id=\"div-cert-",
        part3cl = "\"><div class=\"row align-items-center justify-content-center text-center\"><div class=\"col-lg-1 col-2 div-cert-title\">Ano</div><div class=\"col-lg-4 col-4 div-cert-title\">Ações</div><div class=\"col-lg-7 col-6 div-cert-title\">Nome dos eventos</div>",
        part5cll = "<div class=\"col-lg-1 col-2 div-cert-content-",
        part7cll = "\">",
        part9cll = "</div><div class=\"col-lg-2 col-2 div-cert-content-",
        part11cll = "\"><a target=\"_blank\" href=\"",
        part14cll = "\">Ver</a></div><div class=\"col-lg-2 col-2 div-cert-content-",
        part16cll = "\"><a target=\"_blank\" href=\"",
        part19cll = "\">Baixar</a></div><div class=\"col-lg-7 col-6 div-cert-content-",
        part21cll = "\"data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"",
        part23cll = "\">",
        part25cll = "</div>",
        part26cl = "</div></div>",
        partFinal = "</div></div>";

    var linkVer = "http://apl.utfpr.edu.br/extensao/certificados/validar/",
        linkBaixar = "http://apl.utfpr.edu.br/extensao/emitir/";

    var certificatesByYear = data[nome];
    var certObj = new Object();
    var strResultYear = "";
    var strResultCert = "";
    var strAllYear = part1yl + "all" + part3yl + "all" + part5yl + "all" + part7yl;
    var strAllCert = part1cl + "all" + part3cl;;
    var numCertificates = 0;
    var strAllCLL = "";

    for (_year in certificatesByYear) {
        //console.log(certificatesByYear[_year]);
        //console.log(typeof(certificatesByYear[yL_yearist]));

        certObj[_year] = []

        strResultYear += part1yl + _year + part3yl + _year + part5yl + _year + part7yl;
        strResultCert += part1cl + _year + part3cl;

        var alternateColor = 0

        certificatesByYear[_year].forEach((value, _index, array) => {
            //console.log(value);
            //console.log(typeof(value));
            //certObj[_year].push(value)

            var auxColor = ((alternateColor % 2) + 1).toString();
            var strAuxCert = part5cll + auxColor + part7cll + _year + part9cll + auxColor + part11cll + linkVer + value[0] + part14cll + auxColor + part16cll + linkBaixar + value[0] + part19cll + auxColor + part21cll + value[1] + part23cll + value[1].slice(0, 15) + "[...]" + part25cll;

            strResultCert += strAuxCert;
            strAllCLL += strAuxCert;
            alternateColor ++;
        });

        var num = certificatesByYear[_year].length;
        
        numCertificates += num;

        strResultYear += num.toString() + part9yl;
        strResultCert += part26cl;
    }

    strAllYear += numCertificates.toString() + part9yl;

    strResultYear = strAllYear + strResultYear;

    strAllCert += strAllCLL + part26cl;

    strResultCert = strAllCert + strResultCert;


    document.getElementById("certificates-by-year").innerHTML = partInit + strResultYear + strResultCert + partFinal;

    //console.log(data[nome]);

    (function($) {
        "use strict"; // Start of use strict
    
        // Magnific popup calls
        $('.a-cert').magnificPopup({
            type: 'inline',
            preloader: false,
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });

        $('[data-toggle="tooltip"]').tooltip();

    })(jQuery); // End of use strict

}

function showCertificates(year_){
    console.log(year_)
}