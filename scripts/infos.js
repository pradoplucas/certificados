
//console.log(data["LUCAS DO PRADO PINTO"])

//##############################################################
//###################### Navigation ############################
//##############################################################

    //Project Name
        var name = "CertificaUTF";

        document.getElementById("project-title").innerHTML = name;
        document.getElementById("project-name").innerHTML = name;

    //Item Section
        var item_about = "Sobre";
        var item_contact = "Contato";

        document.getElementById("item-about").innerHTML = item_about;
        document.getElementById("item-contact").innerHTML = item_contact;

//##############################################################
//####################### Masthead #############################
//##############################################################

    //Project Name
        document.getElementById("project-name-menu").innerHTML = name;

//##############################################################
//######################### About ##############################
//##############################################################

    //What is SGCE?
        var title_what_sgce = "O que é o SGCE?";
        var what_sgce = "O <a target=\"_blank\" href=\"https://softwarepublico.gov.br/social/sgce\">Sistema de Gestão de Certificados Eletrônicos (SGCE)</a> é um software público que permite a criação, gestão e validação de certificados eletrônicos, sendo que a UTFPR o utiliza (<a target=\"_blank\" href=\"http://apl.utfpr.edu.br/extensao/certificados/listaPublica\">UTFPR-SGCE</a>).";
        
        document.getElementById("title-what-sgce").innerHTML = title_what_sgce;
        document.getElementById("what-sgce").innerHTML = what_sgce;

    //What is CertificaUTF?
        var title_what_certifica = "O que é o CertificaUTF?";
        var what_certifica = "Levando em consiração que o <a target=\"_blank\" href=\"http://apl.utfpr.edu.br/extensao/certificados/listaPublica\">UTFPR-SGCE</a> não permite uma consulta por nome, fica um pouco difícil encontrar todos os certificados de eventos que participamos. Mesmo que o certificado chegue por e-mail no momento em que é gerado, a maioria das pessoas acabam perdendo o acesso a ele por diversos motivos. <br>Sendo assim, essa aplicação têm o objetivo de facilitar o acesso das pessoas aos seus certificados, através de uma pesquisa por nome.";
    
        document.getElementById("title-what-certifica").innerHTML = title_what_certifica;
        document.getElementById("what-certifica").innerHTML = what_certifica;

    //Info 1
        var title_info_1 = "Info #1";
        var info_1 = "Contando todos os câmpus da UTFPR, foram encontrados 6184 eventos que geraram certificados no UTFPR-SGCE, somando cerca de 96228 pessoas diferentes e 322157 certificados únicos.";

        document.getElementById("title-info-1").innerHTML = title_info_1;
        document.getElementById("info-1").innerHTML = info_1;

    //Info 2
        var title_info_2 = "Info #2";
        var info_2 = "Em alguns casos, os dados para gerar os certificados são passados manualmente, causando erros e inconsistências, portanto, quando digitar seu nome ou sobrenome, verifique as opções que aparecem, pois pode ser que existam dois ou mais registros sobre você no sistema.";
    
        document.getElementById("title-info-2").innerHTML = title_info_2;
        document.getElementById("info-2").innerHTML = info_2;


//##############################################################
//######################## Contact #############################
//##############################################################

    //Section Name
        document.getElementById("contact-section").innerHTML = item_contact;

    //Contact Description
        var contact_description = "Caso tenha alguma dúvida, entre em contato através das redes sociais abaixo.";

        document.getElementById("contact-description").innerHTML = contact_description;

        //Facebook
            var contact_facebook = "https://www.facebook.com/pradoplucas";
            document.getElementById("contact-facebook").href = contact_facebook;

        //Instagram
            var contact_instagram = "https://www.instagram.com/pradoplucas/";
            document.getElementById("contact-instagram").href = contact_instagram;

        //Github
            var contact_github = "https://github.com/pradoplucas/";
            document.getElementById("contact-github").href = contact_github;

        //Linkedin
            var contact_linkedin = "https://www.linkedin.com/in/pradoplucas/";
            document.getElementById("contact-linkedin").href = contact_linkedin;

        //E-mail
        var contact_mail = "mailto:lucaspinto@alunos.utfpr.edu.br"
        document.getElementById("contact-mail").href = contact_mail;

        //Page
            var contact_page = "https://pradoplucas.github.io/";
            document.getElementById("contact-page").href = contact_page;

    //suggestion
        var title_suggestion = "Sugestões";

        document.getElementById("title-suggestion").innerHTML = title_suggestion;

    //Contact Description
        var suggestion = "Qualquer sugestão para melhorar a aplicação, informe abaixo.";

        document.getElementById("suggestion").innerHTML = suggestion;

    //Contact Description
        var button_suggestion = "Enviar";

        document.getElementById("button-suggestion").innerHTML = button_suggestion;

        
//##############################################################
//######################### Footer #############################
//##############################################################

    //Copyright
        var copyright = "Copyright © 2020 - Lucas do Prado Pinto";

        document.getElementById("copyright").innerHTML = copyright;

