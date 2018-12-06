var Questions = [
    {"question" : "De Quelle ville vient Kyllian Mbappé ?", "Choix1": "Bondy", "Choix2":"Poissy","Choix3":"Creteil","Choix4":"Argenteuil","reponse":"1"},
    {"question" : "Quelle équipe n'a jamais gagné la Ligue des champions ?", "Choix1": "Atlético de Madrid", "Choix2":"Chelsea FC","Choix3":"Borussia Dortmund","Choix4":"Real Madrid","reponse":"1"},
    {"question" : "Dans quelle division joue le Stade de Reims ?", "Choix1": "Calcio B", "Choix2":"Proximus League","Choix3":"Ligue 2","Choix4":"Premiere League","reponse":"3"},
    {"question" : "Dans quel club joue Paulo Dybala en avril 2018 ?", "Choix1": "Real Madrid", "Choix2":"Paris Saint Germain","Choix3":"Juventus","Choix4":"Liverpool","reponse":"3"},
    {"question" : "Quel joueur a gagné le moins souvent le Ballon d'or au 6 avril 2018 ?", "Choix1": "Neymar Jr.", "Choix2":"Cristiano Ronaldo","Choix3":"Lionel Messi","Choix4":"Zinedine Zidane","reponse":"1"},
    {"question" : "Quelle est la nationalité du président de l'Olympique de Marseille en 2018 ?", "Choix1": "Italienne", "Choix2":"Française","Choix3":"Américaine","Choix4":"Anglaise","reponse":"3"},
    {"question" : "Où le père de Neymar a-t-il acheté une maison ?", "Choix1": "Paris", "Choix2":"Bordeaux","Choix3":"Guimgamp","Choix4":"Lyon","reponse":"3"},
    {"question" : "Qui est le défenseur droit de l'AS Saint-Étienne en avril 2018 ?", "Choix1": "Christophe Jallet", "Choix2":"Mathieu Debuchy","Choix3":"Bacary Sagna","Choix4":"Benjamin Pavard","reponse":"2"},
    {"question" : "Où joue Mariano Díaz en 2018 ?", "Choix1": "Real Madrid", "Choix2":"Olympique lyonnais","Choix3":"Olympique Marseille","Choix4":"Paris Saint Germain","reponse":"2"},
    {"question" : "Qui a marqué le plus de buts en sélection nationale ?", "Choix1": "Neymar Jr.", "Choix2":"Antoine Griezmann","Choix3":"Cristiano Ronaldo","Choix4":"Harry Kane","reponse":"3"},];

    $('#questions').html(Questions[0].question);
    $('#1').html(Questions[0].Choix1);
    $('#2').html(Questions[0].Choix2);
    $('#3').html(Questions[0].Choix3);
    $('#4').html(Questions[0].Choix4);

var compteur = 0;
var BonneReponse = 0;
var texte = document.getElementById('Texte');
var questionfini = document.getElementById('questions');

        $('.reponse').click(function () {
            var click = this .id;

            if ( parseInt(click) === parseInt(Questions[compteur].reponse)) {
                BonneReponse++;
            }
            else  {
                if (parseInt(Questions[compteur].reponse) === 1) {
                    console.log('test');
                    texte.innerHTML += "<br>" + '- ' + questionfini.innerHTML + ' ' + Questions[compteur]["Choix" + Questions[compteur].reponse];
                }
                if (parseInt(Questions[compteur].reponse) === 2) {
                    console.log('test2');
                    texte.innerHTML += "<br>" + '- ' +  questionfini.innerHTML + ' ' + Questions[compteur]["Choix" + Questions[compteur].reponse];
                }
                if (parseInt(Questions[compteur].reponse) === 3) {
                    console.log('test3');
                    texte.innerHTML += "<br>" + '- ' +  questionfini.innerHTML + ' ' + Questions[compteur]["Choix" + Questions[compteur].reponse];
                }
                if (parseInt(Questions[compteur].reponse) ===    4) {
                    console.log('test4');
                    texte.innerHTML += "<br>" + '- ' +  questionfini.innerHTML + ' ' + Questions[compteur]["Choix" + Questions[compteur].reponse];
                }
            }

            compteur++;

            if ( compteur < Questions.length+1) {

                $('#chiffre').html(compteur);

                if (Questions[compteur])
                {
                    $('#questions').html(Questions[compteur].question);
                    $('#1').html(Questions[compteur].Choix1);
                    $('#2').html(Questions[compteur].Choix2);
                    $('#3').html(Questions[compteur].Choix3);
                    $('#4').html(Questions[compteur].Choix4);

                }
                if ( compteur == 10) {
                    $('.container').hide();
                    $('.container3').css("display", "block");
                    $('#total').html(BonneReponse);
                }
                console.log('compteur = ' + compteur);
                console.log('questions = ' + Questions.length)
            }});

        $('#Refresh').click(function () {
            location.reload();
        });



